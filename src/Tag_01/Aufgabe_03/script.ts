
let x = 20;
let y = 30;

// addition
console.log(x + y)

//subtraktion
console.log(y - x)
console.log(x - y)

// multiplikation
console.log(x * y);

// division
console.log(x / y);

//!----------------------------------------     
// Deklariere eine weitere Variable z mit dem Wert 10. Multipliziere x und y. Teile dann das Ergebnis durch z. Speichere das Ergebnis in einer neuen Variablen namens resultOne.

let z = 10;
let resultOne = (x * y) / z;
console.log(resultOne);

//!----------------------------------------    
// Weiter geht es mit zwei weiteren Variablen a und b. Die Variable a hat den Wert 15 und b den Wert 9. Nutze auch hier für die folgenden Beispiele arithmetische Operatoren. 
let a = 15
let b = 9
console.log(a % b )

//!----------------------------------------    
// Deklariere eine weitere Variable c mit dem Wert 7. Multipliziere a und b. Teile dann das Ergebnis durch c. Speichere das Ergebnis in einer neuen Variablen namens resultTwo. 
let c = 20;
let resultTwo = (a + b) * c;
console.log(resultTwo);

//!----------------------------------------    
// Inkrementiere a (= zähle a um 1 hoch). Gib das Ergebnis in der Konsole aus.
a++
console.log(a);

// Dekrementiere b (= zähle b um 1 herunter). Gib das Ergebnis in der Konsole aus.
b--
console.log(b);

// Substrahiere b von a und speichere das Ergebnis in einer neuen Variablen resultThree.
let resultThree = a - b;
console.log(resultThree);   

//!----------------------------------------    
// Gib den Rest aus, wenn resultOne durch resultTwo geteilt wird. Nutze den Remainder(%) bzw. Modulo-Operator.

console.log(resultOne % resultTwo);
