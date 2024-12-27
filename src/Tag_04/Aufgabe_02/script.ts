// - Lernziel: Anwenden von TypeScript-Datumsfunktionen, Auswahl von HTML-Elementen und Anzeige des Ergebnisses im HTML-Dokument.
// - Stelle das aktuelle Datum in folgenden beiden Formen dar:
// tt-mm-jjjj und tt/mm/jjjj. (Tag, Monat, Jahr).
// - Nutze:  
// - getDate()  
// - getMonth()  
// - getFullYear()
// - getElementById() oder querySelector().
// - Stelle anschließend die aktuelle Uhrzeit auf zwei Arten dar
//     - lokal
//     - UTC
//        - 11:30 Uhr
//        - 09:30 Uhr
// - Lasse dir das Ergebnis im HTML-Dokument anzeigen.

const date = new Date()

const year = date.getFullYear()
const month = date.getMonth() + 1  
const day = date.getDate()

const time = date.toLocaleTimeString('de-DE', {hour: '2-digit', minute: '2-digit'})

const output = document.querySelector("#ausgabe") as HTMLParagraphElement    

if (output) {
    output.innerHTML = `
        <p><strong>${day}-${month}-${year}</strong></p>
        <p><strong>${day}/${month}/${year}</strong></p>
        <br>
        <p><strong><span style="color: red;">${time.substring(0, 2)}</span>${time.substring(2)} Uhr</strong></p>
        <p><strong>${time} Uhr</strong></p>
    `;
}