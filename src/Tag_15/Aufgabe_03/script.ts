
// import {createProduct} from './produkt/productFunctions';
// import {addProductToService} from './produkt/productServiceFunctions';
// import {createOrder} from './order/orderFunctions'
// import { addOrderToService } from './order/orderServiceFunctions';


import { createOrder, addOrderToService } from './order'; 
import { createProduct, addProductToService } from './produkt';

createProduct("Kaffee", 1.99);
console.log("__________________________");


addProductToService("Kaufland", "Kaffee");
console.log("__________________________");


createOrder(["Kaffee", "Fritz-Kola", "Spezi"]);
console.log("__________________________");


addOrderToService("Kaufland", "12345");
