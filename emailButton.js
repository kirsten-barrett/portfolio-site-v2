const emailBtn = document.querySelector('#email-btn');

if (window.screen.width < 375) {
    emailBtn.innerHTML = "<i class='fa-regular fa-envelope' style='font-size: 1.1rem'></i>";
}