// - Erstelle ein Tuple names starWarsActor vom Typ string, string
// - die beiden Werte sind “Luke Skywalker”, “Mark Hamill”
// - Erstelle jetzt ein Array von diesen Tupeln, das mehrere StarWars-Schauspieler:innen enthält

// 
//     ["Luke Skywalker", "Mark Hamill"],
//     ["Darth Vader", "James Earl Jones"],
//     ["Yoda", "Frank Oz"],
//     ["Han Solo", "Harrison Ford"],
//     ["Princess Leia", "Carrie Fisher"]
// 

// - Lass dir in einer Schleife den Inhalt auf der Konsole ausgeben, z. B. “Mark Hamill spielt Luke Skywalker” etc.


const starWarsActor: [string, string][] = [["Luke Skywalker", "Mark Hamill"]];
console.log(starWarsActor);

const copieStarWarsActors = [...starWarsActor];
starWarsActor.push(
    ["Darth Vader", "James Earl Jones"],
    ["Yoda", "Frank Oz"],
    ["Han Solo", "Harrison Ford"],
    ["Princess Leia", "Carrie Fisher"]
);

console.log(starWarsActor);

console.log(copieStarWarsActors);

for (const name of starWarsActor) {
    console.log(`${name[1]} spielt ${name[0]}`);
}