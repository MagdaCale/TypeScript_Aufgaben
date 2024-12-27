// - In dieser Übung geht es um[[Math.random()](https://www.w3schools.com/jsref/jsref%5Frandom.asp) und [Math.floor()](https://www.w3schools.com/jsref/jsref%5Ffloor.asp).


// - Deklariere die Variable randomNum und und gebe darin eine zufällige Nummer aus.
const randomNum = Math.floor(Math.random() * 100) + 1

// - Deklariere die Variable randomNum1\_10 und gebe darin eine zufällige Nummer zwischen 1 und 10 aus.
const randomNum1 = Math.floor(Math.random() * 10) +1

// - Deklariere die Variable randomNum1\_100 und gebe darin eine zufällige Nummer zwischen 1 und 100 aus.
const randomNum2 = Math.floor(Math.random() * 100) +1

console.log(randomNum);
console.log(randomNum1);
console.log(randomNum2);