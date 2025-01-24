// json = JavaScript Object Notation

// hier sollen später die Vögel angezeigt werden
const birdzone = document.querySelector<HTMLDivElement>("#thebirdzone");
const loadBirdsBtn = document.querySelector<HTMLButtonElement>("#loadBirds");
const errorZone = document.querySelector<HTMLDivElement>("#errorZone");
const errorText = document.querySelector<HTMLDivElement>("#errorText");

type Bird = {
  name: string;
  latinName: string;
  url: string;
};

type BirdDetails = {
  name: string;
  latinName: string;
  description?: string;
  food: string[];
  size: string;
  imageUrl: string;
  songUrl: string;
};

    // const individualBirdPromises2 = birdsData.map(async (bird) => {
  //fetch(bird.url).then((response) => response.json())
    // })

async function loadBirds() {
  try {
    // API-Aufruf für die Vögel
    const birdResponse = await fetch(
      "https://stfnsr-birdmeister.web.val.run/birds"
    );

    // Simuliere einen Fehler (nur zu Testzwecken)
    const hasError = Math.random() > 0.3;
    if (hasError) {
      throw new Error("Something went wrong");
    }

    const birdsData: Bird[] = await birdResponse.json();

    // Lade Details zu jedem Vogel
    const individualBirdPromises = birdsData.map(async (bird) => {
      const singleBirdRequest = await fetch(bird.url);
      const singleBirdData: BirdDetails = await singleBirdRequest.json();
      return singleBirdData;
    });

    const combinedBirdPromise = Promise.all(individualBirdPromises);
    const combinedBirdData = await combinedBirdPromise;

    // Erfolgreiches Laden: Fehlerzone ausblenden, Vögel anzeigen
    renderBirds(combinedBirdData);

    errorZone?.classList.add("hidden");
  } catch (error) {

    // Fehlerbehandlung: Zeige die Fehlermeldung und den Reload-Button
    console.log("Received the following error");
    console.log(error);

    if (errorText) {
      errorText.textContent = "Failed to load birds. Please try again.";
    }
    errorZone?.classList.remove("hidden");
  }
}
loadBirds();



loadBirdsBtn?.addEventListener("click", () => {
  loadBirds();
});

// hiermit werden die daten in der DOM dargestellt
function renderBirds(birds: BirdDetails[]) {
  if (birdzone) {
    birdzone.innerHTML = ""; // Leere den Container
    birds.forEach((bird) => {
      birdzone.innerHTML += `
        <div class="card">
          <figure class="card-image">
              <img src="${bird.imageUrl}" alt="${bird.name}">
          </figure>
          <div class="card-content">
              <h3>${bird.name}</h3>
              <em>${bird.latinName}</em>
              <p>${bird.description?.slice(0, 100) ?? "[Keine Beschreibung verfügbar]"}</p>
              <audio controls>
                  <source src="${bird.songUrl}" type="audio/mpeg">
                  Dein Browser unterstützt das Audio-Element nicht.
              </audio>
          </div>
        </div>
      `;
    });
  }
}