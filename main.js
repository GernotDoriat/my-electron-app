const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false
        }
    })

    mainWindow.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

ipcMain.handle('extract-text', async (event, filePath) => {
    try {
        console.log('Received file path:', filePath)
        const { getTextExtractor } = await import('office-text-extractor')
        const extractText = getTextExtractor(filePath) // Holen Sie sich den Extraktor für die Datei
        if (typeof extractText !== 'function') {
            throw new Error('extractText is not a function')
        }
        const text = await extractText(filePath)
        console.log('Extracted text:', text)
        return { success: true, text }
    } catch (error) {
        console.error('Error extracting text:', error)
        return { success: false, error: error.message }
    }
})
