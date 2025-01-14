// - Lernziel: while-Schleife verstehen und anwenden.
// - Schreibe eine while-Schleife, die "Hallo World + Nummer" 10 mal anzeigt.
// - Lege dazu eine Variable counter mit dem Wert 0 an.
// - Als Bedingung nutze in der Schleife "counter < 10".
// - Gib den String "Hallo World + counter" in der Konsole aus.
// - Erhöhe counter um eins.


let counter = 0;

while (counter < 10) {
    console.log(`Hallo World ${counter}`);
    counter++;
}