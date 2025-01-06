// - ARRAY'S UND OBJEKTEN - //
const dune = {
    title: "Dune",
    year: 2021,
    actors: ["Timothee Chalamet", "Liam Neeson", "Javier Bardem"],
    discription: "A movie about the future",
    director: "Denis Villeneuve",
    raiting: 8.4
}

const jurassicPark = {
    title: "Jurassic Park",
    year: 1993,
    actors: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
    discription: "A movie about dinosaurs",
    director: "Steven Spielberg",

}


console.log(Object.keys(dune));
console.log(Object.values(dune));
console.log(Object.entries(dune));

// - mit type können wir Typinformationen Namen zuweisen und sie dan über diesen verwende
type Movie = {
    title: string, 
    year: number, 
    actors: string[],
    director: string, 
    discription: string,
    raiting?: number // - ? => diese Eigenschaft ist optional
}

const movies: Movie[] = [jurassicPark, dune]

console.log(movies[0].actors);
console.log(movies[0].raiting);



const artWork = [
    "Die Sternennacht - Vincent van Gogh - 1889",
    "Guernica - Pablo Picasso - 1937",
    "Die Geburt der Venus - Sandro Botticelli - 1486",
    "Die Nachtwache - Rembrandt - 1642",
    "Die Mona Lisa - Leonardo da Vinci - 1503",
    "Die Kartoffelesser - Vincent van Gogh - 1885",
    "Der Schrei - Edvard Munch - 1893",
    "Das letzte Abendmahl - Leonardo da Vinci - 1495",
    "Die freudige Botschaft - James Tissot  - 1885",
    "Der Garten der Lüste - Hieronymus Bosch - 1505"
]
type Artwork = {
    title: string, 
    year: number, 
   artist: string
}

const artWorksTest: Artwork[] = artWork.map(function(line) {
    const splitLine = line.split(" - ");
    return {
        title: splitLine[0],
        artist: splitLine[2],
        year: Number(splitLine[2])
    }
})

console.log(artWorksTest);
