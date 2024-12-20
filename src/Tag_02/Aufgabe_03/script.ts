
// slice() extrahiert Inhalte der einer String-Variable und gibt das Ergebnis als neuen String zurück
const susisStatus = 'Susi is going to codingschool'

// console.log(susisStatus.slice(0, 4));
// console.log(susisStatus.slice(5, 7));
// console.log(susisStatus.slice(5, -6));
// console.log(susisStatus.slice(-6));
// console.log(susisStatus.slice(0, 7).concat(" school"));

const susi = susisStatus.slice(0, 4)
console.log(susi);

const is = susisStatus.slice(5, 7)
console.log(is);

const isGoingToCoding = susisStatus.slice(5, -6)
console.log(isGoingToCoding);

const school = susisStatus.slice(-6)
console.log(school);

const susiIsSchool = susisStatus.slice(0, 7).concat(" school")
console.log(susiIsSchool);

// Speichere jedes Ergebnis in einer Variablen und verwende innerHTML, um das Ergebnis im Dokument auszugeben. 

const allesZusammen = document.querySelector("p");

// Überprüfen, ob das Element existiert
if (allesZusammen !== null) {
    // HTML-Inhalt mit den Slice-Ergebnissen füllen
    allesZusammen.innerHTML = `
        <p><strong>${susi}</strong></p>
        <p><strong>${is}</strong></p>
        <p><strong>${isGoingToCoding}</strong> </p>
        <p><strong>${school}</strong></p>
        <p><strong>${susiIsSchool}</strong></p>
    `;
}


