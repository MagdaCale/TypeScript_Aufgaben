// - void:  bedeutet, dass die Funktion nichts zurückgibt. Sie führt lediglich eine Aktion aus (in diesem Fall console.log).
function simpleLog(): void {
    console.log("Hello World!"); 
}
console.log(simpleLog());


// - Wenn einen number-Wert zurückgeben werden soll:
function getAnswerToLife(): number {
    return 42; // Funktion gibt eine Zahl zurück
}
console.log(getAnswerToLife());


// - Wenn einen string-Wert zurückgeben werden soll:
function getUserName(): string {
    return "Magda"; // Funktion gibt einen String zurück
}

console.log(getUserName());

function getUserData(): string {
    // - In der Realität wäre hier wahrscheinlich eine Daten Abfrage von einer API oder einer Datenbank drin.
    return "User: Magda, Age: 30";
}

const userData = getUserData();
console.log(userData); // Gibt "User: Magda, Age: 30" aus


// - man kann auch komplexere Rückgabewerte haben, z. B. Objekte, Arrays oder sogar benutzerdefinierte Typen
function getUserInfo(): { name: string; age: number } {
    return { name: "Magda", age: 35 }; // Objekt mit definierten Eigenschaften
}

const userInfo = getUserInfo();
console.log(userInfo);


// ! Funktion können auch dynsammisch übergeben werden
// ? name: string und age: number werden als Eingabeparameter definiert.
function getUserInfo2(name: string, age: number): { name: string; age: number } {
    return { name, age }; // Gibt das Objekt mit den übergebenen Werten zurück
}

const getUserInfoTest = getUserInfo2("Heat", 38);
console.log(getUserInfoTest); // Gibt { name: "Heat", age: 38 } aus



// # ---------------- Stefans CODE ------------------


// function => keyword mit dem wir funktionen deklarieren
// addNumbers => name der funktion unter dem wir sie aufrufen koennen
// (a: number, b: number) => Parameter der Funktion (also die Dinge die wir beim aufruf uebergeben koennen)
// :number nach der liste der Parameter => Rückgabewert der Funktion, also das was rauskommt

// cool: deklarierte funktionen (also solche die mit function "funktionsname"(bla) definiert wurden können vor der zeile ihrer definition schon verwendet werden)
const sum = addNumbers(2, 4); //
console.log(sum);

function addNumbers(a: number, b: number): number {
  // zwischen den geschwungenen Klammern befindet sich der Funktionskörper,
  // also die Dinge die beim Aufruf der funktion ausgeführt werden
  return a + b; // return gibt einen wert aus der funktion zurück
}

// void => die funktion hat keinen rückgabewert
const writeNumberToDom = function (value: number): void {
  const element = document.querySelector("#ergebnis");
  if (element) {
    element.textContent = value.toString();
  }
};

writeNumberToDom(1000);

// const ergebnis = writeNumberToDom(1000)
// das waere nicht zulaessig, da die funktion keinen rückgabewert hat, bzw. void ist.

// const concatenatedStrings = "zwei" + "strings";
// const concatenatedStrings2 = addNumbers("zwei", "strings");
// auch wenn der funktionskoerper mit strings ausfuehrbar waere, laesst sich die funktion mit strings nicht aufrufen
// da wir fuer die parameter den typ number definiert haben.

// alternative syntax (parameter) => {/* funktionskoerper */}
const quadratBerechnen = (a: number): number => {
  return a * a;
  console.log(`Quadrat von ${a} wurde berechnet 🎉`); // diese zeile wird nie ausgefuehrt werden, da sie sich nach dem return statement befindet
};

console.log(quadratBerechnen(9) + 12);
console.log(quadratBerechnen(4));

// noch eine alternative syntax. wenn der funktionskoerper nur aus einem ausdruck besteht
// (also aus etwas was einen rueckgabewert hat)
// koennen wir return und geschwungene klammern weglassen
// => sogenannte funktion mit implizitem return
const hochDrei = (a: number): number => a * a * a;
console.log(hochDrei(8));

const beispielFuerEineKonstanteImGlobalenScope = "Ich bin ein gutes Beispiel";

// defaultwerte
function logLargeMessageWithColor(
  message: string,
  color: string = "green" // mit "=" nach dem typ koennen wir einen standardwert definieren, der eingesetzt wird falls der parameter fehlt
): void {
  console.log(beispielFuerEineKonstanteImGlobalenScope);
  const length = message.length;

  let fontSize;
  if (length < 10) {
    fontSize = "4rem";
  } else {
    fontSize = "1rem";
  }

  console.log(`%c${message}`, `color:${color};font-size:${fontSize};`);
}

logLargeMessageWithColor("Nice!", "blue");
logLargeMessageWithColor("Toll aber viel zu lang fuer Schriftgroesse 4rem!"); 
// da color optional ist, bzw. schon mit einem defaultwert versehen wurde, koennen wir es weglassen
