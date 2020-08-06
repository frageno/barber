// ITEMS FROM DOM
let navButton = document.getElementById('nav-button');


// HAMBURGER MENU FUNCTION
addClassChange = () => {

    navButton.classList.toggle('change');
}

// PRELOADER
  setTimeout(function(){
    $('#preloader-active').toggle();
},50);

// SCROLL TOP APPEAR BACKGROUND ON NAVBAR
$(window).scroll(()=>{
  let position = $(this).scrollTop();
  if(position >=650){
    $('.header-transparent').addClass('color');


  }else {
    $('.header-transparent').removeClass('color');

  }
});
// Scroll to top button
const scrollToTop = document.querySelector("#scrollToTop");
scrollToTop.addEventListener('click', function (){
  window.scrollTo({
    top:0,
    left:0,
    behavior: 'smooth'
  });
});

// SCROLL ANIMATION ON ABOUT US ITEMS
$(window).scroll(()=>{
  let position = $(this).scrollTop();
  if(position >=50){
    $('.about-us').addClass('about-us__left');
    $('.about-us2').addClass('about-us__right');
  }
  else {
    $('.about-us').removeClass('about-us__left');
    $('.about-us2').removeClass('about-us__right');
  }
  if(position >= 750){
    $('.about-us3').addClass('about-us__left');
    $('.about-us4').addClass('about-us__right');
  }else {
    $('.about-us3').removeClass('about-us__left');
    $('.about-us4').removeClass('about-us__right');
  }
});
// Read more or read less button
document.querySelectorAll(".showmore").forEach(function (p) {
  p.querySelector("a").addEventListener("click", function () {
    p.classList.toggle("show");
    console.log(this);
    this.textContent = p.classList.contains("show") ? "Read Less" : "Read More";
  });
});







// EVENT LISTENERS
navButton.addEventListener('click', addClassChange);  // change class on hamburger menu