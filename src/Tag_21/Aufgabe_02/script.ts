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
const outputDiv = document.querySelector<HTMLDivElement>("#output");
const searchInput = document.querySelector<HTMLInputElement>("#searchInput");

// Abruf der API-Daten
fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data: ApiResponse) => {
        const characters = data.results; // Speichere die Charaktere aus der API in einer Variablen

        // Initiales Rendern der Charaktere
        renderCharacters(characters);

        // EventListener zum Suchen eines Charakters
        searchInput?.addEventListener("input", () => {
            const searchValue = searchInput.value.trim().toLowerCase(); 
            if (!searchValue) {
                // Zeigt alle Charaktere, wenn die Eingabe leer ist
                renderCharacters(characters);
                return;
            }
            const filteredCharacters = characters.filter((character) =>
                character.name.toLowerCase().includes(searchValue)
            )
            renderCharacters(filteredCharacters); // Zeige gefilterte Charaktere an
        })
    })
    .catch((error) => {
        console.error("Fehler beim Laden der Charaktere:", error);
    });

// Funktion für die Darstellung der Charaktere
function renderCharacters(characters: Character[]) {
    if (outputDiv) {
        outputDiv.innerHTML = ""; // Leere den Container vor dem Rendern
        characters.forEach((character) => {
            const characterCard = `
            <div class="card">
                <img src="${character.image}" alt="${character.name}">
                <div class="card-content">
                    <h3>${character.name}</h3>
                    <p><strong>Status:</strong> ${character.status}</p>
                    <p><strong>Species:</strong> ${character.species}</p>
                    <p><strong>Gender:</strong> ${character.gender}</p>
                </div>
            </div>
            `
            outputDiv.innerHTML += characterCard;
        })
    }
}