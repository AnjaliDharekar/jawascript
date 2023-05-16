

var greaterNumber=function (arg1, arg2) {
  var  result=arg1>=arg2 ?`${arg1} is greater `:`${arg2}  is greater`;
  console.log(result);
    return result
} 
greaterNumber(10,-10)
greaterNumber(800,899)

console.log(`----------------------------------------------------`);

var isEvenOrOdd= function(num) {
  var result =num%2 == 0 ? true : false
    return result;
}
var result =isEvenOrOdd(29);
 var res = (result==true)? "29 is even": "29 is odd";
console.log(`${res}`);

var result =isEvenOrOdd(44);
 var res = (result==true)? "44 is even": "44 is odd";
console.log(`${res}`);

var result =isEvenOrOdd(0);
 var res = (result==true)? "0 is even": "0 is odd";
console.log(`${res}`);
var result =isEvenOrOdd(101);
 var res = (result==true)? "101 is even": "101 is odd";
console.log(`${res}`);

console.log(`---------------------------------------------------`);
var wordLength= function (word) {
    var len=word.length
    var result = len%2==0? "even": "odd";
    return result

}
var returnValue=wordLength ("jawaScript")
console.log( `length of word jawaScript has : ${returnValue}`  );

var returnValue=wordLength ("developer")
console.log( `length of word developer has : ${returnValue}`  );

var returnValue=wordLength ("Google")
console.log( `length of word Google has : ${returnValue}`  );