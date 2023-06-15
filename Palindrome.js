console.log(`WAP to check the given string in palindrome or not`);
 function isPalindrom(str) {
  let newStr=str.toLowerCase();
  let left=0;
  let right=newStr.length-1;
  while (left < right) {
    if (newStr[left]!==newStr[right]) return false ;
  
    left++;
    right--;  
    
  }

   return true; 
   
 }

console.log(isPalindrom("anjali"));
console.log(isPalindrom("madam"));
console.log(isPalindrom("12345"));
console.log(isPalindrom("121"));
console.log(isPalindrom("ajay"));
 