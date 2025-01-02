
// - Erstelle eine Variable vom Typ number-Array
// - Das Array hat zu Anfang folgende Werte: 23, 54, 75;
// - Verwende die Push-Methode, um 5 Werte in dein Array einzufügen.
// - Verwende die Unshift-Methode, um 5 Werte vorne im Array hinzuzufügen.
// - Verwende die Pop-Methode, um 2 Werte am Ende deines Arrays zu entfernen.
// - Verwende die Shift-Methode, um 2 Werte vorne im Array zu entfernen.
// - Lass dir nach jeder Veränderung das Ergebnis in der Konsole ausgeben

const numbers = [23, 54, 75];
console.log(numbers);

console.log("push------------------");
numbers.push(7, 77, 4, 35, 6)
console.log(numbers);

console.log("unshift------------------");
numbers.unshift(23, 4, 56, 5, 7)
console.log(numbers);

console.log("pop------------------");
numbers.pop();
numbers.pop();
console.log(numbers);

console.log("shift------------------");
numbers.shift();
numbers.shift();
console.log(numbers);