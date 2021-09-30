
//carousel for partners badges
$(document).ready(function(){
    $('.partner-carousel-inner').slick({
        variableWidth: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 300,
        autoplay: true,
        arrows: true
    });
  });

  $(document).ready(function(){
    $('.testimonials-carousel-inner').slick({
        infinite: true,
        speed: 300,
        autoplay: true,
        dots: true
    });
  });

  $(document).ready(function(){
    $('.banner-carousel-inner').slick({
        infinite: true,
        speed: 800,
        autoplay: true,
        arrows: true
    });
  });
