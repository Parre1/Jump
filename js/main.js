$(document).ready(function(){
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $('.navbar').fadeOut(500);
    } else {
      $('.navbar').fadeIn(500);
    }
  });

  });
