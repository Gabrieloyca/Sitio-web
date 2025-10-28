const navbarToggle = document.querySelector('.navbar__toggle');
const navbarLinks = document.querySelector('.navbar__links');
const yearTag = document.getElementById('year');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('is-visible');
});

document.addEventListener('click', (event) => {
    if (!navbarLinks.contains(event.target) && !navbarToggle.contains(event.target)) {
        navbarLinks.classList.remove('is-visible');
    }
});

const updateYear = () => {
    if (yearTag) {
        yearTag.textContent = new Date().getFullYear();
    }
};

updateYear();
