// ITEMS FROM DOM
const navButton = document.getElementById('nav-button');


// HAMBURGER MENU FUNCTION
addClassChange = () => {

    navButton.classList.toggle('change');
}

// PRELOADER
  setTimeout(function(){
    $('#preloader-active').toggle();
},50);

// SCROLL TOP APPEAR BACKGROUND ON NAVBAR
$(window).scroll(function(){
  let position = $(this).scrollTop();
  if(position >=800){
    $('.header-transparent').addClass('color');


  }else {
    $('.header-transparent').removeClass('color');




  }
});




// EVENT LISTENERS
navButton.addEventListener('click', addClassChange);  // change class on hamburger menu