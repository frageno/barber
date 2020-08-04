// ITEMS FROM DOM
const navButton = document.getElementById('nav-button');


// HAMBURGER MENU FUNCTION
addClassChange = () => {

    navButton.classList.toggle('change');
}
// Wrap every letter in a span


// EVENT LISTENERS
navButton.addEventListener('click', addClassChange);  // change class on hamburger menu