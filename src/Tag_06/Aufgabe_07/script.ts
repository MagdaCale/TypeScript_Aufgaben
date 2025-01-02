// - Die Array-Methode **unshift()** ist push() sehr ähnlich. Denn unshift() fügt auch einen Wert zu einem Array hinzu, dieses mal allerdings an erster Stelle. Es ist möglich einen oder mehrere Werte mit unshift() am Anfang eines Arrays einzufügen. Die anderen Werte werden mit ihrem Index um Anzahl der neu hinzugefügten Werte erhöht.
// - Verwende unshift(), um mindestens 2 neue Werte zum Array der Städte hinzuzufügen.
// - Verwende console.log(), um den Inhalt und die Länge deines Arrays vor und nach dem Hinzufügen neuer Werte anzuzeigen. Beobachte die Veränderungen in der Konsole.




const piratenCrew = ["Jack Sparrow", "Will Turner", "Davy Jones", "Black Beard", "Anne Bonny"];
const ships = ["Black Pearl", "Flying Dutchman", "Flying Dutchman", "Queen Anne's Revenge", "Revenge"]
const type = ["Frigate", "Ghost Ship", "Ghost Ship", "Man-O'-War", "Sloop"]

console.log(piratenCrew); // ["Jack Sparrow", "Will Turner", "Davy Jones", "Black Beard", "Anne Bonny"]
console.log(ships);
console.log(type);

piratenCrew.unshift("Captain Flint", "Edward Low");   
ships.unshift("Walrus", "Fancy");
type.unshift("Galleon", "Brigantine");

console.log("Unshift : ----------------------");

console.log(piratenCrew); 
console.log(ships);
console.log(type);