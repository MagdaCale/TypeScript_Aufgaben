// - In dieser Übung werden wir [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date?retiredLocale=de)() lernen.
// - Stelle die folgenden Daten im HTML-Dokument mit Hilfe des Befehls new Date() dar.
// - Speichere die Werte in Variablen (date1, date2, usw.).
// - Verwende innerHTML, um das Ergebnis darzustellen.
// - Teste die folgenden Werte:  new Date("September 2, 2019 09:00:00")  new Date(0)  new Date(31556908800)  new Date(86400000)
// - **Bitte halte dich an den Typescript-Standard.**


const date1 = new Date("September 2, 2019 09:00:00")
const date2 = new Date(0)
const date3 = new Date(31556908800)
const date4 = new Date(86400000)

const output = document.querySelector("#ausgabe") as HTMLParagraphElement

if(output) {
    output.innerHTML = `
        <p><strong>${date1}</strong></p>
        <p><strong>${date2}</strong></p>
        <p><strong>${date3}</strong></p>
        <p><strong>${date4}</strong></p>
    `
}