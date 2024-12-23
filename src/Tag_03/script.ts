


//! Elemente auswählen 
// Elemente selektieren, die wir später brauchen

const numberInputA = document.querySelector("#num-a") as HTMLInputElement;
const numberInputB = document.querySelector("#num-b") as HTMLInputElement;
const button = document.querySelector("#btn") as HTMLButtonElement;
const resulElement = document.querySelector("#result") as HTMLSpanElement;


// ! Funktion, die beom klicken ausgelost werden soll 

function addieren() {
    console.log("KLick!");
    // const numA = numberInputA.value; -> ist ein string
    // const numB = numberInputB.value;
    // console.log(numA + numB); -> is ein string und bei der addierung würden dann die beiden Zahlen zusammengefasst und nicht addiert

    // parseInt("2000.1 Euro") -> wandelt einen string in eine ganze Zahl um => 2000
    // parseFloat("2000.1 Euro") -> wandelt einen string in eine Gleitkommazahl um => 2000.1
    // +("2000.1 Euro") => NaN
    // Number("2000.1 Euro") => NaN

    const numA = Number(numberInputA.value);
    const numB = Number(numberInputB.value);
    console.log(numA + numB);

    const result = numA + numB;

    const comment = 
    result < 18 
    ? "(du bist Minderjährig )"  
    : "(du bist Volljährig)";


    resulElement.innerText = result.toFixed(0) + comment // toFixed() konvertiert eine Gleitkommazahl in einen string
  

}

button.onclick = addieren;