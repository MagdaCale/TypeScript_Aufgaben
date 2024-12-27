
// - Lass dir zwei Zufallszahlen zwischen 1 und 77 generieren
const random1 = Math.floor(Math.random() * 77) + 1
const random2 = Math.floor(Math.random() * 77) + 1

console.log("Random Number: ",random1);  
console.log("Random Number: ",random2);


// - Wenn die erste Zahl größer als die zweite Zahl ist, soll ‘Erste Zahl größer’ ausgegeben werden
// - Wenn die zweite Zahl größer als die erste Zahl ist, soll ‘Zweite Zahl größer’ ausgegeben werden


// - Setze die Logik  mit switch um
switch (true) {
    case random1 > random2:
        console.log("Erste Zahl größer");
        break
    case random1 < random2:
        console.log("Zweite Zahl größer");    
        break
    default:
        console.log("Was für ein Zufall"); 
}