
// Werte: 15.16698, 7.78714, "12.3", "3.14random", "32px", true, false, "321" und "Supercode".

const number1: number = 15.16698;


console.log(number1.toString()); // Standard (Basis 10)
console.log(number1.toString(2)); // Basis 2 (Binär)
console.log(number1.toString(8)); // Basis 8 (Oktal)
console.log(number1.toString(16)); // Basis 16 (Hexadezimal)

console.log("----------------------------------------------------");
// ----------------------------------------------------
const number2: number = 7.78714;
console.log(number2.toString());
console.log(number2.toString(2));
console.log(number2.toString(8));
console.log(number2.toString(16));

console.log("----------------------------------------------------");
// ----------------------------------------------------
const number3: string = "12.3";
console.log(Number(number3).toString());
console.log(Number(number3).toString(2));
console.log(Number(number3).toString(8));
console.log(Number(number3).toString(16));

console.log("----------------------------------------------------");
// ----------------------------------------------------
const number4: string = "3.14random";
const toNumber: string = number4.slice(0, 4);
console.log(Number(toNumber).toString());

console.log("----------------------------------------------------");
// ----------------------------------------------------
const number5: string = "32";
console.log(Number(number5).toString());
console.log(Number(number5).toString(2));
console.log(Number(number5).toString(8));
console.log(Number(number5).toString(16));


console.log("----------------------------------------------------");
// ----------------------------------------------------
const number6: boolean = true;

// Boolean in eine Zahl umwandeln (true = 1, false = 0)
console.log(Number(number6).toString()); 
console.log(Number(number6).toString(2)); 
console.log(Number(number6).toString(8)); 
console.log(Number(number6).toString(16)); 


console.log("----------------------------------------------------");
// ----------------------------------------------------
const number7: string = "321";
console.log(Number(number7).toString(2)); 
console.log(Number(number7).toString(8));
console.log(Number(number7).toString(16)); 

console.log("----------------------------------------------------");
// ----------------------------------------------------
const number8: string = "Supercode";

// Wird NaN (Not a Number) und bricht bei toString() ab
console.log(Number(number8)); 
