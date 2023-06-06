class Employee {
    constructor(Emp_id,emp_name,emp_dept,emp_salary,emp_company){

        this.Emp_id=Emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
 }
 const emp_anil= new Employee(22,"Anil","IT", 50000,"TCS");
 const emp_radha= new Employee(33,"Radha","HR", 74000,"Wipro");
 const emp_rishi= new Employee(55,"Rishi","Finance", 47000,"TCS");
 const emp_sonali= new Employee(66,"Sonali","Finance", 45000,"Infy");
 const emp_monika= new Employee(77,"monica","IT", 40000,"Wipro");
 const emp_vinay= new Employee(88,"vinay","IT", 75000,"TCS");
 const emp_mahi= new Employee(99,"Mahi","HR", 85000,"Infy");
 const arrayEmploye =[emp_anil, emp_radha,emp_rishi, emp_sonali,emp_monika,emp_vinay,emp_mahi];
console.log(`--------------1. TCS employee---------------------`);
 arrayEmploye.forEach((element)=>{
if (element.emp_company=="TCS") {
    console.log(`employee name : ${element.emp_name}, employee company : ${element.emp_company}`);
}
 })
 console.log(`--------------2. salary greater than 50000---------------------`);
 arrayEmploye.forEach((element)=>{
    if (element.emp_salary>=50000) {
        console.log(element);
    }
  })

     console.log(`---------3. sum of all employee salary ---------`);
     sum=0;
arrayEmploye.forEach((element)=>{
sum=sum+element.emp_salary

})
console.log(`sum of all employee salari is : ${sum}`);
console.log(`--------------4. average salary ------------------`);
sum=0;
arrayEmploye.forEach((element)=>{
sum=sum+element.emp_salary


})
averageSalary=sum/(arrayEmploye.length)
console.log(`average salary is : ${averageSalary}`);
console.log(`----------5. IT or HR dpmt emp whose salary is >= 75000 ----------`);
arrayEmploye.forEach((element)=>{
    if ((element.emp_dept=="IT"|| element.emp_dept=="HR")&& (element.emp_salary>=75000)) {
        console.log(element);
    }
    
    
    })