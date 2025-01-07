// - Erstelle ein Array vom Typ String mit Herr der ringe charakteren: Aragorn, Legolas, Boromir, Gimli, Eowyn
// - Füge in das Array nochmal Aragorn und Legolas hinten hinzu
// - Lass dir den Inhalt des Arrays auf der Konsole ausgeben
// - Erstelle ein neues Set, dass das Array als Basis hat
// - Lass dir den Inhalt des Sets auf der Konsole ausgeben
// - Was fällt auf?


const lotrCharacters = new Set([
    "Aragorn",
    "Legolas",
    "Boromir",
    "Gimli",
    "Eowyn",
]);

console.log(lotrCharacters);
lotrCharacters.add("Aragorn"); // ? Wird nicht hinzugefügt, da bereits vorhanden
lotrCharacters.add("Legolas"); // ? Wird nicht hinzugefügt, da bereits vorhanden

console.log(lotrCharacters);

const lotrCharactersArray = ["Aragorn", "Legolas", "Boromir", "Gimli", "Eowyn", "Aragorn", "Legolas"];
console.log(lotrCharactersArray);

