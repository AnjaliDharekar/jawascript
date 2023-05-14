

function show (){
    console.log("show function");
    
}
show ();
console.log("before function call");
show (); // function call or invoke
console.log("after function");
show ();
show ();
show ();

var numOne=100;
var numTwo=200;

var name1= "Billgates"
var name2= "Elon Musk"
 
var fruitApple="Apple"
var fruitMango="Mango"

function swapVariables(valueOne,valueTwo ,valueThree){  // arguments : var valueOne=numOne
 console.log("before swap:", valueOne,valueTwo);
 console.log(valueThree);
// var valueOne=100
//var valueTwo=100
var temp = valueOne
valueOne = valueTwo
valueTwo=temp
console.log ("After swap:", valueOne,valueTwo);
}  
swapVariables("after swap", numOne ,numTwo ,300);// 100 and 200
swapVariables( name1,name2 )
swapVariables( fruitApple,fruitMango )




console.log(`----------------------------------------`);
function addition(num1, num2) {
    var result  = num1 + num2;// result = 300
    return result;
}
var returnValue = addition(100, 200);
console.log("Addition of number is: ", returnValue);
var returnResult = addition(890.400, 600.3456);
console.log("Addition of number is: ", returnResult);
