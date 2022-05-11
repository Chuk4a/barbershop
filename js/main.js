// слайдер
$(document).ready(function(){
  $('.flex_card_slider').slick({
    arrows:true,
    infinity:true,
    speed:1000,
    autoplay:false,
    autoplaySpeed:3000,
    fade:true,
    
  }
    
  );
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
} ));




//                                 pop_up на Jquery  

// открытие рор ап окна

/*$('.open_pop_up').click(function(e) {
  e.preventDefault();
  $('.pop_up').fadeIn(600);
  $('html').addClass('no-scroll');
});

// закрытие рор ап окна при нажатие на крестик

$('.pop_up_close').click(function() {
  $('.pop_up').fadeOut(600);
  $('html').removeClass('no-scroll');
});

// закрытие в не зоне окна

$('.pop_up').click(function (e) {
  if (!$(e.target).closest(".popup").length) {
    $('.pop_up').fadeOut(600);
  }
});

<script>
    $('.open_pop_up a').on('click', function () {
        $('.pop_up').addClass('active');
        
      });
  </script>

/*                         pop_up  без jquery  на чистом js

const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');


openPopUp.addEventListener('click', function(e){
  e.preventDefault();
  popUp.classList.add('active');
}) 

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
})*/
