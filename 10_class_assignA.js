
class Vehicle {
    constructor(name, color, model,type,price){
        this.name = name;
        this.color = color;
        this.model = model;
        this.type= type;
        this. price =price
    }  
}
const mahindra = new Vehicle("mahindra", 'white', "Thar","SUV", "Rs. 15 lack");
const TataNexon = new Vehicle("Tata",'red', "Nexon","SUV", "Rs. 8 lack" );
const TataPunch = new Vehicle("Tata",'red', "Punch", "SUV","Rs. 10 lack" );
const maruti = new Vehicle("maruti", 'black', "Breza","SUV", "Rs. 8 lack");
const BMW = new Vehicle("BMW",'gray', "BMW","SUV", "Rs. 80 lack");

const arrayOfVehicle = [mahindra, TataNexon, TataPunch, maruti,BMW];

for (const Vehicle of arrayOfVehicle) {
    
    console.log(`Details is : Name :${Vehicle.name}, Color : ${Vehicle.color},Model :  ${Vehicle.model}, Type: ${Vehicle.type}, price: ${Vehicle.price}`);
}

console.log(`------------------------------------------`);

class College {
    constructor(Name,city,departement,contact){
    this.Name=Name;
    this.city= city;
    this.departement= departement;
    this.contact=contact;
    }
} 
const shahu  = new College("Shahu college", 'latur', "Math",1234567890);
const vivekanand = new College("vivekanand college",'latur', "science" ,923445667 );
const valchand = new College("valchand college",'pune', "engg", 7234566778 );
const MBES= new College("MBES COE", 'Ambajogai', "EEP",907654338);

function TraverseObject(CollegeObject) {
    for (const key in CollegeObject) {
        if (Object.hasOwnProperty.call(CollegeObject, key)) {
            const element = CollegeObject[key];
            console.log(`${key} : ${element}`);
        }   
    }
    console.log(`------------------------------------------`);
}
TraverseObject(shahu)
TraverseObject(vivekanand)
TraverseObject(valchand)
TraverseObject(MBES)

