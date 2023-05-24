console.log(`==============array====================  `);


var arrayFruits= ["Banana","Orangr", "Apple","Mango","Water Melon"];
console.log(`given array is : ${arrayFruits}`);
const zerothIndexValue = arrayFruits[0];
console.log(`first element of array is : ${zerothIndexValue}`);

let lengthOfArray = arrayFruits.length;
const lastElement = arrayFruits[arrayFruits.length-1];
console.log(`last element of array is : ${lastElement}`);

console.log(`--------------------------------------------`);
console.log(`====== 2. add papaya before banana========`);

arrayFruits.unshift("papaya");
console.log(arrayFruits);

console.log(`--------------------------------------------`);
console.log(`====== 3. remove mango========`);
console.log(`Array is :  ${arrayFruits}`);
const removMango=arrayFruits.splice(4,1)
console.log(`remove: ${removMango}`);
console.log(`after removing mango array is :  ${arrayFruits}`);

console.log(`-----------------------------------------------`);
console.log(`====== 4 . add pineapple at last========`);

console.log(`Array is :  ${arrayFruits}`);
const addPineapple=arrayFruits.splice((arrayFruits.length),0,"pineapple")
console.log(`after adding pinapple : ${arrayFruits}`);
console.log(`------------------------------------`);
console.log(`======5. insert element dragon fruit before water melon ====`);
console.log(`array is :  ${arrayFruits}`);
const addDragonFruit =arrayFruits.splice(4,0,"Dragon Fruit")
console.log(`after adding array is :  ${arrayFruits}`);

console.log(`-----------------------------------------------`);
console.log(`==========6. replace element Orange==========`);
console.log( `array is : ${arrayFruits}`);
const replaceOrange=arrayFruits.splice(2,1,"kiwi")
console.log(arrayFruits);

console.log(`-----------------------------------------------`);
console.log(`=========7. Log from index 1 to 4==========`);

const indexOneToFour=arrayFruits.slice(1,5)
console.log(indexOneToFour);
console.log(arrayFruits);
console.log(`-----------------------------------------------`);
console.log(`==========8. select last 3 elements and log ============ `)
console.log( `array is : ${arrayFruits}`)

console.log(` ${arrayFruits.length} , ${arrayFruits.length-1}, ${arrayFruits.length-2}`);
const LastElement = arrayFruits[arrayFruits.length-1];
const LastElement_1 = arrayFruits[arrayFruits.length-2];
const LastElement_2 = arrayFruits[arrayFruits.length-3];
console.log(`last 3 elements are : ${LastElement}, ${LastElement_1}, ${LastElement_2}`);