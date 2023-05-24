console.log(`==========prog for factorial=========`);

function factorialOfNum(num) {

  
if (isNaN(num) || num==null|| num==undefined) {
    console.log(`invalid data ${num} `);
    console.log(`-------------------------------`);
} else {
    if (num==0) {
        console.log(`factorial of 0 is 1 `);
        console.log(`-------------------------------`);
    
    } else {
        var factorial=1
        for (let index =num; index >=1; index--) {
            factorial= factorial*index;
            
           }
           console.log(`factorial of ${num} is :  ${factorial}`);
           console.log(`-------------------------------`);
        }

    }
    
    
}
factorialOfNum(5)
factorialOfNum(3)
factorialOfNum(null)
factorialOfNum(8)
factorialOfNum(undefined)
factorialOfNum(9)
factorialOfNum(0)
factorialOfNum(NaN)
