// Hole die Kreise aus dem DOM
const circle1 = document.querySelector("#circle1") as HTMLDivElement;
const circle2 = document.querySelector("#circle2") as HTMLDivElement;
const circle3 = document.querySelector("#circle3") as HTMLDivElement;
const circle4 = document.querySelector("#circle4") as HTMLDivElement;
const circle5 = document.querySelector("#circle5") as HTMLDivElement;
const circle6 = document.querySelector("#circle6") as HTMLDivElement;
const circle7 = document.querySelector("#circle7") as HTMLDivElement;
const circle8 = document.querySelector("#circle8") as HTMLDivElement;
const title = document.querySelector("#title") as HTMLHeadingElement;

// Funktion, um die Hintergrundfarbe zu ändern
function changeBackground(color: string): void {
    const background = document.querySelector("#background") as HTMLBodyElement;
    background.style.backgroundColor = color;
}

// Füge Event-Listener für jeden Kreis hinzu
circle1.addEventListener("click", () => {
    changeBackground("#0eec7d");
    title.style.color = "#e25f2b";
});
circle2.addEventListener("click", () => {
    changeBackground("#e25f2b");
    title.style.color = "#0eec7d";
});
circle3.addEventListener("click", () => {
    changeBackground("#ffff00");
    title.style.color = "#800080";
});
circle4.addEventListener("click", () => {
    changeBackground("#800080");
    title.style.color = "#ffff00";
});
circle5.addEventListener("click", () => {
    changeBackground("#ff7700");
    title.style.color = "#0000ff";
});
circle6.addEventListener("click", () => {
    changeBackground("#0000ff");
    title.style.color = "#ff7700";
});
circle7.addEventListener("click", () => {
    changeBackground("#ff005d");
    title.style.color = "#000000";
});
circle8.addEventListener("click", () => {
    changeBackground("#000000");
    title.style.color = "#ff005d";
});


const clearBackground = () => {
    changeBackground("");
    title.style.color = "";
}

document.querySelector("#clear")?.addEventListener("click", clearBackground);