// wir koennen stringwerte an enums zuweisen,
// muessen das dann aber auch fuer alle werte tun

enum Wochentage {
  Montag = "Montag",
  Dienstag = "Dienstag",
  Mittwoch = "Mittwoch",
  Donnerstag = "Donnerstag",
  Freitag = "Freitag",
  Samstag = "Samstag",
  Sonntag = "Sonntag",
}

let meinUrlaubstag: Wochentage = Wochentage.Montag;


function messageForUrlaub(tag: Wochentage){
    switch (tag) {
        case Wochentage.Montag: {
          console.log("Hurra, du hast am Montag frei");
          break;
        }
        case Wochentage.Dienstag: {
          console.log("Hurra, du hast am Montag frei");
          break;

        }
        case Wochentage.Mittwoch: {
          console.log("Hurra, du hast am Montag frei");
          break;
        }
        case Wochentage.Donnerstag: {
          console.log("Hurra, du hast am Montag frei");
          break;

        }
        case Wochentage.Freitag: {
          console.log("Hurra, du hast am Montag frei");
          break;

        }
        case Wochentage.Samstag: {
          console.log("Hurra, du hast am Montag frei");
          break;

        }
        case Wochentage.Sonntag: {
          console.log("Hurra, du hast am Montag frei");
          break;
        }
      }
      
}
  
console.log(meinUrlaubstag)
  
enum Wochentage2 {
  Montag = "Montag",
  Dienstag = "Dienstag",
  Mittwoch = "Mittwoch",
  Donnerstag = "Donnerstag",
  Freitag = "Freitag",
  Samstag = "Samstag",
  Sonntag = "Sonntag",
}

const beispielTag = Wochentage2.Montag;

console.log(beispielTag);
console.log(Wochentage2[beispielTag]);