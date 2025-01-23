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

// Container für die Ausgabe
const outputDiv = document.querySelector<HTMLDivElement>("#output");

// Abruf der API-Daten
fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
        renderCharacters(data.results as Character[]);
    })
    .catch((error) => {
        console.error("Fehler beim Laden der Charaktere:", error);
    });

// Funktion für die Darstellung der Charaktere
function renderCharacters(characters: Character[]) {
    if (outputDiv) {
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
        });
    }
}