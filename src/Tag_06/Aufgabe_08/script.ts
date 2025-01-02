// - Die Methode [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/slice) kennst du schon von den Strings. Auch hier kann man mit slice() Werte aus einem Array schneiden und bekommt ein neues Array zurück. Hierbei ist zu beachten, dass slice() einen Startindex benötigt, optional auch einen Endindex.
// - Erstelle ein neues Array "lieblingsreiseziele".
// - Füge in der Mitte zwei Orte ein, die du nicht so gut findest
// - Schneide mit slice() die beiden Werte aus dem Array aus.
// - Lass dir dein Array "lieblingsreiseziele" einmal vor dem slicen in der Konsole ausgeben und einmal danach. Dir wird auffallen, dass das ursprüngliche Array nicht verändert worden ist. Das bedeutet, dass slice() eine Kopie von den Werten erstellt und nicht das ursprüngliche Array beeinflusst.

// Ursprüngliches Array
const famousPirates = [
    "Blackbeard",
    "Captain Kidd",
    "Anne Bonny",
    "Mary Read",
    "Bartholomew Roberts",
    "Captain Flint",
    "Edward Low",
    "Calico Jack",
    "Charles Vane",
    "Henry Morgan"
];

console.log(famousPirates);


// Schneide die beiden eingefügten Piraten aus
const slicedPirates = famousPirates.slice(5, 7);
console.log("Geschnittene Piraten: ", slicedPirates);

// Original-Array bleibt unverändert nach slice()
console.log("Nach dem Schneiden: ", famousPirates);