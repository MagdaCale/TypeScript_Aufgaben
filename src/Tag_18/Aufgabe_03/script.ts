// Definiere den Typ Monster
type Killer = {
    name: string;
    type: string;
    health: number;
    strength: number;
    speed: number;
};

function deadByDaylightKiller(name: string, type: string, health: number = 100, strength: number = 50, speed: number = 25): Killer {
    return { name, type, health, strength, speed };
}

const killer1 = deadByDaylightKiller("The Trapper", "Brute"); 
const killer2 = deadByDaylightKiller("The Wraith", "Stealth", 90); 
const killer3 = deadByDaylightKiller("The Huntress", "Ranged", 80, 60); 
const killer4 = deadByDaylightKiller("The Nurse", "Supernatural", 70, 75, 50); 

console.log(killer1);
console.log(killer2);
console.log(killer3);
console.log(killer4);