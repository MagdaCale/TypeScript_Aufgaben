


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

// fetch ruft die uebergebene URL ab
fetch("https://stfnsr-birdmeister.web.val.run/birds")
  // falls Daten zurueckkommen, wird das .then-callback aufgerufen
  .then((response) => response.json())
  // response.json() packt den eigentlich inhalt der antwort aus
  // wir erhalten das ergebnis, sobald es fertig ist, als parameter im naechsten then
  .then((data: Bird[]) => {
    // wir muessen hier einen Typ fuer data angeben, da Typescript nicht weiß was von der API zurückkommen wird

    // ! wuerde es hier zu einem Fehler kommen, wuerde dieser im .catch callback abgefangen, und wir koennten angemessen darauf reagieren
    // throw new Error("KAPUUUUUUTT ")


    const nurMeisen = data.filter((bird) =>  bird.name.toLowerCase().includes("meise"))

    // * längere version
    // const nurMeisen = data.filter((bird) => {
    //   return bird.name.toLowerCase().includes("meise")
      
    // });

    console.log(nurMeisen);


    // renderBirds(data);

    // so ungefaehr koennen wir spaeter detailinformationen abholen

    const allBirdRequests = Promise.all(
      data.map((bird) => {
        return fetch(bird.url).then((response) => response.json());
      })
    );
    allBirdRequests.then((data: BirdDetails[]) => {
      renderBirds(data)
    });

    //  data.forEach((bird) => {
    //   fetch(bird.url)
    //     .then((response) => response.json())
    //     .then((birdDetails) => {
    //       console.log(birdDetails)

    //       if (birdzone) {
    //         birdzone.innerHTML += `
    //           <div style="
    //               box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    //               padding: 1.5rem; 
    //               border-radius: 0.375rem;">
    //               <h3>${birdDetails.name}</h3>
    //               <em>${birdDetails.latinName}</em>
    //               <p> ${birdDetails.description}</p>
    //           </div>
    //           `;
    //       }
      
    //     });
    // });
  })

  .catch((error) => {
    // hier koennen wir auf fehler reagieren, z.B.
    // - In UI einen Button "Try again" zeigen
    // - automatisch neu versuchen
    // - Fehler in eine Logging-Datei schreiben
    console.error(error);
  });

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
