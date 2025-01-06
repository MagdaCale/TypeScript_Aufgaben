const ausgabe = document.querySelector("#ausgabe") as HTMLParagraphElement;
const ausgabe2 = document.querySelector("#ausgabe2") as HTMLParagraphElement;


const piraten = [
    "Blackbeard",
    "Anne Bonny",
    "Captain Kidd",
    "Jack Sparrow",
    "Bartholomew Roberts",
    "James Flint",
    "Edward England",
    "Long John Silver",
    "Captain Hook",
    "Mary Read"
]

console.table(piraten);


console.log(piraten.includes("Blackbeard"));
console.log(piraten.includes("Blackbear"));
console.log(piraten.includes("blackbear"));

piraten.includes("blackbeard") 

const findePirat = (name: string) => {
    if(piraten.join(" ").toUpperCase().includes(name.toUpperCase())){
        console.log(`Pirat "${name}" gefunden`);
        ausgabe.innerHTML = `Pirat <span>${name}</span> gefunden`
    } else {
        console.log(`Pirat "${name}" nicht gefunden`);
        ausgabe2.innerHTML = `Pirat <span>${name}</span> nicht gefunden`
    }
}

findePirat("blackbeard")
findePirat("blaceard")
findePirat("james flint")