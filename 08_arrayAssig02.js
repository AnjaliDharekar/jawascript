console.log(`========1. find length of array======`);
const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
console.log( arrayNumber);
var lengthOfArray=arrayNumber.length
console.log(`length of array is : ${lengthOfArray}`);
console.log(`------------------------------------------------------`);
console.log(`========2. first and last element of array======`);
const firstElement=arrayNumber[0]
console.log(`first element is : ${firstElement}`);
lastElement=arrayNumber[arrayNumber.length-1]
console.log(`last element is : ${lastElement}`);
console.log(`------------------------------------------------------`);
console.log(`========3. third last last element using length property======`);
thirdLast=arrayNumber[arrayNumber.length-3]
console.log(`third last element is : ${thirdLast}`);
console.log(`------------------------------------------------------`);
console.log(`======4. find all even no. using for in loop======`);
console.log(arrayNumber);
for (const index in arrayNumber) {
if ((arrayNumber[index]%2)==0) {
    console.log(`even number: ${arrayNumber[index]}`);
}
        
    }
    console.log(`------------------------------------------------------`);
    console.log(`======5. find all odd no. using for in loop======`);

    console.log(arrayNumber);
    for (const index in arrayNumber) {
    if ((arrayNumber[index]%2)!==0) {
        console.log(`Odd number: ${arrayNumber[index]}`);
    }
            
        }
        console.log(`------------------------------------------------------`);
        console.log(`======6. find even position element and sum it=====`);
        console.log(arrayNumber);
        sum=0
        for (const index in arrayNumber) {
        if ((index%2)==0) {
            console.log(`even number: ${arrayNumber[index]}`);
            sum=sum +arrayNumber[index]
        }
           result =sum
         
      } 
      console.log(`sum is : ${result}`);
      console.log(`------------------------------------------------------`);
      console.log(`======7. find odd position element and sum it=====`);
      console.log(arrayNumber);
      sum=0
      for (const index in arrayNumber) {
      if ((index%2)!==0) {
          console.log(`odd number: ${arrayNumber[index]}`);
          sum=sum +arrayNumber[index]
      }
         result =sum
       
    } 
    console.log(`sum is : ${result}`);
    console.log(`------------------------------------------------------`);

    console.log(`======8. find sum of all elements=====`);
    console.log(arrayNumber);
    sum=0
    for (const index in arrayNumber) {
    var sum=sum+arrayNumber[index]
            
        }
       var  result=sum
       console.log(`sum of all elements is : ${result}`);
       console.log(`------------------------------------------------------`);
       console.log(`======9. find no. which are multiple of 5 =====`);
    console.log(arrayNumber);
    for (const index in arrayNumber) {
        if (arrayNumber[index]%5==0) {
            console.log(`multiple of 5 ${arrayNumber[index]}`);
        }
            
        }
        console.log(`------------------------------------------------------`);

        console.log(`====== 10. Is number available in array =====`);
    console.log(arrayNumber);

       var isAvailable=arrayNumber.includes(115)
        console.log(`Is 115 number available in array : ${isAvailable} `);
            
        console.log(`------------------------------------------------------`);

        console.log(`====== 11. Is 23 number available  in array =====`);
        console.log(arrayNumber);
        isAvailable=arrayNumber.includes(23)
            console.log(`Is 23 number available in array : ${isAvailable} `);
            console.log(`------------------------------------------------------`);
    console.log(`====== 12. Insert number 55,66 before index 3 in array =====`);
    console.log(arrayNumber);
arrayNumber.splice(3,0,55,66)
console.log(`after insertion : ${arrayNumber}`);
console.log(`------------------------------------------------------`);
console.log(`====== 12. Delete 3 elements starting from index 4 in array =====`);
    console.log(` given array is : ${arrayNumber}`)
    arrayNumber.splice(4,3)
    console.log(arrayNumber);

        
    
    
    
