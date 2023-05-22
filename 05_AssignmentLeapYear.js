console.log(`===========  program to check leap year  =============`); 
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if (year==null || year== undefined|| isNaN(year)|| year<0) {
        console.log(`${year} : is invalide data`);
    }
     else {
        if ((year % 4==0) && (year % 100!=0) || (year % 400==0) ) {
            console.log( `${year} : is leap year`);
        } else {
            console.log(`${year} : is not leap year`);
        
    }
    
    }
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("twenty twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);
checkLeapYear(-1750);




        
    
    
