function fishTank(input){
let length = Number(input[0]);
let width = Number(input[1]);
let height = Number(input[2]);
let percent = Number(input[3]);

let volume = length * width * height;
let volumeLiter = volume / 1000;
let busy = percent / 100;
let neededLiter = volumeLiter * (1 - busy);
console.log(neededLiter);
}
fishTank(["85", "75", "47", "17"])