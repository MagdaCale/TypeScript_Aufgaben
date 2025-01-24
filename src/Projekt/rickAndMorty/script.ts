type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    episode: string[];
    url: string;
    created: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    }
};

type ApiResponse = {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
};


// Container für die Ausgabe
const outputArticle = document.querySelector<HTMLDivElement>("#output");
const searchInput = document.querySelector<HTMLInputElement>("#searchInput");

// Abruf der API-Daten
fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data: ApiResponse) => {
        const characters = data.results; 
        // - Speichere die Charaktere aus der API in einer Variablen

        // - Rendern der Charaktere
        renderCharacters(characters);

        // EventListener zum Suchen eines Charakters
        searchInput?.addEventListener("input", () => {
            const searchValue = searchInput.value.trim().toLowerCase(); 
            if (!searchValue) {
                //- Zeigt alle Charaktere, wenn die Eingabe leer ist
                renderCharacters(characters);
                return;
            }
            const filteredCharacters = characters.filter((character) =>
                character.name.toLowerCase().includes(searchValue)
            )
            renderCharacters(filteredCharacters); // - Zeige gefilterte Charaktere an
        })
    })
    .catch((error) => {
        console.error("Fehler beim Laden der Charaktere:", error);
    });

// Funktion für die Darstellung der Charaktere
function renderCharacters(characters: Character[]) {
    if (outputArticle) {
        outputArticle.innerHTML = ""
        characters.forEach((character) => {
            const characterCard = `
            <div class="card">
           
                <img src="${character.image}" alt="${character.name}">
              
                <div class="card-content">

                <div class="character-name">
                    <h3>${character.name}</h3>
                    <span class="status-dot ${character.status.toLowerCase()}"></span>
                    <strong>Status:</strong> ${character.status}
                </div>
                <div class="character-origin">
                    <p>Origin</p>
                    <a href="${character.origin.url}" target="_blank">
                    <strong>${character.origin.name}</strong>
                </a>
                </div>
                
                <div class="character-gender">
                    <p>Gender</p>
                    <p><strong>${character.gender}</strong></p>
                </div>

                </div>
            </div>
            `
            outputArticle.innerHTML += characterCard;
        })
    }
}