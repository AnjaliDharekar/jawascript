

function countChar(string) {

   console.log(`given string : ${string}`);

   count=0

for (let index = 0; index <(string.length) ; index++) {
   var char= string.charAt(index)
   if (char=="A"|| char=="a") {
    count++
    

   } else {
    
   }

}
  console.log(`total count of " A" and "a" is: ${count}`);  
  return count
   
}
countChar(`I AM Learning JawaScript, The Language of internet`)
countChar(`My favorite movie is LAggAn`)