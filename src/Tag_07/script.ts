
console.log("sort()_______________________");

const birds = [
    "Spatz",
    "Adler", 
    "Papagei", 
    "Kolibri",  
    "Pinguin", 
    "Eule", 
    "Flamingo",
    "Krähe",
    "Rotkehlchen",
    "Eisvogel"      
];
console.log(birds);


// - sort() sortiert die Liste alphabetisch und der ursprüngliche Array wird ver‰ndert

console.log("slice()______");
const birdsCopie = birds.slice(); // erstellt eine Kopie
console.log(birdsCopie.sort());

console.log("spred operator______");
const birdCopie2 = [...birds] // erstellt auch eine kopie
console.log(birdCopie2.sort());

console.log("concat()______");
const birdCopie3 = birds.concat(); // erstellt ebenfalls eine Kopie
console.log(birdCopie3.sort());

// birds.sort();
// console.log(birds);

birds.sort((a,b) => b.localeCompare(a));
// birds.sort((a,b) => a.localeCompare(b));
console.log(birds);

console.log("reverse()_______________________");

// - .reverse dreht die Reihenfolge der Elemente um und auch diese motiert der ursprüngliche Array
const birdsReverse = [...birds].reverse()
console.log(birdsReverse);

const sprededBirds = ["Wellensittich", "Taube", "Kanarienvogel"]

birds.push(...sprededBirds.sort());
console.log(birds);


console.log("suchen in Arrays_______________________");


const wassertiere = [
    "Delfin",
    "Hai",
    "Oktopus",
    "Qualle",
    "Meeresschildkröte",
    "Clownfisch",
    "Wal",
    "Seepferdchen",
    "Seestern",
    "Krabbe"
]
console.table(wassertiere);

console.log("Diese Tier befindet sich an:", wassertiere.indexOf("Wal"), "Stelle");

// const indexOfWal: string = wassertiere.indexOf("Waal");
// if (indexOfWal >= 0) {
//     const waal: string= wassertiere[indexOfWal];
//     const seepferdchen: string = waal.concat("Seepferdchen");
//     console.log(waal);
// }

console.log("includes()_______________________");


console.log(wassertiere.includes("krebs"))   // false - tier ist nicht vorhanden
console.log(wassertiere.includes("Krabbe"))  // true - tier ist vorhanden
console.log(wassertiere.includes("Krabbe", 8)) 


console.log("find()_______________________");

const findeAnimal = wassertiere.find((wassertier) => wassertier.length === 5 ? true : false) // - sucht nach einem Tier, das genau 5 Buchstaben hat
console.log(findeAnimal);

// const findeAnimelFunc = wassertiere.find((wassertier) => {
//     if (wassertier.length === 6) {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(findeAnimelFunc);

const findeAnimalIncludes = 
wassertiere.find((wassertier) => wassertier.includes("Kra")) // - sucht nach einem Tier, das die Worte "Kra" enthalten
console.log(findeAnimalIncludes);

console.log("map()_______________________");


const zahlenAlsStrings = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
];

console.log(zahlenAlsStrings);


// - .map() verwendet die als argumente übergegebene Funktion auf jedem Element des Arrays und gibt ein neues Array zurück
const zahlenMap = zahlenAlsStrings.map((zahl) =>{
    return parseInt(zahl)

})

console.log(zahlenMap);

const verdoppeln = (num: number) => {
    return num * 2
}

const verdoppelteNummern = zahlenMap.map(verdoppeln)
console.log(verdoppelteNummern);


// - traditionellen anonymen Funktion
// const squerNumbers = zahlenMap.map(function (num) {
//     return num * num
// })

// console.log(squerNumbers);

// - Arrow-Funktion
const squerNumbers = zahlenMap.map((zahl) => zahl * zahl)
console.log(squerNumbers);

console.log("forEach()_______________________");


// .forEach() führt die übergebene Funktion auf jedem Element des Arrays aus und gibt keine Werte zurueck
wassertiere.forEach((el) => console.log(el))

// ! forEach verwende ich, wenn ich keine Ergebnises brauche, sondern nur auf jeden Eintrag eine Aktion ausführen möchte
// ? Gibt kein neues Array zurück. Es eignet sich gut für “Nebenwirkungen” wie Logging, Änderungen außerhalb des Arrays oder DOM-Manipulationen.

// ! map() verwende ich, wenn ich ein Ergebnis brauche und auf jeden Eintrag eine Aktion ausführen möchte
// ? Perfekt, wenn man mit den transformierten Werten weiterarbeiten möchte.


console.log("filter()_______________________");

const piraten = [
    "Blackbeard",
    "Anne Bonny",
    "Captain Kidd",
    "Jack Sparrow",
    "Bartholomew Roberts",
    "James Flint",
    "Edward England",
    "Long John Silver",
    "Captain Hook",
    "Mary Read"
]
console.log(piraten);

// - filter() bekommte als argument eine Funktion die ein einzelnes array-element erhält und true oder false zurueck gibt

// - hier wird das Array so gefiltert, dass elemente die nicht länger als 10 Zeichen lag sind, ausgegeben werden 
const gefiltertePiraten =  piraten.filter((element) => element.length <= 10)
console.log(gefiltertePiraten);
