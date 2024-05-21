function depositCalculator(input){
    let deposit = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let interestPercent = Number(input[2]);
    let interestDecimal = interestPercent / 100;
    let sum = deposit + depositPeriod * ((deposit  * interestDecimal) / 12);
    console.log(sum);
}
depositCalculator(["200" , "3" , "5.7"]);