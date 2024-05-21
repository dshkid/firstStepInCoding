function vacationBooksList(input){
let pages = Number(input[0]);
let pagesPerHour = Number(input[1]);
let days = Number(input[2]);
let fullBook = pages / pagesPerHour;
let neccHoursPerDay = fullBook / days;
console.log(neccHoursPerDay); 
}
vacationBooksList(["212", "20", "2"]);