// - Die Array-Methode **shift()** ist pop() sehr ähnlich. Denn shift() entfernt auch einen Wert aus einem Array, dieses Mal allerdings den ersten Wert. Hierbei wird der erste Wert entfernt und die anderen Werte rücken mit ihrem Index einen nach vorne.
// - Entferne aus deinem favoritePeople Array den ersten Wert und lasse dir diesen in der Konsole ausgeben.
// - Auch hier kannst du fürs bessere Verständnis das Array vorher und nachher in der Konsole ausgeben.


const piratenCrew = ["Jack Sparrow", "Will Turner", "Davy Jones", "Black Beard", "Anne Bonny"];
const ships = ["Black Pearl", "Flying Dutchman", "Flying Dutchman", "Queen Anne's Revenge", "Revenge"]
const type = ["Frigate", "Ghost Ship", "Ghost Ship", "Man-O'-War", "Sloop"]

console.log(piratenCrew); // ["Jack Sparrow", "Will Turner", "Davy Jones", "Black Beard", "Anne Bonny"]
console.log(ships);
console.log(type);

const piratenCrewShift = piratenCrew.shift();   
const shipsShift = ships.shift();
const typeShift = type.shift();

console.log(piratenCrewShift); // "Jack Sparrow"
console.log(shipsShift); // ""Black Pearl",
console.log(typeShift); // ""Frigate"

console.log(piratenCrew); 
console.log(ships);
console.log(type);