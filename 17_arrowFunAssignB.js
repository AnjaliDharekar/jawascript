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
 const emp_radha= new Employee(22,"Radha","HR", 74000,"Wipro");
 const emp_rishi= new Employee(22,"Rishi","Finance", 47000,"TCS");
 const emp_sonali= new Employee(22,"Sonali","Finance", 45000,"Infy");
 const emp_monika= new Employee(22,"monica","IT", 40000,"Wipro");
 const emp_vinay= new Employee(22,"vinay","IT", 75000,"TCS");
 const emp_mahi= new Employee(22,"Mahi","HR", 85000,"Infy");
 const arrayEmploye =[emp_anil, emp_radha,emp_rishi, emp_sonali,emp_monika,emp_vinay,emp_mahi];
console.log(`-----------------1  TCS employee----------------------`);
 for (const nameEmployee of arrayEmploye) {
    if (nameEmployee.emp_company=="TCS") {
        console.log(`name of tcs employee is : ${nameEmployee.emp_name}`);
        console.log(nameEmployee.emp_company);
    }
}
console.log(`-----------------2  employee from finance dept----------------------`);
    for (const nameEmployee of arrayEmploye) {

    if (nameEmployee.emp_dept=="Finance") {
        console.log(`name of finance dept employee is :${nameEmployee.emp_name}`);
        console.log(nameEmployee.emp_dept);
    }

}
console.log(`-----------------3 .names starts with "R"----------------------`);
for (const nameEmployee of arrayEmploye) {
    if (nameEmployee.emp_name.startsWith("R") ){
        console.log(`employee names starts with R :  ${nameEmployee.emp_name}`);
    }
}
console.log(`----------4  find employee with salary greater tha 75000----------------------`);
for (const nameEmployee of arrayEmploye) {
    if (nameEmployee.emp_salary>75000) {
        console.log(`salary greater than 75000 is name ${nameEmployee.emp_name}`);
        console.log(`salary is  ${nameEmployee.emp_salary}`);
        console.log(`company name is : ${nameEmployee.emp_company}`);
    }
}
console.log(`----------5 find employee with salary >=50000---------------------`);
for (const nameEmployee of arrayEmploye) {
    if ((nameEmployee.emp_salary>=50000)&&(nameEmployee.emp_dept=="IT")) {
        console.log(nameEmployee);
    }
}
console.log(`-----------------6 find employee with Infy company---------------------`);
for (const nameEmployee of arrayEmploye) {
    if (nameEmployee.emp_company=="Infy") {
        console.log(nameEmployee);
        
    }
}