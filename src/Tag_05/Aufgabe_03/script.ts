
// - Die Funktion gibt nur Werte in der Konsole aus und gibt keinen Wert zurück. Deshalb ist der Rückgabewert void!!
function showHero (heroName: string, heropower: string, heroEnemy: string) :void {
    const nameOutput = `Mein Lieblingsheld ist ${heroName}. ` 
    const powerOutput = `Er hat die Fähigkeit ${heropower} und `
    const enemyOutput = `Sein größter Gegner ist ${heroEnemy}.`

    console.log(nameOutput + powerOutput + enemyOutput); 
}

showHero("Deadpool", "eine große Klappe zu haben", "Magneto")