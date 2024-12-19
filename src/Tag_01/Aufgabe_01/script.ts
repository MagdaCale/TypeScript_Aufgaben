// Lege  eine Variable dogName an

let dogName = "Leon";

// dogName in der console ausgeben
console.log(dogName);

// weise dann dogName die Zahl 11 zu 
//dogName = 11;

// Fahre mit der Maus ober den unterringelten Variablennamen und schau dir den Fehler an
// Fehler: dogName is of type 'string' but is being assigned a value of type 'number'

dogName = "elf";
console.log(dogName);
//kein Feheler, da der Datentyp der gleiche ist 

// Lege selbständig einige weitere boolean, string und number Variablen an und weise ihnen falsche Datentypen 

let isHappy: boolean = true;
//isHappy = "true";  // Fehler: isHappy is of type 'boolean' but is being assigned a value of type 'string'  
console.log(isHappy);

let catName: string = "Garfield";
//catName = 42;   //Fehler: catName is of type 'string' but is being assigned a value of type 'number'
console.log(catName);

// Lege eine Variable seventeen vom Typ number an ohne ihr einen Wert zuzuweisen
//let seventeen;
//const sum = seventeen + 44;    //"seventeen is not defined"
//console.log(sum);