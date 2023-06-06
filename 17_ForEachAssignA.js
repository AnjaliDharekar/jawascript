
const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`given array is : ${arrayNumbers}`);
console.log(`================1.add 10 into each element==============`);

const arrayTransform=arrayNumbers.map((element,index)=>{
    return (element+10)
})
console.log(arrayTransform);
console.log(`================2.square each element==============`);
const arrayTrans = arrayNumbers.map( (element) => {
    return element*element;
} );
console.log(arrayTrans);

console.log(`================3. add index value into its element==============`);
const addIndexArray=arrayNumbers.map((element,index)=>{
    return (element+index)
})
console.log(addIndexArray);
 