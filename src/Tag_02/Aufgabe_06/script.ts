// Verwende den Befehl [toUpperCase()](https://www.w3schools.com/jsref/jsref%5Ftouppercase.asp) um aus der Variable const whereIsSam = "Sam is going to school" die veränderte Zeichenkette zu erhalten: SAM IS GOING TO SCHOOL.
//  Neben toUpperCase() gibt es auch noch den Befehl [toLowerCase()](https://www.w3schools.com/jsref/jsref%5FtoLowerCase). Schaue, was passiert, wenn du dies auf die Variable whereIsSam anwendest.
// - Erzeuge mit den beiden Befehlen folgende Zeichenketten und gib sie in deinem HTML aus:



const whereIsSam = "Sam is going to school"

const toUpperCase = whereIsSam.toUpperCase()
console.log(toUpperCase)

const toLowerCase = toUpperCase.toLowerCase()
console.log(toLowerCase)

// --------------------------------------------------------------------
// - SAM is going to SCHOOL
const SAM = toUpperCase.slice(0, 3)
const SCHOOL = toUpperCase.slice(-6)
const isGoingTo = whereIsSam.slice(4, -7)

const ergebnisEins = `${SAM} ${isGoingTo} ${SCHOOL}`
console.log(ergebnisEins);

// --------------------------------------------------------------------
// - sam IS GOING TO school
const sam = toLowerCase.slice(0, 3)
const school = toLowerCase.slice(-6)
const isGoingToUpper = toUpperCase.slice(4, -7)

const ergebnisZwei = `${sam} ${isGoingToUpper} ${school}`
console.log(ergebnisZwei);

// --------------------------------------------------------------------
// - Sam Is Going To School
const ergebnisDrei = toLowerCase
    .split(" ") // splittet den String in einzelne Wörter -> ["Sam", "is" ... ]
    .map(wort => wort.charAt(0).toUpperCase() + wort.slice(1)) 
    // geht durch jedes Element (wort) im Array.
    // charAt() -> gibt das erste Zeichen eines Strings zurück
    // slice(1) -> gibt die ersten Zeichen eines Strings aus
    .join(" "); // Die Wörter werden wieder zu einem String zusammenfügen

console.log(ergebnisDrei); 



// --------------------------------------------------------------------
const ausgabe = document.querySelector("p");

if (ausgabe !== null) {
    ausgabe.innerHTML = `
        <p><strong>${toUpperCase}</strong></p>
        <p><strong>${toLowerCase}</strong></p>
        <p><strong>${ergebnisEins}</strong></p>
        <p><strong>${ergebnisZwei}</strong></p>
        <p><strong>${ergebnisDrei}</strong></p>
    `;
}else {
    console.log("Das Dokument existiert nicht");
}