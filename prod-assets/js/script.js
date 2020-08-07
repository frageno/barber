// ITEMS FROM DOM
let navButton = document.getElementById('nav-button');
const counters = document.querySelectorAll(".counter__counter");
const speed = 600;

counters.forEach(counter =>{


  const updateCount = () =>{
    const target = +counter.getAttribute('data-target');  // getting data-target value
    const count = +counter.innerText;   // getting value of count
    const inc = target / speed;   // increment value

    if(count < target){

      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount,1);
    }else{
      count.innerText = target;
    }

  }


  updateCount();



});






// HAMBURGER MENU FUNCTION
addClassChange = () => {

    navButton.classList.toggle('change');
}

// PRELOADER
  setTimeout(function(){
    $('#preloader-active').toggle();
},15);

// SCROLL TOP APPEAR BACKGROUND ON NAVBAR
$(window).scroll(()=>{
  let position = $(this).scrollTop();
  if(position >=350){
    $('.header-transparent').addClass('color');


  }else {
    $('.header-transparent').removeClass('color');

  }
});
// Scroll to top button
const scrollToTop = document.querySelector("#scrollToTop");
scrollToTop.addEventListener('click', function (){
  $('html, body').animate({scrollTop: 0 }, "slow");
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