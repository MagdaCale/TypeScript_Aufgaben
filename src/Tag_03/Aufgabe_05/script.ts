// - Lass dir zwei Zufallszahlen zwischen 1 und 77 generieren
// - Wenn beide Zahlen gleich sind, soll auf der Konsole ‘Was für ein Zufall’ ausgeben werden
// - Wenn die erste Zahl größer als die zweite Zahl ist, soll ‘Erste Zahl größer’ ausgegeben werden
// - Wenn die zweite Zahl größer als die erste Zahl ist, soll ‘Zweite Zahl größer’ ausgegeben werden
// - Setze dies zuerst mit if-else um
// - Setze die Logik dann mit switch um



//* * 77 skaliert diese Zahl zwischen 0–76
//* + 1 verschiebt die Zahl zwischen 1–77
const randomZahlEins = Math.floor(Math.random() * 78 ) + 1;
const randomZahlZwei = Math.floor(Math.random() * 78 ) + 1;

if(randomZahlEins === randomZahlZwei){
  console.log("Was für ein Zufall");
}else if(randomZahlEins > randomZahlZwei){
  console.log("Erste Zahl größer");
}else{
  console.log("Zweite Zahl größer");
}

// const random = 
// randomZahlEins === randomZahlZwei 
//   ? "Was für ein zufall" 
//   : randomZahlEins > randomZahlZwei 
//   ? "Erste Zahl größer" 
//   : "Zweite Zahl größer"
  
// console.log(random);;

