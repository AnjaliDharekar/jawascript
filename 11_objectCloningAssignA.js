let Bank_sbi={

    bankName :"SBI bank",
    accountNo: "12345678900",
    ifsc:"SBI016218",
    interestRate:"8.2",

}
 let bank_location={
    street: "old kawtha",
    city:"Nanded",
    pin_code:"431603" ,
    
 }
 Object.assign(Bank_sbi,bank_location)
 console.table(Bank_sbi);
 console.table(bank_location);

 let rate_of_interest={
    home_loan_interest:8.5,
    personal_loan_interest:15,
    due_interest:3.5,

    
 }
 console.log("--------- merging Object -----------");
 bankDetails={


 }
 const mergedObject = Object.assign({ },Bank_sbi, bank_location,rate_of_interest);
 console.table(mergedObject);

 console.log("--------- Traversing an Object -----------");

for (const key in mergedObject) {
    if (Object.hasOwnProperty.call(mergedObject, key)) {
        const element = mergedObject[key];
        console.log(`${key}, ${ element}`);
    }
}