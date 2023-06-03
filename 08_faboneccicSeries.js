
function fibonecii(n) {
    
    let num1=0, num2=1, nextTerm;

console.log(`fibonacii series : `);
console.log(num1);
console.log(num2);


for (let index = 2; index< n; index++) {
    nextTerm= num1+num2;
    console.log(nextTerm);
    num1=num2
    num2=nextTerm
}

}
fibonecii(10)

  


