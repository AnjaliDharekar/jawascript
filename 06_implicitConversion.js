

//  numeric string used with +given string Type//
let result;
 result= `3`+2;
 console.log( result); //'32'


 result= `3`+ true
 console.log(result);//" 3true"


 result=`3`+ undefined;
 console.log(result); // "3undefined"


 result=`3`+ null;
 console.log(result);// "3null"


//  implicite boolean conversion to number//

// if boolean is used ,true is 1, false is 0



result=`4` - true;
console.log(result); // 3

result= 4 + true;
console.log(result); // 5


result=4 +false;
console.log(result); // 4

// implicite string conversion to number
// numeric string used with -,/.* result number type

result=`4`- `2`
console.log(result);// 2

result=`4`- 2
console.log(result);// 2

result=`4`* `2`
console.log(result);// 8

result=`4`/`2`
console.log(result);// 2


// undefined used with number, boolean or null given NaN
result= 4 + undefined;
console.log(result);

result= 4 - undefined;
console.log(result);

result= true + undefined;
console.log(result);

result= null + undefined;
console.log(result);



 