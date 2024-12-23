// - Schreibe Code, um die Differenz zwischen einer bestimmten Zahl und 27 zu erhalten.
// - Wenn die Differenz größer als 27 ist, multipliziere die Differenz mit 2.
// - Lass dir das Ergebnis in der Konsole ausgeben.
// - Teste die Nummern: 35, 74, 123.


const differenz = 35 - 27;
const ergebnis = differenz > 27 ? differenz * 2 : differenz;
console.log(ergebnis);

const differenz2 = 74 - 27; // differenz2 = 47
const ergebnis2 = differenz2 > 27 ? differenz2 * 2 : differenz2;
// Prüft: Ist 47 > 27? Ja -> ergebnis2 = 47 * 2 = 94
console.log(ergebnis2); 

const differenz3 = 123 - 27;
const ergebnis3 = differenz3 > 27 ? differenz3 * 2 : differenz3;
console.log(ergebnis3);
