const html = document.querySelector('html');

// coffee color
const coffeeButton = document.querySelector('.coffee');
const coffeeIcon = document.querySelector('.coffee-icon');

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

// vibrant color
const vibrantButton = document.querySelector('.vibrant');
const vibrantIcon = document.querySelector('.vibrant-icon');

vibrantButton.addEventListener('click', () => {
  // console.log('this will turn everything vibrant colored');
  if (vibrantIcon.classList.contains('fa-toggle-off')) {
    vibrantIcon.classList.remove("fa-toggle-off");
    vibrantIcon.classList.add("fa-toggle-on");
    html.style.backgroundColor = '#F95700';
    html.style.color = '#fff';
  } else {
    vibrantIcon.classList.remove("fa-toggle-on");
    vibrantIcon.classList.add("fa-toggle-off");
    html.style.backgroundColor = '#fff';
    html.style.color = '#F95700';
}})

// original green color
const greenButton = document.querySelector('.green');
const greenIcon = document.querySelector('.green-icon');

greenButton.addEventListener('click', () => {
  // console.log('this will turn everything vibrant colored');
  if (greenIcon.classList.contains('fa-toggle-off')) {
    greenIcon.classList.remove("fa-toggle-off");
    greenIcon.classList.add("fa-toggle-on");
    html.style.backgroundColor = '#F0EDCC';
    html.style.color = '#024d4a';
  } else {
    greenIcon.classList.remove("fa-toggle-on");
    greenIcon.classList.add("fa-toggle-off");
    html.style.backgroundColor = '#024d4a';
    html.style.color = '#F0EDCC';
}})