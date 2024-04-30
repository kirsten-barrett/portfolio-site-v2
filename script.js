//slideshow from : https://www.w3schools.com/howto/howto_js_slideshow.asp
/*
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

*/


// coffee color
/*
const coffeeButton = document.querySelector('.coffee');
const coffeeIcon = document.querySelector('.coffee-icon');
const html = document.querySelector('html');

coffeeButton.addEventListener('click', () => {
  // console.log('this will turn everything coffee colored');
  if (coffeeIcon.classList.contains('fa-toggle-off')) {
    coffeeIcon.classList.remove("fa-toggle-off");
    coffeeIcon.classList.add("fa-toggle-on");
    html.style.backgroundColor = '#755139';
    html.style.color = '#F2EDD7';
  } else {
    coffeeIcon.classList.remove("fa-toggle-on");
    coffeeIcon.classList.add("fa-toggle-off");
    html.style.backgroundColor = '#F2EDD7';
    html.style.color = '#755139';
}})


/* color toggle off/on
const toggleIcon = document.querySelector('.fa-toggle-off');
const colorButton = document.querySelector('.color-button')

colorButton.addEventListener('click', () => {
  console.log('i clicked a toggle')
  if (toggleIcon.classList.contains('fa-toggle-off')) {
    toggleIcon.classList.remove("fa-toggle-off");
    toggleIcon.classList.add("fa-toggle-on");
  } else {
    toggleIcon.classList.remove("fa-toggle-on");
    toggleIcon.classList.add("fa-toggle-off");
}})
*/

// dark mode toggle
/*const toggleIcon = document.querySelector('.dark-mode');
const toggleButton = document.querySelector('.dark-mode-button')
const backgroundColor = document.querySelector('html').style.backgroundColor.value;
const color = document.querySelector('html').style.color.value;
/*
toggleButton.addEventListener('click', () => {
  if (toggleIcon.classList.contains('fa-toggle-off')) {
    toggleIcon.classList.remove("fa-toggle-off");
    toggleIcon.classList.add("fa-toggle-on");
    html.style.backgroundColor = '#000';
    html.style.color = '#fff';
  } else {
    toggleIcon.classList.remove("fa-toggle-on");
    toggleIcon.classList.add("fa-toggle-off");
    html.style.backgroundColor = '#fff';
    html.style.color = '#000';
  }
})
*/

