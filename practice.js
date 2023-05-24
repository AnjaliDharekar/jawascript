


// var stringHandsOn= function () {
//     var givenString ="JS the most popular language of internet";
//     var lengthOFString= givenString.length
//     console.log( `length of given string is:`, lengthOFString);
//     console.log(`========================================================`);

//     var charfive = givenString.charAt(5)
// var charEleven = givenString.charAt(11)
// console.log(`5th char ${charfive} and 11th charecter is ${charEleven} :`);
// console.log(`========================================================`);
// lastChar= givenString.charAt(39)
// console.log(`last char  is: ${lastChar}`);
// console.log(`========================================================`);
// firstChar=givenString.charAt(0)
// console.log(`first char of given string is: ${firstChar}`);
// console.log(`========================================================`);
// totalWords=givenString.split(" ")
// console.log(totalWords);
// console.log(`total no of words`, totalWords.length);
// console.log(`========================================================`);

// squareOfWords=7*7
// console.log ( `square of total no. of words is `,squareOfWords);
// }

//  stringHandsOn()
// console.log(`================greater no=============================`);

//  var greaterNumber=function (num1,num2) {
// var result =num1>num2? `${num1} is greater `: `${num2} is greater `;
// console.log(result);
    
//  }
// greaterNumber( 30,22)

// evenOdd=function (value) {
//    var res= value%2==0? true : false
//    console.log(res);
// var res2=(res == true )? `${value}is even`:`${value} is odd`
    
//     return res2
// }
// var result=evenOdd(23)
// console.log( result);

// console.log(`----------------------------------------------------`);



function gradeCalculation(marks) {
    if (marks==null || marks==undefined || marks <=0 || marks>=100 || marks==String) {
        console.log(` marks are : ${marks} please provide the valide marks`);
    } else {

        if ( marks>=90) {
            console.log(`Funtastic Marks :${marks}, your grade is A+`);
        } else {
            if (marks>=75 && marks<90) {
                console.log(`Excellent Marks :${marks}, your grade is A`);
            } else {
                if (marks>=50 && marks< 75) {
                    console.log(`Good Marks :${marks}, your grade is B`);
                    
                } else {
                    if (marks>=35 && marks<50) {
                        console.log(` Marks are :${marks}, your grade is C, Need improvement`);
                        
                    } else {
                        if (marks>=1 && marks<35) {
                            console.log( `marks are :${marks}, sorry you are failed`);
                        } else {
                            
                        }
                        
                    }
                    
                }
                
            }
            
        }
        
    }
    
}
gradeCalculation(0)
gradeCalculation(undefined)
gradeCalculation(null)
gradeCalculation("forty")

gradeCalculation(22)
gradeCalculation(35)
gradeCalculation(45)
gradeCalculation(50)
gradeCalculation(72)
gradeCalculation(75)
gradeCalculation(80)
gradeCalculation(90)
gradeCalculation(99)
gradeCalculation(120)

console.log(`========================================================`);


console.log(`=============total no. of vpowels==========`);
 function totalVowels(string) {
    console.log(`given string : ${string}`);
    concatString=""
   count=0
for (let index = 0; index < string.length; index++) {
    char=string.charAt(index)
    if ( char==`a`|| char==`e`||char==`i`|| char==`o`||char==`u`|| char==`A`||char==`E`|| char==`I`||char==`O`|| char==`U` ) {
        console.log(char);
        count++
        concatString = concatString.concat(char); 
    } else {
        
    }
     
    
}
console.log(concatString);

   console.log(`count is : ${count}`); 
   

 }
 totalVowels(`I am very good IT Developer`)
 totalVowels(`I want to become angular developer`)


 console.log(`============sum of square of no ============ `);
function squareOfNumbers(num) {
    sum=0
    for (let index = 1; index <= num; index++) {
        square= index*index
        console.log(`square of given no ${square}`);
        sum=sum + square

        
    }
    result= sum
    console.log( `sum of square ${sum}`);
}
squareOfNumbers(15)

console.log(`===== Even position char=======`);
 function evenPositionChar(string) {
    console.log(`given string : ${string}`);
    count=0
   concatString=""
     for (let index = 0; index < (string.length-1); index++) {
        char= string.charAt(index)
        if (index%2==0 && char!==" ") {
            console.log(char);
            count++
            concatString=concatString.concat(char) 
        } else {
            
        }
        
    
     }
     console.log(concatString);
 }
 evenPositionChar(`i am trying to write program in jawaScript `)

 console.log(`==============prime no.============`);
  function primeNumber(num) {
    if (num%2!=0|| num%3!=0|| num%5!=0 || num%7) {
        
    } else {
        
    }
    
  }