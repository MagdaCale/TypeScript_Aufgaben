// - Wir wollen eine Mitarbeitendenverwaltung auf Basis eines Arrays erstellen
// - Erstelle eine Datei employee.ts
// - Dabei wollen wir im Array den Datentyp Tuple verwenden
// - Ein Tuple, das einen Mitarbeitenden repräsentiert besteht aus Nummer (number), Name (string), Abteilung (string) und Jahresgehalt (number)
// - Erstelle jetzt ein Array von diesen Tupeln, das mindestens 5 Mitarbeitende mit beliebigen Daten enthält
// - Lass dir alle Mitarbeitenden mit ihren Daten auf der Konsole ausgeben


const pirates: [number, string, string, number][] = [
    [1, "Edward Teach", "Kapitän", 100000],
    [2, "Anne Bonny", "Erster Maat", 75000],
    [3, "Jack Rackham", "Quartiermeister", 60000],
    [4, "Bartholomew Roberts", "Navigator", 55000],
    [5, "Mary Read", "Kanonierin", 50000]
]

console.log(pirates);

for (const [id, name, rolle, kopfgeld] of pirates) { 
    //  Destructuring => macht das ganze kompakter und übersichtlicher
    console.log(`#${id}: ${name} ist ${rolle} mit einem Kopfgeld von ${kopfgeld} Gold.`);
}