

// - Dazu kannst du die replaceAll-Methode des String-Objekts verwenden.
// - Mit der innerText-Eigenschaft des Elements kannst du nur den Text des Artikels erhalten und mit der innerHTML-Eigenschaft kannst du den HTML-Inhalt des Artikels festlegen.
// - Du kannst ein span-Element verwenden, um die Wörter hervorzuheben.

const searchButton = document.getElementById("search-button");

const clicktoSearch = () => {
    const searchInput = document.getElementById("search-input") as HTMLInputElement; 

    // const searchInput = (document.getElementById("search-input") as HTMLInputElement).value
    // ? value direkt bei document abfragen -> vorteil: verkürzte schriebweise und value muss nur einmal abgefragt werden

    const article = document.querySelector("article");
    const hinweisDiv = document.querySelector("div");

    // ! Prüfen, ob etwas angegeben wurde
    // trim() ->  Entfernt die Leerzeichen am Anfang und Ende der String so, wie er eingegeben wurde
    if (!searchInput.value.trim()) {
        return;
    }

    // ! Gesuchtes Wort wird gelb und fett hervorgehoben
    // const highlight = `<span style="background-color: yellow; font-weight: bold; color: black">${searchInput.value}</span>`;
    const highlight = `<span class="highlight">${searchInput.value}</span>`;


    // ! Prüfen, ob das Wort im Artikel vorhanden ist
     // ? wird nur ausgeführt, wenn der erste Teil (article) true ist.
    
    //  Wenn das wort im Artikel ist: !true wird false, und der if-Block wird nicht ausgeführt.
    if (article && !article.innerHTML.includes(searchInput.value)) {
        if (hinweisDiv) {
            hinweisDiv.innerHTML = `<p class="alert">Das Wort "${searchInput.value}" ist nicht im Text enthalten</p>`;
        // Wenn das Wort im Artikel nicht vorhanden ist: !false wird true, und der if-Block wird ausgeführt.
        }
        return;
        }
    
    // Fehlermeldung verschwindet, wenn das richtige Wort angegeben wurde
    if (hinweisDiv) {
        hinweisDiv.innerHTML = "";
    }

    // ! Ersetzen, wenn Artikel existiert
    if (article) {
        article.innerHTML = article.innerHTML.replaceAll(searchInput.value, highlight);
    }
};

// Event Listener für den Button 
// "?" -> prüft ob das Element existiert -> wenn ja, dann wird die Funktion ausgeführt
searchButton?.addEventListener("click", clicktoSearch);


