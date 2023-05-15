console.log(`------------------1-------------------------`);

function squareOfWordLength( str) {

    strLength=str.length
    console.log(`string length is :${strLength}`);
    strLengthSquare= strLength*strLength
    console.log(`string length square is: ${strLengthSquare}`);
    return strLengthSquare

}
squareOfWordLength( "jawaScript") 
squareOfWordLength( "Google chrome") 
squareOfWordLength( "Developer Smart") 

console.log(`------------------2-------------------------`);
 
  function string() {
    givenString="I am Angular Developer"
    console.log(`given string is:${ givenString} `);
   var stringLength= givenString.length
   console.log(`length of given string is :${stringLength}`);
 var numOfWords=givenString.split(" ")
console.log(`no of words is : ${numOfWords}`);
console.log( `no. of words are : ${numOfWords.length}`);
var result= stringLength/numOfWords.length
console.log( `string lenth / number of words is : ${result}`);
result2= stringLength* numOfWords.length
console.log(`string length * total wards in string is : ${ result2}`);


}
string()