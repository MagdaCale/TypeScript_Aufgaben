const eingabe = document.querySelector("#eigabeZahl") as HTMLInputElement
const outputDiv = document.querySelector("#ergebnis") as HTMLDivElement

const button = document.querySelector("#btn") as HTMLButtonElement


button.addEventListener("click", () => {
    const userInput = Number(eingabe.value); 
    outputDiv.innerHTML = ""; 

    if (userInput === 0) {
        outputDiv.innerHTML = `<p>Fehler: Du bist eine Nummer angeben</p>`;
        return;
    }

    const wordStart = "L";
    const wordEnd = "p";
    let middlePart = "";

    if (userInput % 2 === 0) {
        middlePart = "o".repeat(userInput);
    } else {
        for (let i = 0; i < userInput; i++) {
            middlePart += i % 2 === 0 ? "o" : "0";
        }
    }


    const finalWord = `${wordStart}${middlePart}${wordEnd}`;
    outputDiv.innerHTML = `<p>${finalWord}</p>`;
    outputDiv.style.color = '#22ff98'
});

document.querySelector("#delete")?.addEventListener('click', () => {
    outputDiv.innerHTML = ''
    eingabe.value = ''
})

