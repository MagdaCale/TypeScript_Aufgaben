
const myInformation2 = (vorname: string, nachname: string, geburtsort: string, alter: number,wohnort: string): void => {
    console.log(`Mein Name ist ${vorname} ${nachname} und ich bin in ${geburtsort} geboren. Ich bin ${alter} und lebe in ${wohnort}`);

    console.log(`Mein Name ist ${vorname} ${nachname} 
    und ich bin in ${geburtsort} geboren. 
    Ich bin ${alter} und lebe in ${wohnort}`);
};

myInformation2("Magda", "C.", "Zagreb", 35, "Hamburg");
