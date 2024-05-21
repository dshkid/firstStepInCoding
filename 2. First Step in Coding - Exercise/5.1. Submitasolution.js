function submitSolution(input){
let pens = Number(input[0]);
let markers = Number(input[1]);
let cleaner = Number(input[2]);
let percentDisc = Number(input[3]);
let discount = percentDisc / 100;
let price = pens * 5.80 + markers * 7.20 + cleaner * 1.2;
let finalPrice = price - (price * discount);
console.log(finalPrice);
}
submitSolution(["2", "3", "4", "25"])