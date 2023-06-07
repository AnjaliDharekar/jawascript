
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`========1. tcs employee name ==========`);
const tcsEmployee =array_employees.filter((element)=>{

   return element.emp_company=="TCS";
})
tcsEmployee.forEach(element => {
   console.log(`employee name is ${element.emp_name}, company name is : ${element.emp_company}` );

});


console.log(`========2. average salary of wipro employee==========`);
const wiproEmploye =array_employees.filter((element)=>{
    return element.emp_company=="Wipro"

})
sumSalary=0
wiproEmploye.forEach((element)=>{
    sumSalary=sumSalary+element.emp_salary

})
const average=sumSalary/wiproEmploye.length
console.log(average);
console.log(`========3. average salary of wipro or Infy employee==========`);
const wiproAndInfyEmploye =array_employees.filter((element)=>{
    
    
        return (element.emp_company=="Wipro" ||element.emp_company=="Infy") 

})

sumSalary=0
wiproAndInfyEmploye.forEach((element)=>{
    sumSalary=sumSalary+element.emp_salary

})
const averageOfWiproAndInfy=sumSalary/wiproAndInfyEmploye.length
console.log(`average salary of wipro or Infy employee is: ${averageOfWiproAndInfy} `);