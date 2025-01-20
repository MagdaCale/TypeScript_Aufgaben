

// * setTimeout

console.log("Ich werde sofort ausgeführt");

// setTimeout führt eine Funktion nach einer bestimmten Zeit aus
setTimeout(function () {
  console.log("Ich werde nach 3 Sek ausgeführt");
}, 3000);


console.log("Ich werde ausgeführt");

// lasse dir im dokument die aktuelle Uhrzeit anzeigen lassen
// die sekunden laufen jeweils weiter





const output = document.querySelector("#ausgabe") as HTMLParagraphElement;      



const displayTime = () => {
  const date = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();
    const hours = String(date.getHours()).padStart(2, "0"); // Stunden zweistellig
    const minutes = String(date.getMinutes()).padStart(2, "0"); // Minuten zweistellig
    const seconds = String(date.getSeconds()).padStart(2, "0"); // Sekunden zweistellig
  output.textContent = `${hours}:${minutes}:${seconds}`;
};

displayTime()

// * clearInterval


// Startet das Intervall, das die Uhrzeit jede Sekunde aktualisiert
let intervalId = setInterval(displayTime, 1000); // Startet die Uhrzeit-Aktualisierung

// Stopp-Button
const stopTimeBtn = document.querySelector("#stopTime") as HTMLButtonElement;
// const startTimebtn = document.querySelector("#startTime") as HTMLButtonElement;

// if (stopTimeBtn) {
//   stopTimeBtn.addEventListener("click", () => {
//     clearInterval(intervalId); // Stoppt das Intervall
//     if(stopTimeBtn){
//         setInterval(displayTime, 4000);
//     }
//   });
// }

if (stopTimeBtn) {
    stopTimeBtn.addEventListener("click", () => {
      clearInterval(intervalId); // Stoppt die Uhrzeit
      setTimeout(() => {
        intervalId = setInterval(displayTime, 1000); // Zeit startet nach 3 Sekunden 
      }, 3000);
    });
  }


// // Stopp-Button
// const stop = document.querySelector("#stopTime") 
// const start = document.querySelector("#startTime") 
// let timerId; // makes the variable global

// if(stop)
//     stop.addEventListener('click', function() {
//         timerId = setInterval(function() {
//         }, 1000);
// });

// if(start){
//     start.addEventListener('click', function() {
//         clearInterval(timerId);
//     });
// }

// * window.history

// window.history.back(); // geht zur vorherigen Seite
// window.history.forward(); // geht zur nachherigen Seite


// * dialoge

// window.alert("Hallo");
// window.confirm("Soll ich dir helfen?");
// window.prompt("Gib mir deine E-Mail-Adresse");

// if (window.confirm("illst du dir die Aufgaben anschauen?")) {
//     console.log("Cool");
// } else {
//     window.history.back()
// }

// * localStorage

// localStorage.setItem("name", "Heat");
// localStorage.getItem("name");
// localStorage.removeItem("name");

const userName = document.querySelector("#name") as HTMLInputElement;
const save = document.querySelector("#save") as HTMLButtonElement;


// let username = localStorage.getItem("username") // null

// if (!username){
//     username = window.prompt("Wie heißt du?") ?? "Eustass Kid" 
//     // mit setItem koennen wir daten setzen
//     localStorage.setItem("username", username)
// }

// Event-Listener für den Speichern-Button
if (save) {
    save.addEventListener("click", () => {
      if (userName) {
        const nameValue = "" + userName.value;
        if(nameValue){
            localStorage.setItem("name", userName.value); // Speichert den Namen in LocalStorage
            window.alert(`Hallo ${userName.value}`); // Zeigt eine Begrüßung an
        } else{
            window.alert("Bitte gib einen Namen ein")
        }
      }
    });
  }
  
  // Überprüfen, ob ein Name im LocalStorage gespeichert ist
  const storedName = localStorage.getItem("name");
  
  if (storedName) {
    console.log(`Gespeicherter Name: ${storedName}`); // Gibt den gespeicherten Namen in der Konsole aus
  }