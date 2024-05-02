// univerisal selectors
const themeDefault = document.querySelectorAll('.theme-default');
const themeOpposite = document.querySelectorAll('.theme-default-opposite');
const popupOpenBtn = document.querySelector('.open-btn');
const nav = document.querySelectorAll('.nav-item')
const button = document.querySelectorAll('.button');
const signature = document.querySelector('.signature');
const profilepic = document.querySelector('.profile-pic');
const logo = document.querySelector('.logo');

// coffee selectors
const coffeeButton = document.querySelector('.coffee');
const coffeeIcon = document.querySelector('.coffee-icon');
// toggle coffee 
coffeeButton.addEventListener('click', () => {
  coffeeIcon.classList.remove("fa-toggle-off");
  coffeeIcon.classList.add("fa-toggle-on");

  blackWhiteIcon.classList.remove("fa-toggle-on");
  blackWhiteIcon.classList.add("fa-toggle-off");

  greenIcon.classList.remove("fa-toggle-on");
  greenIcon.classList.add("fa-toggle-off");

  /*darkModeToggle.classList.remove("fa-toggle-on");
  darkModeToggle.classList.add("fa-toggle-off");*/

  profilepic.src = './images/headshot_coffee.jpg';
  signature.src = './images/signature_coffee_dark.png';
  themeDefault.forEach(el => el.style.backgroundColor = '#F2EDD7');
  themeDefault.forEach(el => el.style.color = '#755139');
  themeOpposite.forEach(el => el.style.backgroundColor = '#755139');
  themeOpposite.forEach(el => el.style.color = '#F2EDD7');
  button.forEach(el => el.style.border = '2px solid #755139');
  logo.style.color = '#755139';
  nav.forEach(el => el.style.color = '#755139');
})

// black & white selectors
const blackWhiteButton = document.querySelector('.bw');
const blackWhiteIcon = document.querySelector('.bw-icon');
// toggle black & white
blackWhiteButton.addEventListener('click', () => {
  blackWhiteIcon.classList.add("fa-toggle-on");
  blackWhiteIcon.classList.remove("fa-toggle-off");

  coffeeIcon.classList.remove("fa-toggle-on");
  coffeeIcon.classList.add("fa-toggle-off");

  greenIcon.classList.remove("fa-toggle-on");
  greenIcon.classList.add("fa-toggle-off");

  /*darkModeToggle.classList.remove("fa-toggle-on");
  darkModeToggle.classList.add("fa-toggle-off");*/

  profilepic.src = './images/headshot_black_white.jpg';
  signature.src = './images/signature_bnw_dark.png';
  themeDefault.forEach(el => el.style.backgroundColor = '#fff');
  themeDefault.forEach(el => el.style.color = '#000');
  themeOpposite.forEach(el => el.style.backgroundColor = '#000');
  themeOpposite.forEach(el => el.style.color = '#fff');
  button.forEach(el => el.style.border = '2px solid #000');
  logo.style.color = '#000';
  nav.forEach(el => el.style.color = '#000');
})

// natural green selectors
const greenButton = document.querySelector('.green');
const greenIcon = document.querySelector('.green-icon');
// toggle natural green
greenButton.addEventListener('click', () => {
  greenIcon.classList.add("fa-toggle-on");
  greenIcon.classList.remove("fa-toggle-off");

  blackWhiteIcon.classList.remove("fa-toggle-on");
  blackWhiteIcon.classList.add("fa-toggle-off");

  coffeeIcon.classList.remove("fa-toggle-on");
  coffeeIcon.classList.add("fa-toggle-off");

  /*darkModeToggle.classList.remove("fa-toggle-on");
  darkModeToggle.classList.add("fa-toggle-off");*/

  profilepic.src = './images/headshot_green.jpg';
  signature.src = './images/signature_green_dark.png';
  themeDefault.forEach(el => el.style.backgroundColor = '#F0EDCC');
  themeDefault.forEach(el => el.style.color = '#024d4a');
  themeOpposite.forEach(el => el.style.backgroundColor = '#024d4a');
  themeOpposite.forEach(el => el.style.color = '#F0EDCC');
  button.forEach(el => el.style.border = '2px solid #024d4a');
  logo.style.color = '#024d4a';
  nav.forEach(el => el.style.color = '#024d4a');
})

// dark mode selectors
/*
const darkModeButton = document.querySelector('.dark-mode');
const darkModeToggle = document.querySelector('.dark-mode-icon');
// toggle dark mode
darkModeButton.addEventListener('click', () => {
  if (darkModeToggle.classList.contains("fa-toggle-off")) {
    darkModeToggle.classList.remove("fa-toggle-off");
    darkModeToggle.classList.add("fa-toggle-on");

    if (coffeeIcon.classList.contains("fa-toggle-on")) {
      html.style.backgroundColor = '#755139';
      html.style.color = '#F2EDD7';
      signature.src = './images/signature_coffee_light.png';
    } else if (blackWhiteIcon.classList.contains("fa-toggle-on")) {
      html.style.backgroundColor = '#000';
      html.style.color = '#fff';
      signature.src = './images/signature_bnw_light.png';
    } else if (greenIcon.classList.contains("fa-toggle-on")) {
      html.style.backgroundColor = '#024d4a';
      html.style.color = '#F0EDCC';
      signature.src = './images/signature_green_light.png';
    }
  } 
  else if (darkModeToggle.classList.contains("fa-toggle-on")) {
    darkModeToggle.classList.remove("fa-toggle-on");
    darkModeToggle.classList.add("fa-toggle-off");

    if (coffeeIcon.classList.contains("fa-toggle-on")) {
      html.style.backgroundColor = '#F2EDD7';
      html.style.color = '#755139';
      signature.src = './images/signature_coffee_dark.png';
    } else if (blackWhiteIcon.classList.contains("fa-toggle-on")) {
      html.style.backgroundColor = '#fff';
      html.style.color = '#000';
      signature.src = './images/signature_bnw_dark.png';
    } else if (greenIcon.classList.contains("fa-toggle-on")) {
      html.style.backgroundColor = '#F0EDCC';
      html.style.color = '#024d4a';
      signature.src = './images/signature_green_dark.png';
    }
  }
})
*/



// light/dark box hovers
const turnDark = document.querySelectorAll('.turn-dark');
const turnLight = document.querySelectorAll('.turn-light');

turnDark.forEach((el) => el.addEventListener('mouseover', () => {
  el.classList.add("theme-default-opposite");
}));
turnDark.forEach((el) => el.addEventListener('mouseout', () => {
  el.classList.remove("theme-default-opposite");
}));
/*turnLight.forEach((el) => el.addEventListener('mouseover', () => {
  el.classList.remove("theme-default-opposite");
}));
turnLight.forEach((el) => el.addEventListener('mouseout', () => {
  el.classList.add("theme-default-opposite");
}));

/*
turnDark.addEventListener('mouseover', () => {
  turnDark.classList.add("theme-default-opposite");
});
turnDark.addEventListener('mouseout', () => {
  turnDark.classList.remove("theme-default-opposite");
});*/