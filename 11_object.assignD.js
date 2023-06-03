 
 let professor = {
    name: "Anjali Dharekar",
    education: "BE ",
    college: "MBES COE ambajogai",
    subject : "CPP",
    isMarried: true,
    degrees: {

        engineering: "CSC",
        PG: "control system",
        PHD: "Adv.computing",
        diploma: "computer",
        value : function() {
        

            console.log(  `Teacher degrees and Total Degrees are :  engineering : ${this.engineering}, PG:  ${this.PG},PHD : ${this.PHD},diploma : ${this.diploma}`);
       }
       
      },
    certificates:["Hacker Rank Participation"," certificate in IFE cource", " certificate in adv programming"],


    
 };
 console.log(professor);
 console.log(`-------------------------------------------------`);
 professor.degrees.value()
 console.log(`-------------------------------------------------`);
 professor.totalExperience="14 years";
 console.log(`total experience is : ${professor.totalExperience}`);
 console.log(`-------------------------------------------------`);
 console.log(`before modification person marital status :  ${professor.isMarried}`);
 professor.isMarried=false;
 console.log(`after modification person marital status : ${professor.isMarried}`);
 console.log(`-------------------------------------------------`);
 console.log(`before adding oracle cerificate`);
 console.log(professor.certificates);
 professor.certificates.splice(3,0,"oracle certificate")
 console.log(professor.certificates);
 console.log(`-------------------------------------------------`);
 console.log(professor.certificates.slice(3));