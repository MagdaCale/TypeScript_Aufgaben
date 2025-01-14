

const eingabe = document.querySelector("#eigabeZahl") as HTMLInputElement
const outputDiv = document.querySelector("#ergebnis") as HTMLDivElement

const button = document.querySelector("#btn") as HTMLButtonElement

button.addEventListener('click', () => {
    outputDiv.innerHTML = ''
    let middleLetter = ''
    let letter = ['L', 'p']
    let loopEingabeWert = Number(eingabe.value)
    console.log(loopEingabeWert);

    for(let i = 1; i <= loopEingabeWert; i++){
        middleLetter += "o"
    }

    letter.splice(1,0, middleLetter)
    const wordJoin = letter.join('')
    outputDiv.innerHTML = `<p> ${wordJoin} </p>`
    outputDiv.style.color = '#22ff98'
})

document.querySelector("#delete")?.addEventListener('click', () => {
    outputDiv.innerHTML = ''
    eingabe.value = ''
})

