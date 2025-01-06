
const artworks: string[] = [
    "Die Sternennacht - Vincent van Gogh",
    "Guernica - Pablo Picasso",
    "Pablo Picasso - Joachim Irgendwer",
    "Die Geburt der Venus - Sandro Botticelli",
    "Die Nachtwache - Rembrandt",
    "Die Mona Lisa - Leonardo da Vinci",
    "Die Kartoffelesser - Vincent van Gogh",
    "Der Schrei - Edvard Munch",
    "Das letzte Abendmahl - Leonardo da Vinci",
    "Die freudige Botschaft - James Tissot",
    "Der Garten der Lüste - Hieronymus Bosch"
]

const artworkDates: string[] =  [
    "Die Sternennacht - 1889",
    "Guernica - 1937",
    "Pablo Picasso - 2025",
    "Die Geburt der Venus - 1486",
    "Die Nachtwache - 1642",
    "Die Mona Lisa - 1503",
    "Die Kartoffelesser - 1885",
    "Der Schrei - 1893",
    "Das letzte Abendmahl - 1495",
    "Die freudige Botschaft - 1885",
    "Der Garten der Lüste - 1505"
]

// const splitName = artworks.map((name) => name.split(" - "));
// console.log(splitName);

// const splitDate = artworkDates.map((date) => date.split(" - "));
// console.log(splitDate);

// - nach dem split() wird ein Array von Arrays erzeugt
// const splitName = [
//     ["Die Sternennacht", "Vincent van Gogh"],
//     ["Guernica", "Pablo Picasso"]
//   ]
  
//   const splitDate = [
//     ["Die Sternennacht", "1889"],
//     ["Guernica", "1937"]
//   ]


// const artworkkName = (name: string)  => {

//     // -  find((el) => el.includes(name)) suchst nach dem Eintrag, der den Teilstring name enthält.
//     // - el (element) repräsentiert ein Array wie ["Die Sternennacht", "Vincent van Gogh"], welches vorher durch splitName definiert wurde.
//     const artwork =  splitName.find((el) => el.includes(name))
//     const artworkDates =  splitDate.find((el) => el.includes(name))

//     if(artwork && artworkDates) {
//         console.log(`"${artwork[0]}" wurde von ${artwork[1]}im Jahre ${artworkDates[1]} gemalt`);
//     } else {
//         console.log(`Artwork "${name}" nicht gefunden`);
//     }

// }

// artworkkName("Der Garten der Lüste");
// artworkkName("Der Garten deste");


// ! Stefans CODE

// const splitName1 = artworks.map((name) => name.split(" - "));
// const splitDate2 = artworkDates.map((date) => date.split(" - "));

function findArtwork(name: string) {

    const entryWithArtist = artworks.find((entry) => {

        // -  artworks-Liste wird nach einem Eintrag, der den name (ElementName) enthält, gesucht.
        // - Der Eintrag wird anhand des Strichzeichens (” - “) gesplittet, und es wird geprüft, ob das erste Element (elementName) mit name übereinstimmt.
        const [elementName] = entry.split(" - ");
        return elementName.includes(name)
        // return elementName === name; // -> Rückgabewert: true oder false
    });

    // const entryWithArtist = artworks.find((entry) => entry.includes(name));
    const entryWithYear = artworkDates.find((entry) => entry.includes(name));

    if (entryWithArtist && entryWithYear) {
        const [, artist] = entryWithArtist.split(" - ");
        const [, year] = entryWithYear.split(" - ");
        console.log(`"${name}" wurde von ${artist} im Jahre ${year} gemalt.`);
    } else {
        console.log(`Artwork "${name}" nicht gefunden`);
    }
}

findArtwork("Pablo Picasso");