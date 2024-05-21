function foodDelivery(input){
let chickenMenu = Number(input[0]);
let fishMenu = Number(input[1]);
let vegMenu = Number(input[2]);

let price = chickenMenu * 10.35 + fishMenu * 12.40 + vegMenu * 8.15;
let dessert = 0.2 * price;
let finalPrice = price + dessert + 2.50;
console.log(finalPrice);
}
foodDelivery(["2", "4", "3"])