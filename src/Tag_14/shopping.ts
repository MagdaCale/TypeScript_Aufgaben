const preiseKaufland = [
    {
      "name": "Gurken",
      "price": 1.50
    },
    {
      "name": "Paprika",
      "price": 2.00
    },
    {
      "name": "Mandelmilch",
      "price": 2.99
    },
    {
      "name": "Leinöl",
      "price": 4.50
    },
    {
      "name": "Waldhonig",
      "price": 6.00
    },
    {
      "name": "Kaffee",
      "price": 5.99
    },
    {
      "name": "Tofu",
      "price": 2.50
    },
    {
      "name": "Blaubeeren",
      "price": 3.00
    },
    {
      "name": "Zahnseide",
      "price": 1.99
    }
]

// const preiseRewe = [
//     {
//       "name": "Gurken",
//       "price": 7.14
//     },
//     {
//       "name": "Paprika",
//       "price": 3.4
//     },
//     {
//       "name": "Mandelmilch",
//       "price": 3.92
//     },
//     {
//       "name": "Leinöl",
//       "price": 6.66
//     },
//     {
//       "name": "Waldhonig",
//       "price": 2.77
//     },
//     {
//       "name": "Kaffee",
//       "price": 3.58
//     },
//     {
//       "name": "Tofu",
//       "price": 2.35
//     },
//     {
//       "name": "Blaubeeren",
//       "price": 4.12
//     },
//     {
//       "name": "Zahnseide",
//       "price": 5.05
//     }
// ]

// const preiseLidl = [
//     {
//       "name": "Gurken",
//       "price": 6.13
//     },
//     {
//       "name": "Paprika",
//       "price": 6.64
//     },
//     {
//       "name": "Mandelmilch",
//       "price": 5.97
//     },
//     {
//       "name": "Leinöl",
//       "price": 4.04
//     },
//     {
//       "name": "Waldhonig",
//       "price": 4.51
//     },
//     {
//       "name": "Kaffee",
//       "price": 3.61
//     },
//     {
//       "name": "Tofu",
//       "price": 4.38
//     },
//     {
//       "name": "Blaubeeren",
//       "price": 7.31
//     },
//     {
//       "name": "Zahnseide",
//       "price": 7.54
//     }
// ]



function comparePrices(shoppingCart: string[]){
   
    // const allPrices = [...preiseKaufland, ...preiseRewe, ...preiseLidl]
    // console.log(allPrices);

    const allPricesBeiKaufland = shoppingCart.map((item) =>{
        const priceBeiKaufland = 
            preiseKaufland.find((el) => (el.name === item))?.price ?? 0
                return priceBeiKaufland // vorher war allPricesBeiKaufland void. Mit dem return bekommen wir einen wert zurück. der wert ist: number
    })
    console.log(allPricesBeiKaufland);

}

comparePrices(["Gurken", "Paprika", "Mandelmilch"])