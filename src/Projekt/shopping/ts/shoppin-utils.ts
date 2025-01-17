// mit import {...} können wir benannte exporte importieren
// mit "as" koennen wir imports umbenennen
// import {preiseLidl, preiseRewe as preisListeRewe} from './priceData.ts'

// prinzipiell moeglich: nur Typen importieren mit speziellem Keyword
// import { add } from 'date-fns';
import type { PriceList } from './priceData.ts';

// ohne {} importieren wir immer den default export, falls vorhanden
// diesen duerfen wir nennen wie wir wollen
import shopData from './priceData.ts'

// import {stuff} from '../main.ts'

// import * as allTheThings from './priceData.ts'
// hiermit koennten wir in einem objekt alles abholen was aus der anderen datei exportiert wird



// import shopData, {preiseLidl, preiseRewe} from "./priceData";
// wir koennen auch benannte und default export in einer zeile importieren

enum ShopStatus {
  Available = "",
  Unavailable = "",
  Cheapest = "",
}

export type ComparisonResults = {
  name: string;
  total: number;
}[]


function getCartPriceForShop(shoppingCart: string[], shopPrices: PriceList): number{
  let total = 0
  // fuer jedes item im shopping cart suchen wir nach dessen Preis
  shoppingCart.forEach((item) => {
      // wir suchen hier nach dem element aus dem preis-Array, das unter dem key "name" den gleichen wert hat wie unser aktuelles item
      // (el.name === item)
      // dann nehmen wir dessen .price
      // sollte kein element gefunden worden sein, waere das ergebnis undefined.
      // "?? 0" wandelt dieses undefined zur 0 um, so dass wir auf jeden fall eine zahl zurueckkriegen
      const itemPrice = shopPrices.find((el) => el.name === item)?.price ?? NaN;

      if (isNaN(itemPrice)){
        console.error(item + " gibts nicht bei "+ "shopname")
      }
      total += itemPrice
  });
  return total
}


export function comparePrices(shoppingCart: string[]): ComparisonResults {
  // wir erhalten als shoppingCart einen array aus strings, die jeweils items auf unserer einkaufsliste repraesentieren sollen
  // via .map rufen wir "getCartPriceForShop" fuer jeden shop auf, um den jeweiligen preis zu erhalten
  const pricesPerShop = shopData.map(function (shop) {
    const total = getCartPriceForShop(shoppingCart, shop.prices);
    // wir returnen nicht nur die gesamtsumme, sondern auch den namen des jeweiligen shops
    // (sonst bekaemen wir nur einen array mit drei zahlen, und wuessten nicht zu welchem shop diese gehoeren)
    return {
      name: shop.shopName,
      total: total,
      status: isNaN(total) ? ShopStatus.Available :ShopStatus.Available
    };
  });
  console.log(pricesPerShop);
  return pricesPerShop;
}


