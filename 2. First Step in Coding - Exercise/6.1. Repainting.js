function repeinting(input){
let nylon = Number(input[0]);
let paint = Number(input[1]);
let thinner = Number(input[2]);
let hours = Number(input[3]);
 
let extraPaint = 0.1 * paint;
let totalPaint = extraPaint + paint;

let totalNylon = nylon + 2; 

let totalMaterial = totalPaint *14.50 + totalNylon * 1.50 + thinner * 5 + 0.40;
let workersPerHour= 0.3 * totalMaterial;
let totalWorkersPay = workersPerHour * hours;
let totalPrice = totalWorkersPay + totalMaterial;
console.log(totalPrice);
}
repeinting(["10", "11", "4", "8"])