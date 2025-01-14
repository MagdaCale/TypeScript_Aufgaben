// - Lernziel: do...while-Loop anwenden und verstehen.
// - Erstelle einen Loop mit [do...while](https://www.w3schools.com/js/js%5Floop%5Fwhile.asp).
// - Es sollen alle geraden Zahlen bis 20 im HTML-Dokument ausgegeben werden.
// - **Bitte halte dich an den Typescript-Standard.**

const ausgabe = document.getElementById("ausgabe")as HTMLParagraphElement;

let i = 2;
do {
    console.log(i);
    ausgabe.innerHTML += `<p>${i}</p>`
    i += 2;
} while (i <= 20);