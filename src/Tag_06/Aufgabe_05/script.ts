
// - Wer hinzufügt, der muss es auch wieder entfernen können. Dafür wird die Array-Methode **pop()** genutzt. Bei pop() wird der letzte Wert von einem Array entfernt und der entfernte Wert wird zurückgegeben.
// - Nutze wieder einmal die Arrays aus der vorherigen Übung. Entferne jeweils einen Wert aus deinen Arrays und lasse dir den entfernten Wert in der Konsole ausgeben.
// - Zur besseren Darstellung kannst du dir das Array vor dem pop() ausgeben lassen, dann den entfernten Wert und dann das Array nochmal. Schau dir die Ergebnisvorschau an.


const piratenCrew = ["Jack Sparrow", "Will Turner", "Davy Jones", "Black Beard", "Anne Bonny"];
const ships = ["Black Pearl", "Flying Dutchman", "Flying Dutchman", "Queen Anne's Revenge", "Revenge"]
const type = ["Frigate", "Ghost Ship", "Ghost Ship", "Man-O'-War", "Sloop"]

console.log(piratenCrew); // ["Jack Sparrow", "Will Turner", "Davy Jones", "Black Beard", "Anne Bonny"]
console.log(ships);
console.log(type);

const piratenCrewPop = piratenCrew.pop();   
const shipsPop = ships.pop();
const typePop = type.pop();

console.log(piratenCrewPop); // "Anne Bonny"
console.log(shipsPop); // "Revenge"
console.log(typePop); // "Sloop"

console.log(piratenCrew); 
console.log(ships);
console.log(type);