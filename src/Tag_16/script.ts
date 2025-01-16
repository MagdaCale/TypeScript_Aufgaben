import ShopData from "./shopData.ts"


type PriceList = {name: string; price: number}[]

const getCartPriceForShop = (shoppingCart: string[], shopPrices: PriceList ) : number => {
  let total = 0
  shoppingCart.forEach((item) =>{
    const itemPrice = shopPrices.find((el) => (el.name === item))?.price ?? NaN // NOTE: NaN -> wenn der Gesuchte Artikel nicht gefunden wird
    if(isNaN(itemPrice)) {
      console.error(`Artikel "${item}" nicht gefunden`);
      return 0
    }
    total += itemPrice
    })
    return total
}

function comparePrices(shoppingCart: string[]){
  const pricesPerShop = ShopData.map((shop) => {
    const total = getCartPriceForShop(shoppingCart, shop.price)
    return {
      name: shop.shopName,
      total: total
    }
  })
  console.log(pricesPerShop);

}

comparePrices(["Gurken", "Paprika", "Mandelmilch"])
