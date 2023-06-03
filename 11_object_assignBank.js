
let sbiBank={

    bankName :"SBI bank",
    location: "pune",
    accountNo: "12345678900",
    ifsc:"SBI016218",
    interestRate:"8.2",
    showDetails: function() {
        console.log(` Bank Details :  bankName:  ${this.bankName}, location: ${this.location},  accountNo: ${this.accountNo},ifsc: ${this.ifsc}, interestRate: ${this.interestRate}`);


}
}
sbiBank.showDetails()

let axisBank={
    bankName :"Axis bank",
    location: "nanded",
    accountNo: "120056789",
    ifsc:"AXI016218",
    interestRate:"8.3",
    showDetails: function() {
        console.log(` Bank Details :  bankName:  ${this.bankName}, location: ${this.location},  accountNo: ${this.accountNo},ifsc: ${this.ifsc}, interestRate: ${this.interestRate}`);
    
}
}
axisBank.showDetails()

let hdfcBank={
    bankName :"HDFC bank",
    location: "Mumbai",
    accountNo: "12345006789",
    ifsc:"HDFC01621",
    interestRate:"8.4",
    showDetails: function() {
        console.log(` Bank Details :  bankName:  ${this.bankName}, location: ${this.location},  accountNo: ${this.accountNo},ifsc: ${this.ifsc}, interestRate: ${this.interestRate}`);
    
}
}
hdfcBank.showDetails()

let yesBank={
    bankName :"YES bank",
    location: "Benglore",
    accountNo: "12345670089",
    ifsc:"YES016218",
    interestRate:"8.5",
    showDetails: function() {
        console.log(` Bank Details :  bankName:  ${this.bankName}, location: ${this.location},  accountNo: ${this.accountNo},ifsc: ${this.ifsc}, interestRate: ${this.interestRate}`);
    }
}

yesBank.showDetails()