// - John und Meike spielen ein Spiel, bei dem sie Punkte für Größe und Alter erhalten.


// - Gib die Punkte und den/die Gewinner:in in deiner Konsole aus.
// - Vergiss nicht Unentschieden (draw) zu behandeln.


// - Multipliziere das Alter mit 5 und addiere die Größe.
// - John ist 170 cm groß und 22 Jahre alt,
const john = 170 + 22 * 5;

// - Meike ist 168 cm groß und 34 Jahre alt.
const meike = 168 + 34 * 5;

console.log("john", john);
console.log("meike", meike);


// - Vergleiche die Spieler:innenwerte mit if, else if Statements. Wer die meisten Punkte bekommt, gewinnt.
if (john > meike) { 
    console.log("John gewint mit", john, "Punkten");
} else if (meike > john){
    console.log("Meike gewnnt mit", meike, "Punkten");
} else {
    console.log("Unentschieden");
}

// const result = john > meike 
// ? "John gewinnt mit " + john + " Punkten"
// : "Meike gewinnt mit " + meike + " Punkten";
// console.log(result);