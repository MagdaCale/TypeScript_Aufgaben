// - Deklariere ein Array "friendNames" mit den Werten: ["Eleanor Guthrie", "Max", "Silver", "Charles Vane"];


const piratName = [
    "Eleanor Guthrie", 
    "Max", 
    "Silver", 
    "Charles Vane"
];

console.log("________for of__________");

// - Dann verwende eine for-Schleife, um alle Namen in der Konsole anzuzeigen
for (const name of piratName) {
    console.log(name); 
}

console.log("________forEach__________");
piratName.forEach((name) => {console.log(name)})

