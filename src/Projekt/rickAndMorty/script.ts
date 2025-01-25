// Typdefinitionen bleiben gleich

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
    };
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
const loadCharactersBtn = document.querySelector<HTMLButtonElement>("#loadCharacter");

// Globale Variable, um die nächste Seite zu verfolgen
let nextPageUrl: string | null = "https://rickandmortyapi.com/api/character";


let allCharacters: Character[] = [];

function fetchAndRenderCharacters(url: string) {
    fetch(url)
        .then((response) => response.json())
        .then((data: ApiResponse) => {
            const characters = data.results;

            allCharacters = [...allCharacters, ...characters]; 

            renderCharacters(characters);

            nextPageUrl = data.info.next;

            // - wenn keine charaktere mehr vorhanden sind, wird der Button deaktiviert 
            if (!nextPageUrl && loadCharactersBtn) {
                loadCharactersBtn.textContent = "No more characters";
            }
        })
        .catch((error) => {
            console.error("Fehler beim Laden der Charaktere:", error);
        });
}

searchInput?.addEventListener("input", () => {
    const searchValue = searchInput.value.trim().toLowerCase();
    
    if (!searchValue) {
        outputArticle!.innerHTML = ''; 
        renderCharacters(allCharacters);  
        return;
    }

    const filteredCharacters = allCharacters.filter((character) => 
        character.name.toLowerCase().includes(searchValue)
    );
    
    outputArticle!.innerHTML = ''; 
    renderCharacters(filteredCharacters);
});


// EventListener für den Load morem Button
loadCharactersBtn?.addEventListener("click", () => {
    if (nextPageUrl) {
        fetchAndRenderCharacters(nextPageUrl);
    }
});

// searchInput?.addEventListener("input", () => {
//     const searchValue = searchInput.value.trim().toLowerCase();
//     if(!searchValue){    
//         fetchAndRenderCharacters("https://rickandmortyapi.com/api/character");
//         // renderCharacters(characters);
//         return;
//     }

//     const filteredCharacters = characters.filter((character) => {
//         return character.name.toLowerCase().includes(searchValue);
//     });
//     renderCharacters(filteredCharacters);
// });




// Funktion für die Darstellung der Charaktere
function renderCharacters(characters: Character[]) {
    if (outputArticle) {
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
            `;
            outputArticle.innerHTML += characterCard;
        });
    }
}

// Initialer Datenabruf
fetchAndRenderCharacters(nextPageUrl!);