

// - Dazu kannst du die replaceAll-Methode des String-Objekts verwenden.
// - Mit der innerText-Eigenschaft des Elements kannst du nur den Text des Artikels erhalten und mit der innerHTML-Eigenschaft kannst du den HTML-Inhalt des Artikels festlegen.
// - Du kannst ein span-Element verwenden, um die Wörter hervorzuheben.

const searchButton = document.getElementById("search-button");

const clicktoSearch = () => {
    const searchInput = document.getElementById("search-input") as HTMLInputElement; 

    // const searchInput = (document.getElementById("search-input") as HTMLInputElement).value
    // ? value direkt bei document abfragen -> vorteil: verkürzte schriebweise und value muss nur einmal abgefragt werden

    let article = document.querySelector("article") as HTMLElement;
    const hinweisDiv = document.querySelector("div");
    const articleText = article.innerText; // ? innerText ignoriert HTML-Tags und such nur den reienten Text
    const searchValue = searchInput.value.trim();

    // ! Prüfen, ob etwas angegeben wurde
    // trim() ->  Entfernt die Leerzeichen am Anfang und Ende der String so, wie er eingegeben wurde
    if (!searchValue) {
        return;
    }

    // ! Gesuchtes Wort wird gelb und fett hervorgehoben
    // const highlight = `<span style="background-color: yellow; font-weight: bold; color: black">${searchInput.value}</span>`;
    const highlight = `<span class="highlight">${searchValue}</span>`;


    // ! Prüfen, ob das Wort im Artikel vorhanden ist
     // ? wird nur ausgeführt, wenn der erste Teil (article) true ist.
    
    //  Wenn das wort im Artikel ist: !true wird false, und der if-Block wird nicht ausgeführt.
    if (article && !articleText.includes(searchValue)) {
        if (hinweisDiv) {
            hinweisDiv.innerHTML = `<p class="alert">Das Wort "${searchValue}" ist nicht im Text enthalten</p>`;
        // Wenn das Wort im Artikel nicht vorhanden ist: !false wird true, und der if-Block wird ausgeführt.
        }
        return;
        }
    
    // Fehlermeldung verschwindet, wenn das richtige Wort angegeben wurde
    if (hinweisDiv) {
        hinweisDiv.innerText = "";
    }

    // ! Ersetzen, wenn Artikel existiert
    if (article) {
        article.innerHTML = article.innerHTML.replaceAll(searchValue, highlight);
    }
};

// Event Listener für den Button 
// "?" -> prüft ob das Element existiert -> wenn ja, dann wird die Funktion ausgeführt
searchButton?.addEventListener("click", clicktoSearch);


