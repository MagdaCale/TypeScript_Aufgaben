const namen = ["ruslan", "jenny", "magda", "patrick", "peter", "abdul", "debo", "aylin", "bea", "julia", "david", "yvonne", "kiwi", "stefan"];

const nameGross = namen.map((name) => name.toUpperCase() );
console.log(nameGross);


const grossSortiert = nameGross.sort((a,b)=> a.length - b.length);
console.log(grossSortiert);


// hier werden alle Elemente(Namen) die ein "A" beinhalten rausgefiltert
const kickNameWithoutA = grossSortiert.filter((element) => !element.includes("A"));
// die Elemente (namen) die ein "A" haben, sollen rausfliegen, also wenn "true"
// da es true ist, müssen wir es umdrehen, also mit "!element" 

console.log(kickNameWithoutA);