console.log(`==============1, log element and index============`);
const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((element,index) => {
    console.log(`element is : ${element}`);
    console.log(`index is : ${index}`);
});

console.log(`==============2, log positive elements============`)
const positiveNumArray=[]
arrayNumbers.forEach((element)=>{

    if (element>0) {
        console.log(element);
        positiveNumArray.push(element)
    }
})
console.log(positiveNumArray);

console.log(`==============3 find negative no. and add in array============`)
const NegativeNumArray=[];
arrayNumbers.forEach((element)=>{
    if (element<0) {
        NegativeNumArray.push(element)
        
    }
});

console.log(NegativeNumArray);
console.log(`=============4. find even no. ============`)

arrayNumbers.forEach((element)=>{
if (element%2==0) {
    console.log(` even no is : ${element}`);
    
}
})
console.log(`=====5. find sum of all no.from array and log sum.=====`)
let sum=0;
arrayNumbers.forEach((element,index)=>{
sum=sum+element;

})
console.log(`sum of all elements is : ${sum}`);
console.log(`=============6. log anly even index value============`);
arrayNumbers.forEach((element,index)=>{
    if (index%2==0) {
        console.log(`even index value : ${element}`);
        
    }
})
