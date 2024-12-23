// - Lernziel: Verstehen und Anwenden des Ternary Operators.
// - Nun sollst du eine Abfrage erstellen, in der du prüfst, ob das User:innen-Passwort „sicher“ genug ist.
// - Als Anforderung für das Passwort gilt, dass es mindestens 8 Zeichen lang sein muss.

const passwortInout = document.querySelector("#password") as HTMLInputElement;
const saveButton = document.querySelector("#save") as HTMLButtonElement;

function checkPassword() {
  const password = passwortInout.value;
  
  // - überprüft die länge des passworts
  const passwortLength = password.length

    const ermitteln = passwortLength > 8 ? "sicher" : "min. 8 Zeichen";

    console.log(ermitteln);
}

saveButton.onclick = checkPassword