// - Erstelle ein Array oldHollywoodActors vom Typ String mit folgendem Inhalt: “Marlon Brando”, “Audrey Hepburn”, “Elizabeth Taylor”, “Cary Grant”, “Paul Newman” und “Doris Day”
// - Erstelle eine neue Variable actorsReference und weise ihr direkt das Array zu
// - Füge “Marilyn Monroe” hinzu
// - Lass dir die Inhalte von oldHollywoodActors und actorsReference ausgeben
// - Erstelle mit concat() eine Kopie von oldHollywoodActors
// - Erstelle eine weitere Kopie mit slice()
// - Erstelle eine dritte Kopie mit dem Spread-Operator
// - Ändere jeweils einen anderen Wert in den drei Kopien
// - Lass dir den Inhalt des ursprünglichen Arrays und aller Kopien ausgeben


const oldHollywoodActors = [
    "Marlon Brando",
    "Audrey Hepburn",
    "Elizabeth Taylor",
    "Cary Grant",
    "Paul Newman",
    "Doris Day"
];
  
console.log(oldHollywoodActors);
const actorsReference = oldHollywoodActors;
actorsReference.push("Marilyn Monroe");

console.log("oldHollywoodActors: ", oldHollywoodActors);
console.log("actorsReference: ", actorsReference);


const actorsCopyConcat = oldHollywoodActors.concat();

// - Kopie mit slice()
const actorsCopySlice = oldHollywoodActors.slice();

//- Kopie mit dem Spread-Operator
const actorsCopySpread = [...oldHollywoodActors];


actorsCopyConcat[0] = "Humphrey Bogart"; 
actorsCopySlice[1] = "Greta Garbo"; 
actorsCopySpread[2] = "James Stewart";

console.log(oldHollywoodActors);
console.log(actorsCopyConcat);
console.log(actorsCopySlice);
console.log(actorsCopySpread);