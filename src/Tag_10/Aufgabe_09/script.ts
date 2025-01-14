// - Du hast ein Array aus Zahlen und möchtest herausfinden, durch welche Zahlen sie (außer durch eins und sich selbst) teilbar sind.
// - Schreibe das Ergebnis in dein HTML.


const output = document.querySelector('#ergebnis') as HTMLDivElement;

const numbers: number[] = [5, 22, 15, 100, 55];

numbers.forEach((number) => {
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            const result = number / i;
            output.innerHTML += `<p>${number} is dividable by ${i}. The result is: ${result}</p>`;
        }
    }
});