console.log(`=====================TCS interview eligibility=============================`);
var tcsEligibility=function (gradScore,hscScore,sscScore,candidateName) {
var result =(gradScore>=70 )||( hscScore==80) || (sscScore>90 )? ` "congrats"  you are eligible for interview ${candidateName}`: `${candidateName} unfortunately you are not eligible for interview` 
console.log( result);
console.log(`-------------------------------------------------------------------------`);
    
}
tcsEligibility(80,86,90,"Anjali")
tcsEligibility(70,65,90," Nishank")
tcsEligibility(60,79,88,"Anvesha")

