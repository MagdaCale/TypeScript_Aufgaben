// Original-String
const whereIsSusi = 'Susi is back from codingschool';

// Ergebnisse mit substring() extrahieren
const susi = whereIsSusi.substring(0, 4); 
const is = whereIsSusi.substring(5, 7); 
const school = whereIsSusi.substring(24, 30); 
const susiIsSchool = susi + " " + is + " " + school;

// Ergebnisse mit document.write() anzeigen
document.write(`<p>${susi}</p>`); // Susi
document.write(`<p>${is}</p>`); // is
document.write(`<p>${school}</p>`); // school
document.write(`<p>${susiIsSchool}</p>`); // Susi is school