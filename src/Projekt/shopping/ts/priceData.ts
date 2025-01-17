export type PriceList = {name: string, price: number}[]


const preiseKaufland: PriceList = [
    {
      name: "gurken",
      price: 13.97,
    },
    {
      name: "paprika",
      price: 13.33,
    },
    {
      name: "tofu",
      price: 16.88,
    },
    {
      name: "klopapier",
      price: 1.54,
    },
    {
      name: "leinöl",
      price: 6.64,
    },
    {
      name: "mandelmilch",
      price: 18.04,
    },
    {
      name: "waldhonig",
      price: 19.41,
    },
    {
      name: "zahnseide",
      price: 4.24,
    },
    {
      name: "kaffee",
      price: 15.72,
    },
    {
      name: "tee",
      price: 4.53,
    },
    {
      name: "blaubeeren",
      price: 13.33,
    },
    { name: "ibuprofen 400", price: 10 },
  ];
  
  export const preiseRewe: PriceList = [
    {
      name: "gurken",
      price: 7.82,
    },
    {
      name: "paprika",
      price: 11.45,
    },
    {
      name: "tofu",
      price: 3.29,
    },
    {
      name: "klopapier",
      price: 5.67,
    },
    {
      name: "leinöl",
      price: 18.93,
    },
    {
      name: "mandelmilch",
      price: 9.21,
    },
    {
      name: "waldhonig",
      price: 14.76,
    },
    {
      name: "zahnseide",
      price: 2.08,
    },
    {
      name: "kaffee",
      price: 16.54,
    },
    {
      name: "tee",
      price: 8.39,
    },
    {
      name: "blaubeeren",
      price: 12.17,
    },
    { name: "ibuprofen 400", price: 12 },
  ];
  

  // named export, da der wert unter dem Namen preiseLidl exportiert wird
  export const preiseLidl: PriceList = [
    {
      name: "gurken",
      price: 8.76,
    },
    {
      name: "paprika",
      price: 15.29,
    },
    {
      name: "tofu",
      price: 10.42,
    },
    {
      name: "klopapier",
      price: 3.18,
    },
    {
      name: "leinöl",
      price: 17.95,
    },
    {
      name: "mandelmilch",
      price: 5.63,
    },
    {
      name: "waldhonig",
      price: 12.87,
    },
    {
      name: "zahnseide",
      price: 2.09,
    },
    {
      name: "kaffee",
      price: 19.54,
    },
    {
      name: "tee",
      price: 7.31,
    },
    {
      name: "blaubeeren",
      price: 14.02,
    },
    { name: "ibuprofen 400", price: 8 },
  ];
  
  
 const allShopData = [{
    shopName: "Kaufland",
    prices: preiseKaufland
  }, {
    shopName: "Rewe",
    prices: preiseRewe
  }, {
    shopName: "Lidl",
    prices: preiseLidl
  }]

  
// es darf nur einen default export pro datei geben
export default allShopData