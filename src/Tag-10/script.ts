// * Loops

// variable um die durchlaeufe der Schleife abzuzaehlen
let i = 0;
//     ⬇️ Das ist die Bedingung für die Ausführung des Loops
while (i <= 9) {
  console.log("Ich werde wiederholt ausgeführt");
  i++; // zaehlen wir hoch
}



// ! wir muessen mit while loops (aber auch mit anderen Loops) aufpassen, nicht in eine Endlosschleife zu geraten
// ! der folgende code wuerde den Prozess zum Absturz bringen
// while (true) {
//   console.log("Ich werde für immer ausgeführt");
// }

// Füllen eines neuen Arrays mit 10 Zufallszahlen:
const arr = [];
let j = 1;
while (j <= 10) {
  const number = Math.floor(Math.random() * 10);
  arr.push(number);
  console.log(`Aktueller Durchlauf: #${j}`);
  console.log(arr);
  j++;
}

// * For Loops
// hier haben initialisierung, bedingung und inkrementierung/dekremtierung in einer zeile
// in dieser Reihenfolge und getrennt durch Semikolons
for (let i = 1; i <= 100; i++) {
  // hier werden nur alle durch 7 teilbaren zahlen ausgegeben
  if (i % 7 === 0) {
    console.log(i);
  }
  // (erst hier wird i++ eigentlich ausgeführt)
}

// * do ... while

console.log("Do while:");

let k = 20;
//     ⬇️ Das ist die Bedingung für die Ausführung des Loops
do {
  console.log("Ich werde auf jeden Fall mindestens ein mal ausgeführt");
  k++; // zaehlen wir hoch
} while (k <= 9);

// theoretische moeglichkeit do while zu benutzen um zeilen zu ueberspringen,
// in JS extrem unueblich
// do {
//     console.log("test");
//     break;
//     console.log("test");
// } while (false);

// * Break

const array = [0, 1, 2, 3, 4, 5, 100, 6, 7, 8, 9, 10];
// ich will ueberpruefen ob die zahl 100 mindestens einmal in ihm vorkommt
// ! wenn wir mit array.length vergleichen, muessen wir darauf achten nicht zu weit zu zaehlen
// ! also entweder i < array.length, oder i <= array.length - 1
for (let i = 0; i < array.length; i++) {
  if (array[i] === 100) {
    console.log("Hurra, 100 gefunden");
    break;
  } else {
    console.log("Bisher leider keine 100");
  }
}

// Wir haben einen Warenkorb mit Produkten, die jeweils Preis und Menge haben
// Wir wollen die Gesamtsumme bilden

type CartEntry = {
  name: string;
  priceCents: number;
  amount: number;
};

const warenkorb: CartEntry[] = [
  { name: "Schuhe", amount: 1, priceCents: 5000 },
  { name: "Kopfsalat", amount: 3, priceCents: 100 },
  { name: "Typescript-Shirt", amount: 2, priceCents: 2000 },
];

let sum = 0;
for (let i = 0; i < warenkorb.length; i++) {
  //   console.log(warenkorb[i]);
  const currentItem = warenkorb[i];
  sum = sum + currentItem.amount * currentItem.priceCents;
  console.log("Zwischenstand: ", sum);
}
console.log("Gesamtsumme: ", sum);
