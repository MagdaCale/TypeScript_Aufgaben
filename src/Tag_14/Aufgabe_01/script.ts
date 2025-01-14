// - Lernziel: klassische Functions in Arrow-Functions umwandeln.
// - **Bitte halte dich an den Typescript-Standard.**
// - Schreibe eine 4. Function, die einen Parameter vom Typ Object hat und die alle Eigenschaften (Keys) des Objekts in der Konsole ausgibt.
// - Konvertiere schließlich alle Funktionen in die neue Arrow-Functions Schreibweise.

const htmlHallo = document.querySelector("#hallo") as HTMLParagraphElement
const htmlSumme = document.querySelector("#summe") as HTMLParagraphElement

// - Schreibe eine Function, die "Hallo" in deinem HTML anzeigt.
const hallo = () => {
    console.log('hallo');
    htmlHallo.innerHTML = "hallo"
}   

hallo()

// - Schreibe eine 2. Function, die die Summe von zwei Zahlen in deinem Browser (Konsole oder HTML) anzeigt.
const summe = (num1: number, num2: number) => {
    console.log(num1 + num2);
    htmlSumme.innerHTML = `${num1} + ${num2} = ${num1 + num2}`
}

summe(2,3)

// - Schreibe eine 3. Function, die das Ergebnis der Multiplikation von zwei Zahlen über window.alert ausgibt
const allert = (num1: number, num2: number) => {
    window.alert(num1 * num2);
}   

allert(2,3)

// - Schreibe eine 4. Function, die einen Parameter vom Typ Object hat und die alle Eigenschaften (Keys) des Objekts in der Konsole ausgibt.
const obj = {name: 'Magnus', alter: 33}

const object = (obj: object) => {
    console.log(obj);
}

object(obj)