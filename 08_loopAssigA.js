 
console.log(`============1. count total number of vowels===============`);
 
 function totalWord(givenString) {
    count=0
    console.log(`given string :${givenString}`);
for (let index = 0; index < (givenString.length ); index++) {

    var char=givenString.charAt(index)
    if (char=="a" ||char==`e` ||char==`i` ||char == `o` || char==`u` ||char==`A` ||char==`E` ||char==`I` || char== `O` ||char==`U` ) {
        
        count++
    } else {
        
    }
    
}

    console.log(`Count total vowels: ${count}`);
    console.log(`-------------------------------------`);
    
 }


 totalWord("I am very good IT Developer")
 totalWord( "I like jawaScript")
 

 console.log(`===========2. sum of cube of numbers from 1 to 5 ===============`);

 function sumOfcubeOfNum(num) {
  var sum=0
  for (let index = 1; index <=num; index++) {
    var cube= (index*index*index)
    
    console.log(`cube of given no. is ${cube}`);
    var sum= sum+cube
    
  }
var result=sum

console.log(`sum of cube is: ${result}`);
 }
 sumOfcubeOfNum(5)

 console.log(`=========3.odd position char=============================`);

 function oddPositionedChar(string) {
  console.log(`given string is : ${string}`);
  var concatString=""
  for (let index = 0; index <=(string.length-1); index++) {
 var char=string.charAt(index)
  if (index%2!==0 && char!==` `) {
    var concatString =concatString.concat(char)
  }

}
console.log(`odd positioned concat string  is :  ${concatString} `);

 }
 oddPositionedChar("Hard work always pays back")
 console.log(`----------------------------------------------`);
 oddPositionedChar("Soon I will be Angular IT Champ")