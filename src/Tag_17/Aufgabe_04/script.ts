// - Du sollst eine Farbauswahl mit Hilfe von Buttons in einem Online-Shop erstellen.
// - Definiere ein Enum ClothingColor mit dem Farbnamen und der Entsprechung in Hex-Werten.
// - Es gibt diese Farben: Gelb, Orange, Pink, Blau, Lila, und Grau.
// - Suche dir im Internet passende Farbwerte (Hex-Werte) für Gelb, Orange, Pink, Blau, Lila und Grau (z. B. Gelb = #FFFF00).
// - Lege dir ein Array mit allen Farben an: allColors: ClothingColor[]
// - Gehe in einer Schleife das Array durch und erstelle Buttons mit der jeweiligen Farbe als Hintergrundfarbe .


enum ClothingColor {
    gelb = "#FFFF00",
    orange = "#FFA500",
    pink = "#FFC0CB",
    blau = "#0000FF",
    lila = "#800080",
    deeppink = "#FF1493",
}
    
// const allColors: ClothingColor[] = [ClothingColor.gelb, ClothingColor.orange, ClothingColor.pink, ClothingColor.blau, ClothingColor.lila, ClothingColor.grau];
// for (let i = 0; i < allColors.length; i++) {
//     const color = allColors[i]; 
//     const button = document.createElement("button");
//     button.style.backgroundColor = color;    
//     document.body.appendChild(button);
// }


// - Es gibt auch einen kürzeren Weg ohne Array allColors: ClothingColor[].

const flexContainer = document.createElement("div");
flexContainer.style.display = "flex";
flexContainer.style.flexWrap = "wrap"; 
flexContainer.style.gap = "10px"; 
document.body.appendChild(flexContainer);


Object.values(ClothingColor).forEach((color) => {
    const button = document.createElement("button");
    button.style.backgroundColor = color;
    button.style.width = "50px";
    button.style.height = "50px";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.title = `Set background to ${color}`; 


    button.addEventListener("click", () => {
        document.body.style.backgroundColor = color;
    });

    flexContainer.appendChild(button);
});


