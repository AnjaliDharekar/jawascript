console.log(`=======1. greater than 50=========`);
const arryNumbers=[20,11,40,25,37,49,9,90,60,2,19]
const arrayGreaterThan50=arryNumbers.filter((element)=>{
return element>50;
})
console.log(arrayGreaterThan50);
console.log(`=======2. all even no.=========`);
const evenNOArray=arryNumbers.filter((element)=>{
   return element%2==0
})
console.log(evenNOArray);

console.log(`=======3. find all odd no. =========`);
const oddNOArray=arryNumbers.filter((element)=>{
    return element%2!=0
 })
 console.log(oddNOArray);
 console.log(`=======3. multiple of 5. =========`);
 const multipleOfFive=arryNumbers.filter((element)=>{
return element%5==0
 })
 console.log(multipleOfFive);

 console.log(`======. numbers between 20 and 50 =========`);
 const betweenNumbers=arryNumbers.filter((element)=>{
    if (element>20 && element<50) {
        
        return element
    }

 })
 console.log(betweenNumbers);