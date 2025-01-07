
// - Wir bauen weiterhin auf der Aufgabe der Map der Piraten Crew auf
// - Lass dir alle Mitglieder auf der Konsole ausgeben, deren Name länger als 12 Zeichen (inkl. Leerzeichen) ist

const piratenCrewsMap = new Map <string, string[]>()


piratenCrewsMap.set("Walrus Crew", ["Captain Flint", "John Silver", "Billy Bones", "Hal Gates"])
piratenCrewsMap.set("Ranger Crew", ["Charles Vane", "Jack Rackham", "Anne Bonny", "Eleanor Guthrie"])
piratenCrewsMap.set("Spanish Man O’ War", ["Captain Hornigold", "Dufresne", "Muldoon", "Dooley"])
piratenCrewsMap.set("Urca de Lima", ["Alfred Hamilton", "Randall", "Featherstone", "Idelle"])
piratenCrewsMap.set("Pirate Council", ["Blackbeard", "Captain Flint", "Charles Vane", "Jack Rackham"])


piratenCrewsMap.forEach((members, crew) => {
    members.forEach(member => { // geht durch alle crews des Crews durch
        if (member.length >= 12) { // prüft jedes Mitglied, die länger als 12 Zeichen sind
            console.log(`Crew: ${crew}, Member: ${member}, Length: ${member.length}`);
        }
    });
});