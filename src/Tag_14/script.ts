
// ! __________________ Functions! __________________

// Deffinition mit einer klassischer Funktionsdeklaration
function meineFunktion(){
    // hier das was die Funktion machen soll
    // der funktionskörper
    console.log("1"); // wird als zweite ausgegeben => wenn clg 3 ausgegeben wird, wird 1 vierte ausgegeben
    return "Hallo Heat"
}
console.log("2"); // wird als erste ausgegeben
meineFunktion()
console.log("3"); // wird als dritte ausgegeben
meineFunktion()



// ! __________________ hoisting => "hochziehen" __________________
// + bedeutet: klassisch deklarierte Funktionen dürfen in Zeilen vor ihrer deklarationen schon benutt werden
const ergebnis = add100(100);
console.log(ergebnis);

// Deklaration mit Parametern und Rückgabewert
function add100(num: number):number{
    console.log(num + 100);
    return  num + 100

}
add100(100)





// ! __________________ Arrow-Funktion __________________
const greet = (name: string)=>{
    console.log(`Hello ${name}`);
}

greet("Heat")

// arrow function mit implizietem return
const square = (num: number):number =>  num * num 
console.log(square(2));


// ? function keyword ist eine annonyme function
const square2 = function(num: number){
    return num + num
}

console.log(square2(5));

// * Funktion als Rückgabewert


function makeGreeter(name: string): () => void{ // gibt void zurück, also eine funktion die nichts zurück gibt
    // return Wert ist selbst eine funktion und hat zugriff auf den Parameter
    return function(){
        console.log(`Guten Tag ${name}`);
    }
}

const magdaGreeter = makeGreeter("Magda")
magdaGreeter()



function createDiscount(discount: number): (price: number) => number {
    return function (price: number): number {
        return price - (price * discount) / 100;
    };
}

const zehnProzenRabatt = createDiscount(10);
const zwanzigProzenRabatt = createDiscount(20);

console.log(zehnProzenRabatt(100)); // Ausgabe: 90
console.log(zwanzigProzenRabatt(100)); // Ausgabe: 80

// ! Higher-Order Function
const array = [1, 2, 3, 4, 5];
const squareArray = array.map(square)
// ? map verwendet die übergebene Funktion auf alle Elemente des Array an, und setzt einen neuen Array auf diesen zusammen
// + map ist eine Funktion höheren Ordnung, da es eine Funktion als Parameter nimmt
console.log(squareArray)

const squareArray2 = array.map(square2)
console.log(squareArray2)




// - Array-map() ist eine callback funktion

// ! callback function
// + => eine Funktion die wir nicht selber direkt aufrufen, sondern die durch eine andere Funktion aufgerufen wird.
// + wird typischerweise selbst als argument weitergegeben



const button = document.querySelector("#klick") as HTMLButtonElement
const callbackn = function(){
    console.log("button wurde geklickt!");

}
if(button){
    button.addEventListener("click", callbackn)
}else{
    console.error("Button nicht gefunden");
}
// button?.addEventListener("click", callbackn)