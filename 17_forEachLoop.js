const arrayNums = [10, 5, 70, 90, 100, 30 ];

arrayNums.forEach( ( currentValue, index, array ) => {
    console.log(`${currentValue}, ${index}`);
    console.log(array);
}  );

console.log(" ======== Executing forEach() with only required arguments==========");
arrayNums.forEach( (currentValue) => {
    console.log(currentValue);
} );

// WAP to find the average salary of an employee 
let sumSalary = 0;
array_employees.forEach( (employee) => {
    sumSalary = sumSalary + employee.emp_salary;
});
let averageSalary = sumSalary / array_employees.length;
console.log(`Average Salary is : ${averageSalary}`);
