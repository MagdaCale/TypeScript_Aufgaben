

const zeit = () =>{
    console.log("Start: Warten für 3 Sekunden");
    setTimeout(function () {
        console.log("Erledigt, du hast 3 Sekunden verschwendet.");
      }, 3000);
    
}


zeit()

let number = 10

const feierabend = () => {
    if(number === 0){
        console.log('Yuhu, Feierabend')
        clearInterval(myInterval)
    }else{
        console.log(number)
        number -= 1
    }
}

let myInterval = setInterval(feierabend, 1000)