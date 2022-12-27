let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,

  effect: "cube",

  cubeEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 2,
    shadowScale: 0.5,
  },

  autoplay: {
    delay: 5000,
  },
  speed:700,

});



/* page-portfolio */

/*  function projectVisibility(){
  document.getElementById('afonino');
} 

document.querySelector('afonino').addEventListener('click', function (e) {
  var div = document.querySelector('swiper-project-afonino')
  div.style.display = div.style.display === 'none' ? 'block' : 'none'
}) */

/* ham menu */


