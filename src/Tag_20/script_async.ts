


// json = JavaScript Object Notation

// hier sollen später die Vögel angezeigt werden
const birdzone = document.querySelector<HTMLDivElement>("#thebirdzone");


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
  size: string
  imageUrl: string
  songUrl: string
};

const birdResponse = await fetch("https://stfnsr-birdmeister.web.val.run/birds");
const birdsData: Bird[] = await birdResponse.json();

const individualBirdPromises = birdsData.map(async (bird) => {
    const singleBirdRequest = await fetch(bird.url)
    const singleBirdData: BirdDetails = await singleBirdRequest.json()
    return singleBirdData  
})

// const individualBirdPromises2 = birdsData.map(async (bird) => {
//    fetch(bird.url).then((response) => response.json())
// })

const combinedBirdPromise = Promise.all(individualBirdPromises);
const combinedBirdData = await combinedBirdPromise;
renderBirds(combinedBirdData);

// hiermit werden die daten in der DOM dargestellt
function renderBirds(birds: BirdDetails[]) {
  birds.forEach((bird) => {
    if (birdzone) {
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
    }
  });
}
