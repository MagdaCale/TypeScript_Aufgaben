// * -------------------------
// * Callbacks
// * -------------------------

const headlineElement = document.querySelector("h1");

// eventlistener sind ein klassisches beispiel fuer callbacks —
// wir rufen die uebergebene funktion nicht direkt auf,
// stattdessen wird sie vom browser aufgerufen sobald auf das element
// geklickt wird
if (headlineElement) {
  headlineElement.addEventListener("click", function () {
    headlineElement.textContent += "!";
  });
}

// (elem) => elem * 3 ist hier eine callbackfunktion
// denn wir rufen sie nicht direkt auf,
// sondern uebergeben sie als wert an map, und map kuemmert sich ums aufrufen

// wenn wir callbackfunktionen getrennt definieren und unter ihrem namen als callback uebergeben
// muessen wir — wie bei funktionen auch sonst — ihre Parameter definieren
const mapCallbackFn = (elem: number): number => {
  return elem * 3;
};
[1, 2, 3, 4, 5].map(mapCallbackFn);

// Wenn sie als anonyme funktion direkt uebergeben werden, ist das oft nicht notwendig
// Da durch den Kontext klar sein kann, welche Parameter uebergeben werden.
// [1, 2, 3, 4, 5].map((elem) => {
//   return elem * 3;
// });

function sayHey() {
  console.log("Hey");
}

// sayHey ist in diesem Kontext eine Callbackfunktion,
// da sie hier von setTimeout aufgerufen wird
setTimeout(function sayHey() {
  console.log("Hey");
}, 2500);

// wir koennen sie aber auch direkt nutzen — hier ist sie keine
// callbackfunktion, da sie direkt aufgerufen wird
sayHey();

setTimeout(function sayHey() {
  console.log("Hey");
  setTimeout(function sayHey() {
    console.log("Noch etwas loggen");
    setTimeout(function sayHey() {
      console.log("Noch etwas anderes tun");
    }, 2500);
  }, 1000);
}, 500);

// * -------------------------
// * Promises
// * -------------------------

// die eingebaute funktion "fetch" basiert auf promises.
// mit .then koennen wir immer auf das ergebnis zugreifen

// fetch("http://www.eineurl.de")
//   .then((daten) => {
//     // hier habe ich zugriff auf das ergebnis des fetches
//     return fetch(`http://www.eineurl.de/profile/${daten.userId}`);
//   })
//   .then((daten2) => {
//     console.log(daten2);
//   });

// * Promisebeispiel aus dem Script
const chocolatePromise: Promise<boolean> = new Promise((resolve, reject) => {
  setTimeout(function () {
    const chocolateAvailable: boolean = Math.random() < 0.5;
    if (chocolateAvailable) {
      resolve(true)
    } else {
      reject("Error")
    }
  }, 2000);
});

// const beispielArray = [1,2,3,4,5]
// const filteredArray = beispielArray.filter((item)=>{
//   if (item < 5){
//     return true
//   } else {
//     return false
//   }
// })




chocolatePromise
  .then(() => {
    console.log("Hurra, es gab Schokolade");
  })
  .catch(() => {
    console.log("Oh nein, es gab keine Schokolade");
  });


// * setTimeout als Promise umgebaut
// wir uebergeben nur die zeit die gewartet werden soll, nicht die handlung die danach passieren soll
// diese koennen wir spaeter innerhalb des .then platzieren
const promiseTimeout = function (time: number) {
  return new Promise((resolve) => {
    // erst nach der definierten zeit wird resolve aufgerufen,
    // und das Promise dadurch aufgeloest
    setTimeout(resolve, time);
  });
};

// const beispielPromise = new Promise((resolve) => {
//   // erst nach der definierten zeit wird resolve aufgerufen,
//   // und das Promise dadurch aufgeloest
//   setTimeout(resolve, 500);
// });



// Beispiel von weiter oben, diesmal aber mit dem selbstgebauten timeout-promise
// anders als bei setTimeout stehen hier die wartezeiten in einer intuitiveren reihenfolge
console.log("Hallo User...");
promiseTimeout(250)
  .then(() => {
    // der code innerhalb des then-callbacks wird erst ausgefuehrt, wenn das promise resolved wurde
    // in diesem fall also nach 250ms
    console.log("Anwendung wird geladen...");
    return promiseTimeout(500);
    // das naechste .then in der kette wird darauf warten dass dieses promise abgeschlossen wird, also 500ms warten
  })
  .then(() => {
    console.log("Koordinaten werden trianguliert...");
    return promiseTimeout(1000);
  })
  .then(() => {
    console.log("Berlin!");
  });
