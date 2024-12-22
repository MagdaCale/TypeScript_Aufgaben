
// Nutze die folgende Variable const samsStatus = "Sam is good at codingschool" und zeige mit der Methode "replace" folgende Ausgabe in einem HTML-Dokument an: 
const samsStatus: string = "Sam is good at codingschool"

const ergebnisEins = samsStatus.replace("Sam is good at codingschool", "Sam is bad at school")
const ergebnisZwei = samsStatus.replace("Sam is good at codingschool", "Susi is good at school ")
const ergebnisDrei = samsStatus.replace("Sam is good at codingschool", "Sam is good at tennis ")

console.log(ergebnisEins);   
console.log(ergebnisZwei);
console.log(ergebnisDrei);

// Speichere jedes Ergebnis in einer Variablen und verwende document.write(samsStatusBad… + "  "), um das Ergebnis anzuzeigen.
const samsStatusBad = ergebnisEins + "<br>" + ergebnisZwei + "<br>" + ergebnisDrei + "<br>";

document.write(`<p><strong>${samsStatusBad}</strong></p>`);



