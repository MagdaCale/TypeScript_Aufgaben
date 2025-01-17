
// - Definiere ein Enum PizzaSize mit den Größen Small, Medium, Large, Familie
enum PizzaSize {
    Small = 'Small',
    Medium = 'Medium',
    Large = 'Large',
    Familie = 'Familie'
}

// - Definiere ein weiteres Enum PizzaIngredients mit Werten wie Cheese, Onion, Salami - werde selbst kreativ und denke dir weitere Zutaten aus
enum PizzaIngredients {
    Cheese = 'Cheese',
    Onion = 'Onion',
    Salami = 'Salami'
}
// - Lege eine Typ Pizza mit den Eigenschaften size: PizzaSize und ingredients: PizzaIngredients[] an
interface Pizza {
    size: PizzaSize;
    ingredients: PizzaIngredients[] 
}

const pizza1: Pizza = {
    size: PizzaSize.Small,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Onion]
}

const pizza2: Pizza = {
    size: PizzaSize.Medium,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Onion, PizzaIngredients.Salami]
}

const pizza3: Pizza = {
    size: PizzaSize.Large,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Onion, PizzaIngredients.Salami]
}

const pizza4: Pizza = {
    size: PizzaSize.Familie,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Onion, PizzaIngredients.Salami]
}


// - Lege 4 Pizza-Objekte mit verschiedenen Größen und Belägen an

const pizzas: Pizza[] = [pizza1, pizza2, pizza3, pizza4];
for (const pizza of pizzas) {

    console.log(`Pizza ${pizza.size}: ${pizza.ingredients.join(', ')}`)
}