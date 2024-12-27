
const nowDate = new Date() // - gibt uns den aktuellen Zeitpunkt zurück
console.log(nowDate)

const now = Date.now() // - gibt uns den aktuellen Zeitpunkt in Millisekunden zurück
console.log(now);



const output = document.querySelector("#ausgabe") as HTMLParagraphElement



const year = nowDate.getFullYear() // - gibt uns das aktuelle Jahr zurück
const month = nowDate.getMonth() + 1  // - Da getMonth Januar als 0 angibt, muss man +1 dazu addieren
const day = nowDate.getDate() // - gibt uns den aktuellen Tag zuruck

const hour = nowDate.getHours() // - gibt uns die aktuelle Stunde zuruck
const minute = nowDate.getMinutes() // - gibt uns die aktuelle Minute zuruck
const second = nowDate.getSeconds() // - gibt uns die aktuelle Sekunde zuruck

console.log(day, month, year);


// mit .toLocaleString() koennen wir ein datum / die zeit formatieren lassen
nowDate.toLocaleString("de-DE"); // '27.12.2024, 10:51:43'
nowDate.toLocaleTimeString("de-DE"); // 10:51:43


if(output) {
    output.innerHTML = ` ${day}.${month}.${year}  ${hour}:${minute}:${second} <br> ${nowDate}`
}

const input = document.querySelector<HTMLInputElement>("#input") 


function clilogInput() {
    // if(input !== null){
    //     const value = input.value
    //     input.textContent = value
    // }

    const value = input?.value ?? "Kein Wert"
    console.log(value);
    
}

clilogInput()