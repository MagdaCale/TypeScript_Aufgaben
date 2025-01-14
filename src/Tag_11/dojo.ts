const participants: {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
}[] = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Schweiz",
    continent: "Europa",
    age: 19,
    language: "JavaScript",
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Ozeanien",
    age: 28,
    language: "Python",
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "China",
    continent: "Asien",
    age: 35,
    language: "Ruby",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Ägypten",
    continent: "Afrika",
    age: 30,
    language: "C#",
  },
  {
    firstName: "Bobby",
    lastName: "B.",
    country: "Vereinigte Staaten",
    continent: "Nordamerika",
    age: 25,
    language: "Java",
  },
  {
    firstName: "Giovanni",
    lastName: "R.",
    country: "Italien",
    continent: "Europa",
    age: 42,
    language: "C++",
  },
  {
    firstName: "Samantha",
    lastName: "W.",
    country: "Australien",
    continent: "Ozeanien",
    age: 31,
    language: "Swift",
  },
  {
    firstName: "Hans",
    lastName: "G.",
    country: "Deutschland",
    continent: "Europa",
    age: 50,
    language: "PHP",
  },
  {
    firstName: "Sofia",
    lastName: "C.",
    country: "Argentinien",
    continent: "Südamerika",
    age: 23,
    language: "JavaScript",
  },
  {
    firstName: "Yuki",
    lastName: "T.",
    country: "Japan",
    continent: "Asien",
    age: 27,
    language: "Python",
  },
  {
    firstName: "Lukas",
    lastName: "K.",
    country: "Österreich",
    continent: "Europa",
    age: 33,
    language: "Ruby",
  },
  {
    firstName: "Isabella",
    lastName: "S.",
    country: "Brasilien",
    continent: "Südamerika",
    age: 29,
    language: "Java",
  },
  {
    firstName: "Maximilian",
    lastName: "H.",
    country: "Schweiz",
    continent: "Europa",
    age: 37,
    language: "C#",
  },
  {
    firstName: "Léa",
    lastName: "D.",
    country: "Frankreich",
    continent: "Europa",
    age: 26,
    language: "Java",
  },
  {
    firstName: "Ravi",
    lastName: "K.",
    country: "Indien",
    continent: "Asien",
    age: 32,
    language: "Python",
  },
  {
    firstName: "Emma",
    lastName: "L.",
    country: "Kanada",
    continent: "Nordamerika",
    age: 24,
    language: "JavaScript",
  },
  {
    firstName: "Finn",
    lastName: "S.",
    country: "Norwegen",
    continent: "Europa",
    age: 31,
    language: "Swift",
  },
  {
    firstName: "Eva",
    lastName: "B.",
    country: "Schweden",
    continent: "Europa",
    age: 29,
    language: "PHP",
  },
  {
    firstName: "Lucas",
    lastName: "G.",
    country: "Spanien",
    continent: "Europa",
    age: 27,
    language: "JavaScript",
  },
  {
    firstName: "Lena",
    lastName: "W.",
    country: "Deutschland",
    continent: "Europa",
    age: 36,
    language: "Python",
  },
];

// * Wie viele Personen können JavaScript?
const peopleCountJS: number = participants.filter(function (participant) {
  return participant.language === "JavaScript";
}).length;
console.log("So viele Leute können JS:", peopleCountJS);

// * Wie viele Personen sind nicht aus Europa?
const nonEuropeans: number = participants.filter(function (participant) {
  return participant.continent !== "Europa";
}).length;
console.log("So viele Personen sind nicht aus Europa:", nonEuropeans);

// * Gibt es mehr als 3 Personen, die Java können?
const peopleJava: boolean =
  participants.filter(function (participant) {
    return participant.language === "Java";
  }).length > 3;
console.log(peopleJava, "Es gibt nicht mehr als 3 Personen, die Java können");

// * Wie ist das Durchschnittsalter aller Personen im Array?
// 	- mit for-Schleife

let sumAge = 0;
for (let i = 0; i < participants.length; i++) {
  sumAge += participants[i].age;
}
const nameDurchschnitt = sumAge / participants.length;
console.log(nameDurchschnitt.toFixed(2));
// 	- mit while-Schleife
let index = 0;
let sumAgeWhile = 0;

while (index < participants.length) {
  sumAgeWhile += participants[index].age;
  index++;
}

const durchschnittWhile = sumAgeWhile / participants.length;
console.log(durchschnittWhile.toFixed(2));

// 	- mit forEach-Schleife
let sumFE = 0;
participants.forEach((person) => (sumFE += person.age));
const avg = sumFE / participants.length;
console.log(avg.toFixed(2));

// * Alle Kontinente (ohne Doppelnennungen)

const continents = Array.from(
  new Set(participants.map((person) => person.continent))
);
console.log(continents);

// * Ein neues Array mit allen Vornamen
let vorname = participants.map(participant => participant.firstName)
console.log(vorname)

// * Alle Personen die älter als 30 Jahre sind (Vor- und Nachname)
