const randomNum = Math.floor(Math.random() * 10) + 1;   
console.log(randomNum);


function guess (){
    const userGuess = prompt(`Errate die Nummer zwischen 1 und 10:`);
    
    if (userGuess !== null)  {
        // - der eigegebene Wert muss in eine Nummer umgewandelt werden, da der Wert zu erst ein String ist. Ansonsten kann der Vergeich nicht stattfinden
        const promtValue = Number(userGuess);

        if(promtValue === randomNum){
            console.log(`Yeah! ${userGuess} war richtig geraten!`);
        } else {
            console.log("Leider falsch :(");
            // - rekursive funktion -> ruft sich selber auf
            guess()
      }

    }
}

guess()

// let userGuess = Number(prompt(`Errate die Nummer zwischen 1 und 10:`))


// while(randomNum !== userGuess){
    
//     console.log("Leider falsch :(");
//     userGuess = Number(prompt(`Errate die Nummer zwischen 1 und 10:`))
    
// }
// console.log(`Yeah! ${userGuess} war richtig geraten!`);

