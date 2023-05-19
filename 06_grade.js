function gradeCalculation(marks) {
  if (marks == undefined || isNaN(marks) || marks < 0 || marks > 100) {
    // undefined, null
    console.log(`Invalid marks: ${marks}`);
    console.log(`------------------------------------------------`);
  } else {
    console.log(`Valid marks : ${marks}`);
    if (marks >= 90) {
      console.log(`Fantastic marks : ${marks}, Your grade is A+`);
      console.log(`----------------------------------------`);
    } else {
      if (marks >= 75 && marks < 90) {
        console.log(`Excellent Marks :${marks}, your grade is A`);
        console.log(`-------------------------------------------------`);
      } else {
        if (marks >= 50 && marks < 75) {
          console.log(`Good Marks :${marks}, your grade is B`);
          console.log(`--------------------------------------------------`);
        } else {
          if (marks >= 35 && marks < 50) {
            console.log(` Marks are :${marks}, your grade is C, Need improvement` );
            console.log(`---------------------------------------------------`);
          } else {
            if (marks >= 1 && marks < 35) {
              console.log(`marks are :${marks}, sorry you are failed`);
              console.log(`---------------------------------------------`);
            } else {
            }
          }
        }
      }
    }
  }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);

