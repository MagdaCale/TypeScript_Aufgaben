
// - Wir bauen auf der Aufgabe der piraten Crew auf
// - Prüfe, ob die Band Walrus Crew in der Map enthalten ist
// - Lege einen doppelten Eintrag an, also einen Bandnamen (=Key), den du bereits verwendet hast mit anderen Mitgliedern
// - Hole dir den Eintrag mit get aus der Map aus lasse ihn auf der Konsole ausgeben
// - Welchen Eintrag bekommst du zurück? Schreibe es als Kommentar in deinen Code

const piratenCrewsMap = new Map <string, string[]>()


piratenCrewsMap.set("Walrus Crew", ["Captain Flint", "John Silver", "Billy Bones", "Hal Gates"])
piratenCrewsMap.set("Ranger Crew", ["Charles Vane", "Jack Rackham", "Anne Bonny", "Eleanor Guthrie"])
piratenCrewsMap.set("Spanish Man O’ War", ["Captain Hornigold", "Dufresne", "Muldoon", "Dooley"])
piratenCrewsMap.set("Urca de Lima", ["Alfred Hamilton", "Randall", "Featherstone", "Idelle"])
piratenCrewsMap.set("Pirate Council", ["Blackbeard", "Captain Flint", "Charles Vane", "Jack Rackham"])


if(piratenCrewsMap.has("Walrus Crew")){ // überprüft ob ein bestimmter Eintrag vorhanden ist "Walrus Crew"
    console.log("Walrus Crew ist dabei");
    console.log(piratenCrewsMap.get("Walrus Crew"));
} else {
    console.log("Walrus Crew ist nicht dabei");
}

piratenCrewsMap.set("Walrus Crew", ["Eleanor Guthrie", "Max", "Silver", "Charles Vane"]);

console.log(piratenCrewsMap.get("Walrus Crew"));
// ! Der neue Eintrag für "Walrus Crew" überschreibt den alten Eintrag
// Ausgabe => ["Eleanor Guthrie", "Max", "Silver", "Charles Vane"]

