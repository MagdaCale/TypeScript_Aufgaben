import { comparePrices, ComparisonResults } from "./shoppin-utils";




const submitBtn = document.querySelector("#submit-btn") 

const searchInput = document.querySelector<HTMLInputElement>("#search") 
const productList = document.querySelector<HTMLUListElement>("#product-list");

const resultsArea = document.querySelector<HTMLDivElement>("#result-area");


const selectedProduct: string[] = []

const addProductToCart = (productName: string) => {
  selectedProduct.push(productName)

  const productItemList = document.createElement("li");
  productItemList.textContent = productName;
  
  const closeButton = document.createElement("span");
  closeButton.textContent = "x";
  closeButton.classList.add("close");

  // Event-Listener für den "x"-Button
  closeButton.addEventListener("click", () => {
    productList?.removeChild(productItemList);
    const index = selectedProduct.indexOf(productName);
    if (index > -1) {
      selectedProduct.splice(index, 1); // Produkt aus dem Array entfernen
    }
  });

  productItemList.appendChild(closeButton);
  // Element zur Liste hinzufügen
  productList?.appendChild(productItemList);
   // neue summe pro shop berechnen
   const results = comparePrices(selectedProduct);
   displayResults(results);
  
}

function displayResults(results: ComparisonResults) {
  if (resultsArea) {
    resultsArea.innerHTML = "";

    results.forEach((result) => {
      // PriceBox erstellen
      const priceBox = document.createElement("div");
      priceBox.classList.add("price-box"); 

      priceBox.innerHTML = `
        <p>Preis bei ${result.name}</p>
        <p>${result.total.toFixed(2)} Euro</p>`;

      resultsArea.appendChild(priceBox);
    });

  }else {
    console.warn("Kein Produkt eingegeben!");
  }
}




// produkt wird hinzugefügt bzw. ausgelesen
submitBtn?.addEventListener("click", (event) => {
  event.preventDefault()
  
  
  if (searchInput) {
    const imputValue = searchInput.value
    selectedProduct.push(imputValue)
    addProductToCart(imputValue)
    searchInput.value = "";
  }else {
    console.warn("Kein Produkt eingegeben!");
  }
})
