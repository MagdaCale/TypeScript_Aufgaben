function howOldAmI(birthYear: number, currentYear: number): number {
    const myAge: number = currentYear - birthYear;
    return myAge;
}

console.log(howOldAmI(2024, 1989)); // ergebnis ist -35
console.log(howOldAmI(1989, 2024)); // ergebnis ist 35

// ! Ohne Math.abs: Funktioniert nur, wenn die Reihenfolge immer korrekt ist und eine negative Differenz kein Problem darstellt.

// !Mit Math.abs: Sicherer, weil die Differenz unabhängig von der Reihenfolge der Parameter immer positiv ist.
   
function ageDifference(MyYear: number, yourYear: number): number {
    const ageDiff: number = Math.abs(MyYear - yourYear);
    // - Die statische Methode Math.abs() gibt den Absolutwert einer Zahl zurück.
    return ageDiff
}

const result = ageDifference(1945, 1989);
console.log(`der Altersunterschied liegt bei: ${result} Jahren`);

