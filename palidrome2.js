function palidrome(str) {
    var StrLength=str.length-1;
    for (let i = 0; i < StrLength/2; i++) {
        var starChar= str[i]
        var endChar =str[StrLength-1]
        if (starChar==endChar) {
            return true;
        }
        
    }
    return false
} function isPalindrom(str) {
    var result= palidrome(str);
    if (result==true) {
        console.log(`${str}  : The string is Palimdrome`);
        
    }else{
        console.log(`${str}  : The string is not Palimdrome`);
    }
    
}
isPalindrom("anjali")
isPalindrom('madam ')
isPalindrom('nayan')
isPalindrom("dad");