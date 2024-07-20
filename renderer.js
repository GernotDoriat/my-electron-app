document.getElementById('extractButton').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileInput')
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0]
        const filePath = file.path

        console.log('Selected file path:', filePath)

        try {
            const result = await window.ipcRenderer.invoke('extract-text', filePath)
            if (result.success) {
                console.log('Extracted text:', result.text)
                document.getElementById('output').textContent = result.text
            } else {
                console.error('Error:', result.error)
                document.getElementById('output').textContent = `Error: ${result.error}`
            }
        } catch (error) {
            console.error('Error:', error)
            document.getElementById('output').textContent = `Error: ${error.message}`
        }
    } else {
        console.warn('No file selected')
        document.getElementById('output').textContent = 'Please select a file'
    }
})

document.getElementById('output').addEventListener('select', () => { console.warn('SELECT') })