const elementPersonal = document.getElementById("personal");
console.log(elementPersonal.innerHTML);

const elementNameByClass = document.getElementsByClassName("name");
console.log(elementNameByClass[0].innerHTML);

const elementH3 = document.querySelectorAll("p")
console.log(elementH3[0].innerHTML);


// querySelectorAll
// querySelector

const elementPer = document.querySelector('#personal');
console.log(elementPer.innerHTML);

const elementName = document.querySelector(".name");
console.log(elementName.innerHTML);

const elementH3Contact = document.querySelector("h3");
console.log(elementH3Contact.innerHTML);

console.log("======== .querySelectorAll('p') ");

const elementsPara = document.querySelectorAll('p');
for (const element of elementsPara) {
    console.log(element.innerHTML);
}

console.log(`======== document.querySelectorAll(".ceo")`);
const elementsCeo = document.querySelectorAll(".ceo")
elementsCeo.forEach( (element)=>{
    console.log(element.innerHTML);
} );
console.log(` Updating an element city`);
const elementCity = document.querySelector("#city");
elementCity.innerHTML = "CITY: Mumbai";

console.log(` Changing an element attribute`);
const elementLink = document.querySelector('.link');
elementLink.setAttribute('href', 'https://www.linkedin.com/login');
// // https://www.linkedin.com/login

console.log(`changing css properties`);
const elementAddress= document.querySelector(`#address`);
elementAddress.style.color= 'red';
elementAddress.style.fontFamily= 'sans-serif';

console.log(`removing an element`);
const elementHobbies=document.querySelector('.hobbies')
const elementcCricket=document.querySelector('#cricket')
elementHobbies.removeChild(elementcCricket);

 console.log(` Creating node`);
 const elementTimePass= document.createElement('p');
 const textNodeTimePass= document.createTextNode("TimePass is also my hobby, please don't laugh");
 elementTimePass.appendChild(textNodeTimePass);
 elementHobbies.appendChild(elementTimePass)

 const elementContact= document.querySelector("#contact");
 elementH3Contact.addEventListener('click',()=>{
alert("Hey you touched me !")
 });
 function show() {
    alert(`show function called `)
    
 }