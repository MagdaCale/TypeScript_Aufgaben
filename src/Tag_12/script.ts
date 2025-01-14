// Typ: HTMLElement | null
// => Wir wissen nicht ob tatsächlich ein Element mit dieser ID existiert, daher potentiell null
// => Wir wissen nicht genau um was für ein Element es sich handelt, daher pauschal HTMLElement
const paragraph = document.getElementById("paragraph");

// Typ: HTMLCollectionOf<HTMLParagraphElement>
// Da wir nach Tag selektieren, wissen wir um was für ein Element es sich handelt
// Da wir eine Collection zurueckkriegen, gibt es kein "| null"
// Denn falls nichts gefunden wird, kriegen wir einfach eine leere Collection.
const paragraphsByTag = document.getElementsByTagName("p");

// => Element | null, da kein Tagname gegeben
const paragraphQuerySelectorWithId = document.querySelector("#paragraph");
// => HTMLParagraphElement | null, da Tagname gegeben
const paragraphQuerySelectorWithTagName = document.querySelector("p");

// => Element | null, da nicht *nur* nach Tagnamen selektiert
const paragraphNumber2 =
  document.querySelector<HTMLParagraphElement>("p#paragraph2");

// oft wollen wir auf spezifische Properties zugreifen die nicht auf allen Elementen existieren
// z.B. den value eines inputs.
// Da ist es wichtig, genau zu wissen / anzugeben um welches Element es sich handelt
const inputNumber1 = document.querySelector<HTMLInputElement>("#input1");
const inputValue = inputNumber1?.value;

// wir koennen auch direkt den style von elementen aendern
// um auf properties von Elementen zuzugreifen, v.a. um dinge an sie zuzuweisen, muessen wir erst sicher sein dass das Element existiert
if (paragraphNumber2) {
  paragraphNumber2.style.color = "red";
}
// wir koennen mit ! ausdruecken, dass das Element definitiv existiert.
// das kann aber riskant sein, da uns Typescript das einfach glaubt. Es koennte aber falsch sein.
// also eher vermeiden.
paragraphNumber2!.style.color = "blue";

// mit classList können wir effizient auf die auf einem Element vorhandenen Klassen zugreifen

// .add fuegt klassen hinzu (mehrfacher aufruf fuegt sie nicht doppelt hinzu)
paragraphQuerySelectorWithTagName?.classList.add("cool-class");

// .remove entfernt sie
paragraphQuerySelectorWithTagName?.classList.remove("cool-class");

// .toggle fuegt klassen hinzu die nicht vorhanden sind, und entfernt sie falls sie vorhanden sind
// der rueckgabewert ist der neue zustand (also, true falls hinzugefuegt)
paragraphQuerySelectorWithTagName?.classList.toggle("toggle-class");

const themeSwitch = document.querySelector("#themeswitch");

themeSwitch?.addEventListener("click", function () {
  // html element auswaehlen
  const body = document.querySelector("body");
  // es ginge auch: const body = document.body

  // dann darauf die klasse .theme-dark togglen
  body?.classList.toggle("theme-dark");
});

const shoppingButton =
  document.querySelector<HTMLInputElement>("#shopping-button");

const shoppingInput =
  document.querySelector<HTMLInputElement>("#shopping-input");
const shoppingList = document.querySelector("#shopping-list");

const shoppingDeleteButton = document.querySelector("#shopping-delete-button");

if (shoppingButton && shoppingInput && shoppingList && shoppingDeleteButton) {
  shoppingButton.addEventListener("click", function (event) {
    // event.preventDefault unterdrueckt formular submit und damit das neuladen der seite
    event.preventDefault();
    // value holen
    const value = shoppingInput.value;
    // neues li-element anlegen

    // mit document.createElement(tagName) können wir neue Elemente beliebiger Tags erzeugen
    const newListElement = document.createElement("li");

    // neues Element in DOM einhängen
    // .appendChild fuegt das Element als ChildElement in ein anderes ein (nach evtl. schon bestehenden Child Elementen)
    shoppingList.appendChild(newListElement);

    // li element mit value befuellen
    newListElement.textContent = value;
    newListElement.classList.add("shopping-item");

    // input leeren
    shoppingInput.value = "";
  });

  shoppingDeleteButton.addEventListener("click", function () {
    // alle elemente in der liste auswaehlen
    const elements = shoppingList.children;

    // .remove auf allen elementen aufrufen

    // geht nicht, da sich die HTMLCollection und die Reihenfolge der Elemente waehrend der Iteration aendern wuerde
    // for (const element of elements) {
    //   element.remove();
    // }

    // wir wandeln die elemente erst zum array um, um besser darueber iterieren zu koennen
    const elementsArray = [...elements] // oder: Array.from(elements)
    // dann rufen wir auf jedem Element remove auf
    elementsArray.forEach((element)=>element.remove())

    // alternativ: alles innerhalb der shoppingList entfernen
    shoppingList.innerHTML = ""

  });
}
