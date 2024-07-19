const fs = require('fs').promises
const path = require('path')

async function testBuffer(filePath) {
    console.log(filePath)
    try {
        const fileBuffer = await fs.readFile(filePath)
        console.log('File buffer:', fileBuffer)
        console.log('Buffer type:', Buffer.isBuffer(fileBuffer))
    } catch (error) {
        console.error('Error reading file:', error)
    }
}

// Geben Sie den Pfad zu einer tatsächlichen Datei hier ein
const filePath = path.join(__dirname, 'test.docx')
testBuffer(filePath)
