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
console.log(`===========find employee from wipro==============`);
const wiproEmployee=array_employees.filter((element)=>{
return element.emp_company=="Wipro"
})
wiproEmployee.map((element)=>{
console.log(element);
})
console.log(`===========find employee from IT OR HR==============`);
const itOrHrEmployee=array_employees.filter((element)=>{
    return (element.emp_dept=="IT"||element.emp_dept=="HR")
    })
    itOrHrEmployee.map((element)=>{
    console.log(element);
    })

    console.log(`===========find employee id's greater than 50==============`);
    const greaterEmpId=array_employees.filter((element)=>{
    return element.emp_id>50
    })
    greaterEmpId.map((element)=>{
    console.log(element);
    })    
    console.log(`========4. empName starts with A or V or M==============`);
    const startWithAVM=array_employees.filter((element)=>{
    if (element.emp_name.startsWith("A")|| element.emp_name.startsWith("V")|| element.emp_name.startsWith("M")) {
        console.log(element);
        return element

    }
    })
    console.log(`========4. avg salary of all employe==============`);
    const empSalaries=array_employees.map((element)=>{
return element.emp_salary
    })
    console.log(empSalaries);
const sumSalary=empSalaries.reduce((runningTotal,value)=>{
    return runningTotal+ value
})

const avgSalary=sumSalary/empSalaries.length
console.log(avgSalary);

console.log(`========4. avg salary of IT employe==============`);
    const ITemploye=array_employees.filter((element)=>{
if (element.emp_dept=="IT") {
    return element
} 
    })
    const ITSalaries=ITemploye.map((element)=>{
        return element.emp_salary
            })
            console.log(ITSalaries);

const sumITSalary=ITSalaries.reduce((runningTotal,value)=>{
    return runningTotal+ value
})

const avgSalaryOfIT=sumITSalary/ITSalaries.length
console.log(avgSalaryOfIT);