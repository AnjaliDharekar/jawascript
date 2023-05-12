
// function with no arguments
function Fullname() {
   firstName= "anjali"
   middleName="Bapurao"
   lastName="Dharekar" 
}
console.log("function fullName with no arguments");

Fullname()

console.log("-----------------------------------------------"); 

    var animal1= "tiger"
    var  animal2="lion"
function animals( one,two){
    

}
console.log("function for 2 animals with arguments",animal1,"and", animal2 );
animals( animal1,animal2)
console.log("-----------------------------------------------");

// function with Arguments
function personslDetails ( firstName, lastName, collegeName){

    console.log("personal details is:");
    console.log("My name is :",firstName, lastName);
    console.log( "my college name is", collegeName);
    
}
personslDetails("Anjali "," Dharekar", "MBES COE Ambajogai" )
console.log("-----------------------------------------------");

// swap with 2 arguments
var  hubby= "Virat "
var wife= "Anushka"

value1=1000
value2=2000

function swapValuesDude( valueOne,valueTwo){

console.log("before swap:", valueOne,valueTwo);

var temp = valueOne
valueOne = valueTwo
valueTwo=temp
console.log ("After swap:", valueOne,valueTwo);

}
 swapValuesDude( hubby, wife);
 console.log("-----------------------------------------------");
 swapValuesDude( value1,value2);

// wAF  argument or parameter with add three value
function addThreeValue ( a ,b ,c ){
var result= a+b+c
console.log( "addition of three values is:", result);
}
addThreeValue( 10.23,600,40)
console.log("-----------------------------------------------");
addThreeValue( "hello"," Good"," Morning")