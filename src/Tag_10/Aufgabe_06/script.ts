// - Nehmen wir an, wir wollen automatisiert 100 Dateinamen für Bilder in unserem Ordner erstellen. Wir erstellen dazu ein Array mit standardisierten Dateinamen – wie in der Ergebnisvorschau.

// - Gib das Array mit return aus der Funktion zurück

// - Deklariere dafür die Function createImageNames.
const createImageNames = () => {
    // - Deklariere im Funktionskörper die Variable returnArray als leeres Array.
    const returnArray = [];

    // - Schreibe eine for-Schleife.
    for (let i = 1; i <= 100; i++) {

        // - Nutze push() um den jeweiligen Dateinamen ins Array zu schreiben
        returnArray.push(i.toString().padStart(3, "0") + ".jpg");
    }
    return returnArray;
}   

console.log(createImageNames());


// const createImageNames = () => {
//     const returnArray = [];
//     for (let i = 1; i <= 100; i++) {
//         let imageName = `img${i}.jpg`;  
//         if (i < 10) {
//             imageName = `img0${i}.jpg`;
//         } else if (i < 100) {
//             imageName = `img${i}.jpg`;
//         }
//         returnArray.push(imageName);
//     } return returnArray;
// }

// console.log(createImageNames());