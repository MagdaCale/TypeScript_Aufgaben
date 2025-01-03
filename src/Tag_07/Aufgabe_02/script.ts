

const reverseString = (string: string): string => {
    // - split() -> Teilt den String in ein Array von Zeichen.
    // - reverse() -> Kehrt die Reihenfolge der Zeichen im Array um.
    // - join() -> Fügt die Zeichen wieder zu einem String zusammen.
    // return string.split("").reverse().join("")
    return string.split(" ").sort((a, b) => a.localeCompare(b)).join(" ")
}



// birds.sort((a,b) => a.localeCompare(b));

console.log(reverseString("Ella mag alle Bohnen"));
console.log(reverseString("han nesaH has ennaH"));
console.log(reverseString("Captain James Flint"));
console.log(reverseString("tnilF semaJ niatpaC"));