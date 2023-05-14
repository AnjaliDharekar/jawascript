var square1 = function (one, two) {
    var result = one*two;
    return `square of given number: ${result}`;
}
var result = square1(5,5 );
console.log(result);
 
var result = square1(6,6 );
console.log(result);

var result = square1(25,25 );
console.log(result);
 
var result = square1(100,100 );
console.log(result);
 
console.log(`========================================================`);
 console.log( `type of function is :` ,typeof square1);

 console.log(`========================================================`);
 var area = function (length, width) {
    var result = length*width;
    return `area of rectangle plot is: ${result}`;
}
var result = area(499,917 );
console.log(result);

console.log(`========================================================`);


 var swap= function(arg1, arg2) {
    console.log(`before swap`, arg1,arg2);
    var temp= arg1
    arg1=arg2
    arg2=temp
    console.log(`after swap`, arg1,arg2);
    
 }
 var result= swap("virat", "anushka")
 var result= swap(1000,2000)

 console.log(`========================================================`);
 var givenString= "JS the most popular language of internet";

var lengthOFString= givenString.length
console.log( `length of given string is:`, lengthOFString);
console.log(`========================================================`);

var charfive = givenString.charAt(5)
var charEleven = givenString.charAt(11)
console.log(`5th char ${charfive} and 11th charecter is ${charEleven} :`);
console.log(`========================================================`);
lastChar= givenString.charAt(39)
console.log(`last char  is: ${lastChar}`);
console.log(`========================================================`);
firstChar=givenString.charAt(0)
console.log(`first char of given string is: ${firstChar}`);
console.log(`========================================================`);
totalWords=givenString.split(" ")
console.log(totalWords);
console.log(`total no of words`, totalWords.length);
console.log(`========================================================`);

squareOfWords=7*7
console.log ( `square of total no. of words is `,squareOfWords);








 