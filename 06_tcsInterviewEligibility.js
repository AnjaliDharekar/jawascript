

function interviewEligibility(gradScore,hscScore,sscScore, candidateName) {
    if (gradScore>=70 || hscScore>=80||sscScore>90) {
        console.log(`congrats ${candidateName} you are eligible for interview`);
        console.log(`==================================================`);
        
    } else {
        console.log(`${candidateName} unfortunately, you are not eligible for interview`);
        
    }
    
}
interviewEligibility(80,86,90,"anjali")
interviewEligibility(70,65,55,"rupali")
interviewEligibility(60,79,88,"Arati")