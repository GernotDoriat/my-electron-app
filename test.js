(async () => {
    try {
        const { extractText } = await import('office-text-extractor')
        console.log(typeof extractText) // Sollte 'function' sein
    } catch (error) {
        console.error('Error loading module:', error)
    }
})();
