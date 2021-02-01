//current year
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {const responsive = 'responsive';
mainnav.classList.toggle(responsive)}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */
 //current year
 
var n = new Date();
var y = n.getFullYear();
document.getElementById("currentyear").innerHTML = y ;

//modified date
let b = new Date();
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("date").innerHTML = day[b.getDay()] + ", " + 
b.getDate() + " " + month[b.getMonth()] + " " + b.getFullYear();


// var options = { month: "numeric", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric"};
// var d = document.lastModified().toLocaleDateString("en-US", options);
// document.getElementById("modified").textContent = d ;