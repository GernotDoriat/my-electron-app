(async () => {
    try {
        const { getTextExtractor } = await import('office-text-extractor')
        const extractor = getTextExtractor('dummyFilePath') // Ein Beispiel-Pfad
        console.log(extractor) // Struktur des zurückgegebenen Werts anzeigen
    } catch (error) {
        console.error('Error loading module:', error)
    }
})();
