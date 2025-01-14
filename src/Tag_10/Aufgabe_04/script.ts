// - Erstelle einen Loop mit [do...while](https://www.w3schools.com/js/js%5Floop%5Fwhile.asp).
// - Es sollen die Nummern von 1 bis 5 (wie im Screenshot zu sehen) im HTML-Dokument ausgeben werden.
// - **Bitte halte dich an den Typescript-Standard.**

const ausgabe = document.getElementById("ausgabe")as HTMLParagraphElement;

let i = 1;
do {
    console.log(i);
    ausgabe.innerHTML += `<p>The Number is ${i}</p>`
    i++;
} while (i <= 5);   
