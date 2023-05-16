 console.log(` 1 . For maleMarriageEligibility----------`);
var maleMarriageEligibility=function( age,gender,boyName){
var eligibility=gender == "male" && age>= 21 ? `Hey ${boyName} you are eligible for marriage`: `Hey ${boyName} you are not eligible for marriage`;
console.log(eligibility);

}
maleMarriageEligibility(25 ,"male", "billgates");
maleMarriageEligibility(17 ,"male", "Stew jobs");
console.log(`-------------------------------------------------------------`);

console.log(` 2. For femaleMarriageEligibility----------`);
var femaleMarriageEligibility=function (gender, age ,girlName) {
    
    var fEligibility=gender="female"  && age>=18 ?  `Hey ${girlName} you are eligible for marriage`: `Hey ${girlName} you are not eligible for marriage`; 
console.log(fEligibility);

}
femaleMarriageEligibility("female", 16, "jenifer");
femaleMarriageEligibility("female", 27, "Malinda Gates");
