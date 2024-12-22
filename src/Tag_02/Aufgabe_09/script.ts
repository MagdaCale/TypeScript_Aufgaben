
// Werte: 15.16698, 7.78714, "12.3", "3.14random", "32px", true, false, "321" und "Supercode".

const number1: number = 15.16698;
console.log(number1.toFixed(2));


console.log("----------------------------------------------------");
// ----------------------------------------------------
const number2: number = 7.78714;
console.log(number2.toFixed(2));

console.log("----------------------------------------------------");
// ----------------------------------------------------
const number3: string = "12.3";
console.log(Number(number3).toFixed(2));

console.log("----------------------------------------------------");
// ----------------------------------------------------
const number4: string = "3.14random";
const toNumber: string = number4.slice(0, 4);
console.log(Number(toNumber).toFixed(2));

console.log("----------------------------------------------------");
// ----------------------------------------------------
const number5: string = "32";
console.log(Number(number5).toFixed(2));


console.log("----------------------------------------------------");
// ----------------------------------------------------
const number6: boolean = true; // false = 0
console.log(Number(number6).toFixed(2));


console.log("----------------------------------------------------");
// ----------------------------------------------------
const number7: string = "321";
console.log(Number(number7).toFixed(2));

console.log("----------------------------------------------------");
// ----------------------------------------------------
const number8: string = "Supercode";
console.log(Number(number8).toFixed(2));
