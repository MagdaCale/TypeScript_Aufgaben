const farbenValue = document.querySelector("#farbe") as HTMLInputElement
const button = document.querySelector("#click") as HTMLButtonElement


function color(){

    const farbe: string = farbenValue.value
    
    switch (farbe) { // Bedingung
        case "blau":
            console.log("Wie der Himmel");
            break;
        case "gelb":
            console.log("Wie die Sonne");
            break;
        case "rot":
            console.log("Wie ein Warnschild");
            break;
        default:
            console.log("Farbe nicht dabei");
            break;
    }
    
}


button.onclick = color