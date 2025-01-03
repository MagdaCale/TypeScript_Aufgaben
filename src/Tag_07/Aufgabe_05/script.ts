
const ausgabe = document.querySelector("div") as HTMLDivElement;



const drinks = ['fritz-kola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta']

const upperDrinks = drinks.map((drink) => drink.toUpperCase())

if(ausgabe !== null){
    ausgabe.innerHTML = `
        <p>I like <span>${upperDrinks[2]}</span></p>
        <p>I like <span>${upperDrinks[4]}</span></p>
        <p>I like <span>${upperDrinks[7]}</span></p>
        <p>I like <span>${upperDrinks[0]}</span></p>
    `
     
}

