console.log(` ==========Month Name by Switch case=================`);
function monthOfYear(monthNum) {
  switch (monthNum) {
    case 1:
      console.log(`month is: January as month number is ${monthNum}`);
      break;
    case 2:
      console.log(`month is: February as month number is ${monthNum}`);
      break;
    case 3:
        console.log(`month is: March as month number is ${monthNum}`);
      break;
    case 4:
        console.log(`month is: April as month number is ${monthNum}`);
      break;
    case 5:
        console.log(`month is: May as month number is ${monthNum}`);
      break;
    case 6:
        console.log(`month is: June as month number is ${monthNum}`);
      break;
    case 7:
        console.log(`month is: July as month number is ${monthNum}`);
      break;
      case 8:
        console.log(`month is: August as month number is ${monthNum}`);
      break;
      case 9:
        console.log(`month is: sebtember as month number is ${monthNum}`);
      break;
      case 10:
        console.log(`month is: October as month number is ${monthNum}`);
      break;
      case 11:
        console.log(`month is: November as month number is ${monthNum}`);
      break;
      case 12:
        console.log(`month is: December as month number is ${monthNum}`);
      break;
    default:
      console.log(`Invalid input ==>  ${monthNum}`);
      break;
  }
}
monthOfYear(1);
monthOfYear(2);
monthOfYear(3);
monthOfYear(4);
monthOfYear(5);
monthOfYear(6);
monthOfYear(7);
monthOfYear(8);
monthOfYear(9);
monthOfYear(10);
monthOfYear(11);
monthOfYear(12);
monthOfYear(null);
monthOfYear(undefined)
monthOfYear(NaN)