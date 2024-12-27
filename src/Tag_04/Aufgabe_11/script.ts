// - Schreibe eine switch-case-Anweisung, die je nach Wert von salesMonth angibt in welchem Quartal wir uns befinden
// - (1-3 = “1. Quartal”, 4-6 = “2. Quartal” usw.)

const salesMonth = Math.floor(Math.random() * 12) + 1;
console.log(salesMonth)


// - (case 1, 2, 3) führen alle zum gleichen Ergebnis: "1. Quartal"
// - (case 4, 5, 6) führen alle zum gleichen Ergebnis: "2. Quartal"
// - usw...
switch(salesMonth){
    case 1:
    case 2:
    case 3:
        console.log("1. Quartal");
        break
    case 4:
    case 5:
    case 6:
        console.log("2. Quartal");
        break
    case 7:
    case 8:
    case 9:
        console.log("3. Quartal");
        break
    case 10:
    case 11:
    case 12:
        console.log("4. Quartal");
        break
    default:
}



// - Schreibe eine switch-case-Anweisung, die je nach Wert von totalSales in einer String-Variable speichert, wie der Umsatz einzuordnen war

//     - 1000 - 2500 → “schlecht”
//     - 2501 - 5000 → “mittelmäßig”
//     - 5001 - 7500 → “hoch”
//     - 7501 - 10000 → “unglaublich”

let totalSales = Math.floor(Math.random() * 9001) + 1000

// - Bei Bereichsprüfungen ist "true" deshalb besser geeignet, weil jede Bedingung in den case-Blöcken ausgewertet wird und dabei auf den Wahrheitswert (true oder false) geprüft wird.
switch(true){
    case 1000 < totalSales && totalSales <= 2500:
        console.log("Schlecht");
        break;
    case 2501 < totalSales && totalSales <= 5000:
        console.log("Mittelmäßig");
        break;
    case 5001 < totalSales && totalSales <= 7500:
        console.log("hoch");
        break;
    case 7501 < totalSales && totalSales <= 10000:
        console.log("unglaublich");
        break;
    default:
}