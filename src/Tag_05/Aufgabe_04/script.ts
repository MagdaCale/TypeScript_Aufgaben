function multiplyAndDivide(a: number, b: number): void {
    if (a === 0 || b === 0) {
        console.log("Division durch 0 nicht erlaubt");
        return; // - Funktion wird beendet, wenn a oder b agleich 0 ist
    }

    const multiply = "Multiplikation von " + a + " und " + b + " ist: " + (a * b);
    const divide = "Division von " + a + " und " + b + " ist: " + (a / b);
    
    console.log(multiply);
    console.log(divide);
}


multiplyAndDivide(10, 2); 
multiplyAndDivide(30, 20); 

multiplyAndDivide(100, 100); 
multiplyAndDivide(5, 0); 

multiplyAndDivide(45, 173); 
multiplyAndDivide(1, 1000); 

