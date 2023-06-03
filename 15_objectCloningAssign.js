console.log(`-----------------------1-----------------------------`);
const arrayNums=[20,3,4,56,90,400,49];
console.log(`original array:  ${arrayNums}`);
const newarray=arrayNums;
afterPush =newarray.push(55,66)

console.log(`after push original array :${arrayNums}`);
console.log(`after push method cloned array is : ${newarray}`);
console.log(`-------------------2-----------------------`);
const clonedArray = [...arrayNums];
console.log(`given array ${arrayNums}`);
clonedArrayAfterPush =clonedArray.push(10,25);
console.log(`after push to clone array, original array : ${arrayNums}`);
console.log(`after push new cloned array : ${clonedArray}`);
console.log(`-------------------3 concate array -----------------------`);
const arrayEven=[2,30,14,8]
console.log(`given array ${arrayEven}`);
const array3=arrayEven.concat (arrayNums)
console.log(`result of two concate array : ${array3}`);
const array4=[...arrayEven,...arrayNums]
console.log(array4);
console.log(`-------------------4-----------------------`);

const employee_info={
    emp_id: 27,
    emp_name:"john Deo",
    salary:{
        july_month:"40,0000INR",
        august_month:"50,0000INR",
        jun_month:"65,0000INR",

    },
    address: {
        locality:{
            colony:" Om Vrindavan Society",
            street:"kanch pokali,431202"
        },
        city: "mumbai",
        state:"Maharashtra",
        country:"India",
    },
    mobiles: ["+91 8600 3456 88", "1800-4567 32","+91-9096 5678 77"]

}
console.log(`-------------------5-----------------------`);
console.log(`colony in locality  is :${employee_info.address.locality.colony}`);
console.log(`street in locality  is :${employee_info.address.locality.street}`);
console.log(`mobile numbers : ${employee_info.mobiles}`);

console.log(`-------------------6.a-----------------------`);
const deepClonedEmployee = JSON.parse(JSON.stringify(employee_info));

deepClonedEmployee.salary.july_month="80,000INR"
console.log(`colned object with update july month salary is : ${deepClonedEmployee.salary.july_month}`);
console.log(deepClonedEmployee);
console.log(`-------------------6.b----------------------`);
employee_info.address.country="United Kingdom"
console.log(`update original object country is : ${employee_info.address.country}`);
console.log(employee_info);

