
// - In dieser Übung geht es darum, Arrays nicht alphabetisch von A-Z, sondern von Z-A zu sortieren.
// - Sortiere die Programmiersprachen in umgekehrter alphabetischer Reihenfolge.
// - Der Code steht im Code-Snippet.
// - Nenne die Funktion sortDescending (= sortiere absteigend).
// - Verwende den Befehl sort() und alternativ auch einmal mit reverse(), um die Aufgabe auszuführen.
// - Rufe die Funktion sortDescending auf.
// - Überprüfe das Ergebnis in der Konsole.
// - Rufe die Funktion auch für europeanCountries auf
// - Überprüfe das Ergebnis in der Konsole.



const ausgabe = document.querySelector("#ausgabe") as HTMLParagraphElement;
const ausgabe2 = document.querySelector("#ausgabe2") as HTMLParagraphElement;

const codingLanguages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
]

console.log(codingLanguages);

const sortDescending = codingLanguages.sort();

if(sortDescending !== null){
    ausgabe.innerHTML =  `${sortDescending.join(" -> ")}`
}

const reserve = codingLanguages.sort().reverse();   

console.log(reserve);

if(codingLanguages !== null){
    ausgabe2.innerHTML =   `${reserve.join(" -> ")}`
}
