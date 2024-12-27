

// - Lege eine Variable weekdayAsNumber vom Typ Number an
let weekdayAsNumber: number = 1 

// - Lege eine Variable weekdayAsString vom Typ String an
let weekdayAsString: string = "Montag"

// - Rufe window.prompt mit dem Text “Please insert a number from 1 to 7” auf
// - Wandle den im Prompt eingegebenen Wert in eine Number um und schreibe diese Zahl in die Variable weekdayAsNumber
weekdayAsNumber = Number(window.prompt("Please insert a number from 1 to 7"))


// - Schreibe eine switch-case Anweisung für weekdayAsNumber (also für Werte von 1 bis 7)
//     - es soll je nach Wert der entsprechende Wochentag in die Variable weekdayAsString geschrieben werden
switch (weekdayAsNumber){
    case 1:
        weekdayAsString = "Montag"
        console.log(weekdayAsString);
        break;
    case 2:
        weekdayAsString = "Dienstag"
        console.log(weekdayAsString);
        break;
    case 3:
        weekdayAsString = "Mittwoch"
        console.log(weekdayAsString);
        break;
    case 4:
        weekdayAsString = "Donnerstag"
        console.log(weekdayAsString);
        break;
    case 5:
        weekdayAsString = "Freitag"
        console.log(weekdayAsString);
        break;
    case 6:
        weekdayAsString = "Samstag"
        console.log(weekdayAsString);
        break;
    default:
        // - Wird eine andere Zahl angegeben, soll ein Fehler auf der Konsole ausgegeben werden: “Weekday must be between 1 and 7”)
        console.log("Weekday must be between 1 and 7");
}

// - Gebe dann weekdayAsString auf der Konsole aus
console.log(weekdayAsNumber);