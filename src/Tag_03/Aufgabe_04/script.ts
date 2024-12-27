// - Lass dir folgende Variablen mit zufälligen boolean-Werten befüllen
//     - isOnline
//     - isPremiumUser
//     - isAdult


// - Folgende Logik soll über den Ternary Operator umgesetzt werden
//     - Wenn isOnline true ist, soll ‘online’ auf der Konsole ausgegeben werden, sonst ‘offline’
//     - Wenn isPremiumUser true ist, soll eine neue Variable monthlyFee (number) auf 19.99 gesetzt werden, ansonsten auf 12.99
//     - Wenn isAdult false ist soll ein window.alert ausgeben werden “Keine Berechtigung” ansonsten ein window.confirm “Willkommen”


const isOnline = (Math.random() > 0.7 ) ? 'online' : 'offline'
// * isOnline = true (wenn die Zufallszahl > 0.7): 30% Wahrscheinlichkeit.
// * isOnline = false (wenn die Zufallszahl ≤ 0.7): 70% Wahrscheinlichkeit.

console.log(isOnline );

const isPremiumUser = Math.random() > 0.4  

const monthlyFee = isPremiumUser ? 19.99 : 12.99;
console.log(monthlyFee);

const isAdult = Math.random() > 0.5
console.log(isAdult ? window.alert('Keine Berechtigung') : window.confirm('Willkommen'));


// - Lass dir folgende Variablen mit zufälligen Werten befüllen
//- randomAge (zwischen 0 und 120)

const randomAge = Math.floor(Math.random() * 121 );
console.log(randomAge);

//- Wenn randomAge zwischen 40 und 65 liegt soll eine neue Variable isMiddleAged auf true gesetzt werden ansonsten auf false → gib isMiddleAged auf der Konsole aus
const isMiddleAged = randomAge >= 40 && randomAge <= 65;
console.log(isMiddleAged);

//- randomSalary (zwischen 0 und 15000)
const randomSalary = Math.floor(Math.random() * 15001);
console.log(randomSalary);

//- Wenn randomSalary > 10000 ist, soll auf der Konsole “You are rich” ausgeben werden, wenn
//-randomSalary > 1500 ist “Not too bad” ansonsten “Not that much”

const poorOrRich = randomSalary > 10000 
? "You are rich 🤑"
: randomSalary > 1500 
? "Not too bad 🙌" 
: "Not that much 😒"
console.log(poorOrRich);


