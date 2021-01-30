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

var date = document.lastModified;
document.getElementById("modified").textContent = date;

// var options = { month: "numeric", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric"};
// var d = document.lastModified().toLocaleDateString("en-US", options);
// document.getElementById("modified").textContent = d ;