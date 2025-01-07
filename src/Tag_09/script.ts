// ! ___KOMPLEXE DETENTYPEN___
// * Tuple
// * Set
// * Map
// * for of
// * for in


// ! Tuple
// * Ein Tuple ist ein Array mit festen Elementen mit unterschiedlichen Datentypen
// * Der Typ des Arrays ist durch die Typen der Elemente bestimmt
// * Die Elemente sind durch Komma getrennt
// * Die Elemente sind durch die Indizes 0, 1, 2 usw. zugeordnet

// - Beispiel
const heatTuple: [string, number, boolean] = ["Heat", 38, true];
console.log(heatTuple[2]); // true

heatTuple.pop();
console.log(heatTuple); // ["Heat", 38]


type Tuple = [string, string];
const coordinates: Tuple = [ `49° 0' 34" Nord`, `8° 24' 15" Ost`];

const coordinateAsObject = {
    lon: 8.24,
    lat: 49.34
}
console.log(coordinates);
console.log(coordinateAsObject);


// ! Set
// * Ein Set ist eine Sammlung von Werten mit eindeutigen Datentypen
// * Die Elemente sind durch die Indizes 0, 1, 2 usw. zugeordnet
// * wir können ein neues Set entweder leer Instanzieren oder ein sog. "Iterable übergeben - z-B.B ein Array"

// - Beispiel
const shoppingList = new Set([
    "Apfelsaft", 
    "wasser", 
    "Topfschwämme", 
    "Schoki", 
    "Gemüse"
]);

console.log("has Schokie:"); 
shoppingList.has("Schoki"); // true
shoppingList.add("Papaya");
shoppingList.delete("Apfelsaft");

// - "wasser war schon in der Liste , Set kümmert sich darum, dass kein Werk doppelt hinzugefügt wird"
shoppingList.add("wasser")

shoppingList.forEach((element) => {console.log(element)})


// ! Map
// * Eine Map ist eine Sammlung von Werten mit eindeutigen Schluessel und unterschiedlichen Datentypen
// * verhält sich ähnlich zu Set

// - Beispiel
const mapSpeisekarte = new Map <number, string>();

// mit set können wir neue Werte setzten, oder überschreiben 
mapSpeisekarte.set(12, "Flammkuchen");
mapSpeisekarte.set(24, "Pudding");
mapSpeisekarte.set(20, "Rotes Curry");

console.log(mapSpeisekarte.get(12)); // Flammkuchen
console.log(mapSpeisekarte.get(24)); // Pudding
console.log(mapSpeisekarte.get(20)); // Rotes Curry

mapSpeisekarte.set(20, "Kekse");
console.log(mapSpeisekarte.get(12)); // Flammkuchen
console.log(mapSpeisekarte.get(24)); // Pudding
console.log(mapSpeisekarte.get(20)); // Kekse


// ! for of
// * 

// - Beispiel
// shoppingList.forEach((item) =>{
//     console.log(item.toUpperCase());
// })

for (const item of shoppingList) {
    if(item === "Schoki"){
        console.log("Schoookii");
    } break // wenn wir vorzeitig den loop/schleife beenden wollen.
}

// for .. of lässt sich auch mit maps nutzen. Hier halten wir jeweils ein key value paas als tuple
for (const element of mapSpeisekarte) {
    console.log(element); // hier wird nur ein value ausgegeben
}
// auch gut mit destructuring verwendbar
for (const [key, value] of mapSpeisekarte) {
    console.log(key);
    console.log(value);
}

console.clear()

// ! for in
// * Syntax gleich der von for .. of

const jurassicPark = {
    title: "Jurassic Park",
    year: 1993,
    actors: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
    discription: "A movie about dinosaurs",
    director: "Steven Spielberg",
}
// for in stellt uns jeweils den key alls variable zur verfügung
for (const key in jurassicPark){
    console.log(key);
    // * es wird ausgegeben: keys
    // title
    // year
    // actors
    // discription
    // director
    console.log(jurassicPark.actors);
    // console.log(jurassicPark[key]);
}


// * Objekte und identität

// - Beispiel
const obj = {
    name: "Heat",
    age: 37,
    hobbies: ["smoking weed", "playing guitar", "playing basketball"]
    // age: 38
}

const obj2 = {
    name: "Heat",
    age: 37
}
console.log(obj === obj2); // false
// zwei Objekte, auch mit gleichem Inhalt gelten als verschieden, wenn sie nicht "dasselbe" Objekt sind, also nicht auf die gleiche adresse im speicher verweisen

// if(obj === obj2){ 
//     console.log("identisch");
// }else{
//     console.log("nicht identisch");   
// }

const vermeintlicheKopie  = obj
vermeintlicheKopie.name = "Haks"
// hier wird auch obj verändert

// erstellt ein neues Objekt und kopiert alle igenschaften von obj dort hinein
const tatsaechlicheKopie = Object.assign({}, obj)
// console.log(tatsaechlicheKopie);

// macht das gleiche, ist aber kompakter
const andereTatsaechlicheKopie =  {...obj, height: 2.32, hobbies: [...obj.hobbies, "kombucha brauen"] } // kann auch überschreiben werden
console.log(andereTatsaechlicheKopie);