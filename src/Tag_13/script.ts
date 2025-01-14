// wenn das Element "Hoverme" gehovert wird, wollen wir "Hovering!" in der Konsole ausgeben
const hovermeElement = document.querySelector("#hoverme");

if (hovermeElement) {
  // aufbau von addEventListener-Aufrufen:
  // element                art des events      funktion die wir ausfuehren wollen
  hovermeElement.addEventListener("mouseover", function () {
    console.log("Hovering!");
  });
  // wir koennen auch mehrere gleichartige Events auf das gleiche Element legen
  hovermeElement.addEventListener("mouseover", function () {
    console.log("Schweben!");
  });
  hovermeElement.addEventListener("mouseout", function () {
    console.log("Stopped Hovering!");
  });
}

// * Counter +++++++

// wir selektieren den button auf dem der Event listener liegen soll
const counterButton = document.querySelector("#counter-button");
const counterButtonTextElement = document.querySelector("#counter-button-text");

// wir checken, ob der button (und das textelement darin) auch wirklich da ist
if (counterButton && counterButtonTextElement) {
  // wir initialisieren eine variable die sich merken soll was die aktuelle zahl ist
  let count = 0;

  // hier legen wir einen listener auf den button,
  // d.h., die funktion die immer ausgefuehrt werden soll, wenn der button geklickt wird
  counterButton.addEventListener("click", function (event) {
    console.log(event.target);
    // immer um eins hochzaehlen
    count++;
    // wir setzen den Buttontext auf den neuen Wert
    counterButtonTextElement.textContent = `Count is ${count}`;
  });

  // counterButtonTextElement befindet sich innerhalb von counterButton.
  // normalerweise wuerden bei einem klick also beide listener ausgefuehrt.
  // wir wollen dies hier verhindern
  counterButtonTextElement.addEventListener("click", function (event) {
    // stopPropagation unterdrueckt event Bubbling
    // d.h., das Event wird *nicht* den event listener auf dem Button ausloesen.
    event.stopPropagation();
    console.log(
      "Hurra, du hast den Text geclickt, Counter wird nicht inkrementiert."
    );
  });
}

// * Bower Bird Nesting Experience

const blueThings = ["🖌️", "🦕", "🫐"];

const selectElement =
  document.querySelector<HTMLSelectElement>("#bower-select");
const addButton = document.querySelector("#bower-add-button");
const nestElement = document.querySelector("#bower-nest");
const trashElement = document.querySelector("#bower-trash");
const nestIconElement = document.querySelector("#bower-nest-icon");

if (
  selectElement &&
  addButton &&
  nestElement &&
  trashElement &&
  nestIconElement
) {
  // erst legen wir einen clickhandler auf den add button
  addButton.addEventListener("click", function () {
    // der aktuell ausgewaehlte select eintrag (z.B. "🫐")
    const selectedThing = selectElement.value;
    // wir checken ob das ausgewaehlte ding in unserer liste blauer objekte ist
    const isThingBlue = blueThings.includes(selectedThing);

    // wir erstellen ein neues span, und setzen seinen text auf den ausgewaehlten eintrag
    const newElement = document.createElement("span");
    newElement.textContent = selectedThing;

    if (isThingBlue) {
      // wir fuegen das span (falls etwas blaues ausgewaehlt war)
      // ins nest ein
      nestElement.appendChild(newElement);

      // wir setzen seinen style so, dass es sich auf einer zufaelligen position
      // im nest befindet
      newElement.style.position = "absolute";
      const posX = Math.random() * 200;
      const posY = Math.random() * 200;
      newElement.style.left = posX.toString() + "px";
      newElement.style.top = posY.toString() + "px";

      if (nestElement.childElementCount >= 11) {
        // falls es bereits 11 Elemente im Nest gibt, ersetzten wir das nest-icon durch eines mit eiern
        nestIconElement.textContent = "🪺";
      }
    } else {
      // ist das ausgewaehlte nicht blau, packen wir es in den muell
      trashElement.appendChild(newElement);
    }
  });
}
