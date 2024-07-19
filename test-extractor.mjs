import { getTextExtractor } from 'office-text-extractor'
import { promises as fs } from 'fs'

async function testExtractor(filePath) {
    try {
        const fileBuffer = await fs.readFile(filePath)
        console.log('File buffer:', fileBuffer)

        // Initialisieren Sie den Extraktor und überprüfen Sie die Methoden
        const extractor = getTextExtractor()
        console.log('Extractor:', extractor)

        // Überprüfen Sie die Methode 'extractText' und ihre Typen
        if (typeof extractor.extractText !== 'function') {
            throw new Error('extractText is not a function')
        }

        // Versuchen Sie, den Text zu extrahieren
        const text = await extractor.extractText({ input: fileBuffer, type: 'buffer' })
        console.log('Extracted text:', text)
    } catch (error) {
        console.error('Error:', error)
    }
}


// Geben Sie den Pfad zu einer tatsächlichen Datei hier an
const filePath = '/Volumes/T5/electron/office-text-extractor-electron-app/test.docx'
testExtractor(filePath)
