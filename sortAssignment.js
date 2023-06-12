const array =[10, 5, "a","b","h",11];
console.log(`given array is : ${array}`);
const numArray=[];
const alphaArray=[];
array.forEach((element)=>{

    if (element>0) {
        
        numArray.push(element)
    } else{
        alphaArray.push(element)
    }
})
console.log(`separate num array is : ${numArray}`);
console.log(`separate alphabet array is : ${alphaArray}`);
 
numArray.sort((n1,n2)=>{
return n1>n2 ? 1:-1;
})
alphaArray.sort();
console.log(`after sorting `);
console.log(numArray);
console.log(alphaArray);