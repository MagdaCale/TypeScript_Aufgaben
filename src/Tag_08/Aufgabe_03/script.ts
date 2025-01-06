

type Apple = {
    color: string;
    size: string;
    isSweet: boolean
};
  
const redApple: Apple = { color: 'red', size: 'big', isSweet: true };
const greenApple: Apple = { color: 'green', size: 'small',isSweet: false };
const yellowApple: Apple = { color: 'yellow', size: 'big',isSweet: true  };
const apples: Apple[] = [redApple, greenApple, yellowApple];

// - Nutze forEach, um nur die Größen aller Äpfel in der Konsole auszugeben
apples.forEach(apples => console.log(apples.size));

// - Nutze forEach, um die Farbe jedes Apfels auf der Konsole auszugeben
apples.forEach(apples => console.log(apples.color));

// - Verwende den Befehl length, um die Anzahl der Äpfel auszugeben
const appleLength: number = apples.length;
console.log(appleLength);

// - Erstelle selbst ein Objekt pinkApple vom Typ Apple und pushe es in das apples-Array
const pinkApple: Apple = { color: 'pink', size: 'small', isSweet: true  };
apples.push(pinkApple)
console.log(apples);


// - Füge eine neue Eigenschaft isSweet vom Typ boolean zum Typ Apple hinzu
// - Schau dir die Fehlermeldungen an und füge bei jedem Apple-Objekt die Eigenschaft isSweet hinzu

const allApples: Apple[] = [redApple, greenApple, yellowApple, pinkApple];

console.table(allApples);
