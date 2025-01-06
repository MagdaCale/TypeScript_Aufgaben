

const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];
console.log(fahrenheit);



//  const fahrenheitToCelsius: number = fahrenheit.map((fahrenheit) => (fahrenheit - 32) * 5 / 9);
const fahrenheitToCelsius: number[] = fahrenheit.map(temp => parseFloat(((temp - 32) / 1.8).toFixed(2)));

fahrenheit.forEach((temp, index) => {
    console.log(`${temp}°F ist ${fahrenheitToCelsius[index]}°C`);
});


