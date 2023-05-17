var givenString= "  Hey doing good, keep ihey you are t up   ";



function stringHandsOn() {
    console.log(`"   Hey you are doing good ,keep it up   "`);
}

stringHandsOn( `"   Hey you are doing good ,keep it up   "`)

console.log("-------------------------------------");

var givenStringlength=givenString.length
console.log("before trim total no. of charecter :", givenString.length);

console.log("-------------------------------------");
var trimedString =givenString.trim( );

console.log( `after trim trimedString is`,givenString, trimedString.length);
console.log(`total spaces after trim is :`,givenString.length-trimedString.length );
console.log("-------------------------------------");
firstChar=trimedString.charAt(0)
lastChar=trimedString.charAt(33)
console.log(`first char ${firstChar} and last charecter after trim is ${lastChar} :`);

console.log("-------------------------------------");
var givenString  ="Hey you are doing good ,keep it up " 
var wordCount=givenString.split(" ")
 console.log(  wordCount);
 console.log(`total no of words`, wordCount.length);

 console.log("-------------------------------------");
 indexOfGood=givenString.indexOf("good");
 console.log(`index of good from given string is :` ,indexOfGood);
 console.log("-------------------------------------");
  subString22 =givenString.substring(22)
  console.log(`substring starting from index 22 is :`, subString22);

  console.log("-------------------------------------");
  sliceIndex22=givenString.slice(22)
  console.log(`slice starting from index 22 is :`,sliceIndex22);

  console.log("-------------------------------------");
  endsWithUp=trimedString.endsWith("up")
  console.log(`check string ends with up :`, endsWithUp);

  console.log("-------------------------------------");
  startWithHey=trimedString.startsWith("Hey")
  console.log(`check string starts with hey :`, startWithHey);
