const { ipcRenderer } = require('electron')

document.getElementById('extractButton').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileInput')
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0]
        const filePath = file.path


        try {
            const result = await ipcRenderer.invoke('extract-text', filePath)
            if (result.success) {
                document.getElementById('output').textContent = result.text
            } else {
                document.getElementById('output').textContent = `Error: ${result.error}`
            }
        } catch (error) {
            document.getElementById('output').textContent = `Error: ${error.message}`
        }
    }
})
