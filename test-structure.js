(async () => {
    try {
        const module = await import('office-text-extractor')
        console.log(module) // Sehen Sie sich die Struktur des Moduls an
    } catch (error) {
        console.error('Error loading module:', error)
    }
})();
