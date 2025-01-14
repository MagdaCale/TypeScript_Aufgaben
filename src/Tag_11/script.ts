type Bird = {
  englishName: string;
  germanName: string;
  genus: string;
  species: string;
  foodSources: string[];
  wingspan: {
    min: number;
    max: number;
  };
  weight: {
    min: number;
    max: number;
  };
  descriptionGerman: string;
  descriptionEnglish: string;
};

const birds: Bird[] = [
  {
    englishName: "Common Blackbird",
    germanName: "Amsel",
    genus: "Turdus",
    species: "merula",
    foodSources: ["insects", "worms", "berries", "fruits"],
    wingspan: {
      min: 34,
      max: 38,
    },
    weight: {
      min: 80,
      max: 100,
    },
    descriptionGerman:
      "Die Amsel ist ein häufiger Singvogel mit schwarzem Gefieder und gelbem Schnabel bei Männchen, während Weibchen braun sind. Sie ist bekannt für ihren melodischen Gesang und ihre Anpassungsfähigkeit an städtische Umgebungen.",
    descriptionEnglish:
      "The Common Blackbird is a frequent songbird with black plumage and a yellow beak in males, while females are brown. It is known for its melodious song and adaptability to urban environments.",
  },
  {
    englishName: "House Sparrow",
    germanName: "Haussperling",
    genus: "Passer",
    species: "domesticus",
    foodSources: ["seeds", "scraps"],
    wingspan: {
      min: 19,
      max: 25,
    },
    weight: {
      min: 24,
      max: 39,
    },
    descriptionGerman:
      "Der Haussperling ist ein kleiner, geselliger Vogel, der eng mit menschlichen Siedlungen verbunden ist. Männchen haben eine graue Kappe und schwarze Lätzchen, während Weibchen unauffälliger gefärbt sind.",
    descriptionEnglish:
      "The House Sparrow is a small, social bird closely associated with human settlements. Males have a grey cap and black bib, while females are more drab in coloration.",
  },
  {
    englishName: "Great Tit",
    germanName: "Kohlmeise",
    genus: "Parus",
    species: "major",
    foodSources: ["insects", "seeds", "nuts"],
    wingspan: {
      min: 24,
      max: 29,
    },
    weight: {
      min: 14,
      max: 22,
    },
    descriptionGerman:
      "Die Kohlmeise ist an ihrem schwarzen Kopf mit weißen Wangen und dem gelben Bauch mit schwarzem Mittelstreifen leicht zu erkennen. Sie ist für ihren vielfältigen Gesang und ihre Anpassungsfähigkeit bekannt.",
    descriptionEnglish:
      "The Great Tit is easily recognized by its black head with white cheeks and yellow belly with a black central stripe. It is known for its varied song and adaptability.",
  },
  {
    englishName: "Blue Tit",
    germanName: "Blaumeise",
    genus: "Cyanistes",
    species: "caeruleus",
    foodSources: ["insects", "spiders", "seeds"],
    wingspan: {
      min: 18,
      max: 22,
    },
    weight: {
      min: 9,
      max: 12,
    },
    descriptionGerman:
      "Die Blaumeise ist ein kleiner, farbenfroher Vogel mit blauem Kopf, weißen Wangen und gelblicher Unterseite. Sie ist für ihre Akrobatik bei der Nahrungssuche und ihren fröhlichen Gesang bekannt.",
    descriptionEnglish:
      "The Blue Tit is a small, colorful bird with a blue head, white cheeks, and yellowish underparts. It is known for its acrobatics while foraging and its cheerful song.",
  },
  {
    englishName: "European Robin",
    germanName: "Rotkehlchen",
    genus: "Erithacus",
    species: "rubecula",
    foodSources: ["insects", "worms", "berries"],
    wingspan: {
      min: 20,
      max: 22,
    },
    weight: {
      min: 14,
      max: 21,
    },
    descriptionGerman:
      "Das Rotkehlchen ist an seiner orangeroten Brust und Gesicht leicht zu erkennen. Es ist für seinen melodischen Gesang und seine Zutraulichkeit gegenüber Menschen bekannt, besonders im Winter.",
    descriptionEnglish:
      "The European Robin is easily recognized by its orange-red breast and face. It is known for its melodious song and friendliness towards humans, especially in winter.",
  },
];


let birdsWhoEatInsects = []

// for (const bird of birds){
//     if (bird.foodSources.includes('insects')){
//         console.log(`${bird.species} ${bird.genus} eats ${bird.foodSources}`)
//         birdsWhoEatInsects.push(bird)
//     }
// }

for (const bird of birds){
    if (!bird.foodSources.includes('insects')){
        // continue überspring den rest des aktuellen durchlaufs, und macht mit der
        // nächsten Iteration des Loops weiter
        // (in diesem beispiel also mit dem nächsten Vogel)
        continue;
    }
    // console.log(`${bird.species} ${bird.genus} eats ${bird.foodSources}`)
    birdsWhoEatInsects.push(bird)
}
