
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

        

        //the following is how slick handles media queries
        /*
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
              */
    });
  });
