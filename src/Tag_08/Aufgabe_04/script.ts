


type Pet = {
    tiertyp: string;
    namen: string[];
};
  
const unsereHaustiere: Pet[] = [
    {
      tiertyp: 'Katze',
      namen: ['Gipsy', 'Nala', 'Dinky']
    },
    {
      tiertyp: 'Hunde',
      namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
    }
];

// - Greife auf die Werte "Nala" und "Droopy" in diesem Array von Objekten zu und lasse sie dir auf der Konsole ausgeben.
console.log(unsereHaustiere[0].namen[1]);
console.log(unsereHaustiere[1].namen[2]);

// - Lasse dir einmal alle Hundenamen anzeigen.
console.log(unsereHaustiere[1].namen);


// const changePetName = (pet: Pet) => {
//     const Pinky = 'Pinky';
//     pet.namen[2] =  Pinky
// };

// changePetName(unsereHaustiere[0]);
// console.log(unsereHaustiere[0].namen); 

    
// - Ändere folgende Werte:
//     - Droopy in Snoppy
//     - Dinky in Pinky

const changePetName = (pet: Pet, neuerName: string) => {
    pet.namen[2] = neuerName; // Ändert den dritten Namen zu "neuerName" also der, der in changePetName("xyz)" angegeben wird
};

changePetName(unsereHaustiere[0], 'Pinky'); 
changePetName(unsereHaustiere[1], 'Snoopy'); 

console.log(unsereHaustiere[0].namen); 
console.log(unsereHaustiere[1].namen);


// - Erstelle ein weiteres Objekt vom Typ Pet, z. B. Hamster
// - Füge das Objekt im Array hinzu
const hamster = {tiertyp: 'Hamster',namen: ['Kid', 'Killer', 'Haks'] }

unsereHaustiere.push(hamster);
console.log(unsereHaustiere);