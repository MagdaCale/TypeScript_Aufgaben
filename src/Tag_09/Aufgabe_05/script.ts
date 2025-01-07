


const piratenCrewsMap = new Map <string, string[]>()


piratenCrewsMap.set("Walrus Crew", ["Captain Flint", "John Silver", "Billy Bones", "Hal Gates"])
piratenCrewsMap.set("Ranger Crew", ["Charles Vane", "Jack Rackham", "Anne Bonny", "Eleanor Guthrie"])
piratenCrewsMap.set("Spanish Man O’ War", ["Captain Hornigold", "Dufresne", "Muldoon", "Dooley"])
piratenCrewsMap.set("Urca de Lima", ["Alfred Hamilton", "Randall", "Featherstone", "Idelle"])
piratenCrewsMap.set("Pirate Council", ["Blackbeard", "Captain Flint", "Charles Vane", "Jack Rackham"])

console.log(piratenCrewsMap.size);

console.log(piratenCrewsMap.get("Walrus Crew"))


const faveCrew = piratenCrewsMap.get("Walrus Crew")
if(faveCrew){ // ? prüft, ob undifinde oder vorhanden
    console.log(faveCrew[faveCrew.length -1]);
}

// console.log(faveCrew?.[faveCrew.length -1]);
// "." fester Bestandteil des "?." Operators