const infoAboutSam = "Sam is going to codingschool";
const susi = "Susi";
const and = "and";

// Teile des Strings extrahieren
const school = infoAboutSam.slice(-6); // "school"
const goingTo = infoAboutSam.slice(7, -13); // "going to"
const sam = infoAboutSam.slice(0, 3); // "Sam"
const SusiSam = susi.concat(" " + and + " " + sam); // "Susi and Sam"

// Ergebnisse berechnen
const ergebnisEins = infoAboutSam.slice(0, 15).concat(" school " + and + " to the movie theater");
// "Sam is going to school and to the movie theater"
console.log(ergebnisEins);

const ergebnisDrei = "Sam is going to the movie theater";
// "Sam is going to the movie theater"
console.log(ergebnisDrei);

const ergebnisVier = SusiSam.concat(" are " + goingTo + " " + school);
// "Susi and Sam are going to school"
console.log(ergebnisVier);

const ergebnisFuenf = SusiSam.concat(" are " + goingTo + " gym " + and + " to the movie theater");
// "Susi and Sam are going to gym and to the movie theater"
console.log(ergebnisFuenf);

const ergebnisSechs = ergebnisEins.slice(-31); // "school and to the movie theater"
const ergebnisSieben = susi.concat(" is" + " " + goingTo + " " + ergebnisSechs);
// "Susi is going to school and to the movie theater"
console.log(ergebnisSieben);

// Ergebnisse in das Dokument einfügen
const ausgabe = document.querySelector("p");

if (ausgabe !== null) {
    ausgabe.innerHTML = `
        <p><strong>${ergebnisEins}</strong></p>
        <p><strong>${ergebnisDrei}</strong></p>
        <p><strong>${ergebnisVier}</strong></p>
        <p><strong>${ergebnisFuenf}</strong></p>
        <p><strong>${ergebnisSieben}</strong></p>
    `;
}else {
    console.log("Das Dokument existiert nicht");
}