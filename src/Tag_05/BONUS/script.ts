// - Initialisieren der Spielstände da beide mit 0 beginnen
// - diese verändern sich durch die Funktionen, also durch das klicken der buttons
let homeScore = 0;
let awayScore = 0;


const homeScoreElement = document.querySelector("#home-score") as HTMLDivElement;
const awayScoreElement = document.querySelector("#away-score") as HTMLDivElement;


const homeEmoji = document.querySelector("#home-emoji") as HTMLDivElement;
const awayEmoji = document.querySelector("#away-emoji") as HTMLDivElement;

// - Aktualisiert die Anzeige der Spielstände
function updateScore(): void {
    homeScoreElement.textContent = homeScore.toString();
    awayScoreElement.textContent = awayScore.toString(); // textConent erwartet einen string

    homeEmoji.innerHTML = "";
    awayEmoji.innerHTML = "";

    // Dynamische Logik für GIFs
    if (homeScore === awayScore) {
        homeEmoji.innerHTML = `<img src="./assets/img/draw.gif" alt="Draw">`;
        awayEmoji.innerHTML = `<img src="./assets/img/draw.gif" alt="Draw">`;
    } else if (homeScore > awayScore) {
        homeEmoji.innerHTML = `<img src="./assets/img/iWon.gif" alt="Winner">`;
        awayEmoji.innerHTML = `<img src="./assets/img/iLost.gif" alt="Loser">`;
    } else {
        homeEmoji.innerHTML = `<img src="./assets/img/iLost.gif" alt="Loser">`;
        awayEmoji.innerHTML = `<img src="./assets/img/iWon.gif" alt="Winner">`;
    }
}

// - Funktion: fügt Punkte zur Home Crew hinzu
// * diese funktion führt nur eine Aktion aus, also das klicken der buttons und gibt auch keinen Wert aus
function addHomePoints(points: number): void {
    homeScore += points;
    updateScore();
}

// - Funktion: fügt Punkte zur Away Crew hinzu
function addAwayPoints(points: number): void {
    awayScore += points;
    updateScore();
}


// - seztz die Spielstände zurück
function resetScore(): void {
    homeScore = 0;
    awayScore = 0;
    updateScore();
}


// - Home-Buttons
document.querySelector("#homeBtn1")?.addEventListener("click", () => addHomePoints(1));
document.querySelector("#homeBtn2")?.addEventListener("click", () => addHomePoints(2));
document.querySelector("#homeBtn3")?.addEventListener("click", () => addHomePoints(3));

// - Away-Buttons
document.querySelector("#awayBtn1")?.addEventListener("click", () => addAwayPoints(1));
document.querySelector("#awayBtn2")?.addEventListener("click", () => addAwayPoints(2));
document.querySelector("#awayBtn3")?.addEventListener("click", () => addAwayPoints(3));

// - Reset-Button
document.querySelector("#resetBtn")?.addEventListener("click", resetScore);