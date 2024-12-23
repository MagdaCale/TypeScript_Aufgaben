

// - Dazu kannst du die replaceAll-Methode des String-Objekts verwenden.
// - Mit der innerText-Eigenschaft des Elements kannst du nur den Text des Artikels erhalten und mit der innerHTML-Eigenschaft kannst du den HTML-Inhalt des Artikels festlegen.
// - Du kannst ein span-Element verwenden, um die Wörter hervorzuheben.

const searchButton = document.querySelector("#search-button") as HTMLInputElement;

function clicktoSearch ()  {
    const searchInput = (document.querySelector("#search-input") as HTMLInputElement).value.trim()
    // ? value direkt bei document abfragen -> vorteil: verkürzte schriebweise und value muss nur einmal abgefragt werden
    // trim() ->  Entfernt die Leerzeichen am Anfang und Ende der String so, wie er eingegeben wurde


    const article = document.querySelector("article") as HTMLElement;
    const hinweisDiv = document.querySelector("div");
    const articleText = article.innerText; // ? innerText ignoriert HTML-Tags und such nur den reienten Text der im html dokument gespeichert ist.
    const searchValue = searchInput;

    // ! Prüfen, ob etwas angegeben wurde
    if (!searchValue || !article || !hinweisDiv) {
        return
    } 

    // ! Gesuchtes Wort wird gelb und fett hervorgehoben
    // const highlight = `<span style="background-color: yellow; font-weight: bold; color: black">${searchInput.value}</span>`;
    const highlight = `<span class="highlight">${searchValue}</span>`;


    // ! Prüfen, ob das Wort im Artikel vorhanden ist
     // ? wird nur ausgeführt, wenn der erste Teil (article) true ist.
    
    //  Wenn das wort im Artikel ist: !true wird false, und der if-Block wird nicht ausgeführt.
    if (!articleText.includes(searchValue)) {
        hinweisDiv.innerHTML = `<p class="alert">Das Wort "${searchValue}" ist nicht im Text enthalten</p>`;
        // Wenn das Wort im Artikel nicht vorhanden ist: !false wird true, und der if-Block wird ausgeführt.
        return; // ohne return würde hinweistext dirket gelöscht werden
        }
    
  
    hinweisDiv.innerText = "";

    // ! Ersetzen, wenn Artikel existiert
    article.innerHTML = articleText.replaceAll(searchValue, highlight);

};

// Event Listener für den Button 
// "?" -> prüft ob das Element existiert -> wenn ja, dann wird die Funktion ausgeführt
// searchButton?.addEventListener("click", clicktoSearch);

searchButton.onclick = clicktoSearch


