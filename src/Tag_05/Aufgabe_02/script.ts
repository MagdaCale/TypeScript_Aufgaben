
function getPersonInfo(name: string, city: string, age: number) {
    return `Hallo, mein Name ist ${name}. Ich bin ${age} Jahre alt. Ich komme aus ${city}.`;
}

const showPersonInfoTest = getPersonInfo("Magda", "Hamburg", 35);
console.log(showPersonInfoTest); 
// - Gibt "Hallo, mein Name ist Magda. Ich bin 35 Jahre alt. Ich komme aus Hamburg." aus console.log(showPersonInfo("Magda", Hamburg, 35"));