function basketballEquipment(input){
let taxPerYear = Number(input[0]);

let shoes = 0.4 * taxPerYear;
let shoePrice = taxPerYear - shoes;
let clothes = 0.2 * shoePrice;
let clothesPrice = shoePrice - clothes;
let ball = clothesPrice / 4;
let accessories = ball / 5;
console.log(taxPerYear + shoePrice + clothesPrice + ball + accessories);
}
basketballEquipment(["365"])