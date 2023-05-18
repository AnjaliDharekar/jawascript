
function voteEligibility(age) {

    if (age==null || age==undefined) {
     console.log(`your age is : ${age} -->  Invalide data`);
        
    } else {
        if (age<=0 || age>120) {
            console.log( `your age is : ${age} -->  Invalid data`);
            
        } else {
            if (age<18) {
                console.log( `your age is : ${age} -->  sorry you are not  eligible for voting`);
            } else {

                console.log(`your age is : ${age}-->  you are eligible for voting `);
            }
           
            
        }
        
    }
    
}
voteEligibility(45)
voteEligibility(17)
voteEligibility(8)
voteEligibility(20)
voteEligibility(-10)
voteEligibility(200)
voteEligibility(0)
voteEligibility(undefined)
voteEligibility(null)