
import {createProduct} from './produkt/productFunctions';
import {addProductToService} from './produkt/productServiceFunctions';
import {createOrder} from './order/orderFunctions'
import { addOrderToService } from './order/orderServiceFunctions';

console.log("createProduct __________________________");
createProduct("Kaffee", 1.99);
createProduct("Bier", 2.99);
createProduct("Brot", 0.99);

console.log("addProductToService __________________________");
addProductToService("Kaufland", "Kaffee");
addProductToService("Aldi", "Bier");
addProductToService("Edeka", "Brot");

console.log("createOrder __________________________");
createOrder(["Kaffee", "Fritz-Kola", "Spezi"]);
createOrder(["Hafermilch", "Zimt"]);
createOrder(["Eiersalat", "Kartoffelsalat", "Brot"]);

console.log("addOrderToService __________________________");
addOrderToService("Kaufland", "12345");
addOrderToService("Aldi", "67890");
addOrderToService("Edeka", "54321");