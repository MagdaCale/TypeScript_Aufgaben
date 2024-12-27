// - ernziel: Verwendung der Library [date-fns](https://date-fns.org/docs/Getting-Started)
// - Installiere dir mit npm i date-fns die Bibliothek in deinem Projekt
// - Lege zwei Datumsvariablen an: 01.01.1970 und jetzt
// - Nutze die Funktionen differenceInYears, …Hours, …Seconds
    
//     → Lass dir jeweils den Unterschied für die beiden Datumswerte auf der Konsole ausgeben
    
// - Lege eine weitere Variable myBirthday an Berechne mit date-fns dein aktuelles Alter und dein Alter am 07.04.2007
// - Nutze Format um Informationen zu deinem Geburtstag in folgender Weise auszugeben

// "20.12.1979 12:40:00"
// "20.12.1979 12:40"
// "20.12.79"
// "20. Dezember 1979"
// "12:40"
// "Donnerstag"
// "Dezember"
// "20 des Dezember im Jahre des Herrn 1979"

import { format, differenceInYears, differenceInHours, differenceInSeconds } from 'date-fns';
import { de } from 'date-fns/locale';
// - https://date-fns.org/v4.1.0/docs/I18n

// - Lege zwei Datumsvariablen an: 01.01.1970 und jetzt
const date1 = new Date(1970, 0, 1); 
const now = new Date(); 

// - Nutze die Funktionen differenceInYears, …Hours, …Seconds
const differenz1 = differenceInYears(now, date1);
const differenz2 = differenceInHours(now, date1);
const differenz3 = differenceInSeconds(now, date1);

console.log(`Differenz in Jahren: ${differenz1}`);
console.log(`Differenz in Stunden: ${differenz2}`);
console.log(`Differenz in Sekunden: ${differenz3}`);

// - Geburtstag und Alter an einem bestimmten Tag
const meinGeb = new Date(1989, 11, 30, 11, 40);
const gebAmTag = new Date(2007, 3, 7);

// - Lege eine weitere Variable myBirthday an Berechne mit date-fns dein aktuelles Alter und dein Alter am 07.04.2007
const alterJetzt = differenceInYears(now, meinGeb);
const alterAmTag = differenceInYears(gebAmTag, meinGeb);

console.log(`Aktuelles Alter: ${alterJetzt}`);
console.log(`Alter am 07.04.2007: ${alterAmTag}`);


console.log(format(meinGeb, 'dd.MM.yyyy HH:mm:ss'));
console.log(format(meinGeb, 'dd.MM.yyyy HH:mm'));
console.log(format(meinGeb, 'dd.MM.yy'));
console.log(format(meinGeb, 'dd. MMMM yyyy'));
console.log(format(meinGeb, 'HH:mm' , {locale: de}));
console.log(format(meinGeb, 'EEEE' , {locale: de}))
console.log(format(meinGeb, 'MMMM' , {locale: de}));
console.log(format(meinGeb, "dd 'des' MMMM 'im Jahre des Wurms' yyyy"));

