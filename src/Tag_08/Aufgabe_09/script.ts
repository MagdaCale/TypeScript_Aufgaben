const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const even = zahlen.filter((num) => num % 2 === 0)
// const odds = zahlen.filter((num) => num % 2 === 1);

// console.log(even);
// console.log(odds);


function printEvenNumbers () {   
    const even = zahlen.filter((num) => num % 2 === 0)
    console.log(even);
}

printEvenNumbers()

function printOddNumbers () {   
    const odds = zahlen.filter((num) => num % 2 === 1);
    console.log(odds);
}

printOddNumbers()

