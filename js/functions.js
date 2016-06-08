$(document).ready(function(){
    //Set up of main carrousel with orbit slider
    $(document).foundation({
        orbit: {
            animation: 'fade',
            timer: true,
            timer_speed: 4000,
            timer_paused_class: 'slider-pause',
            slide_number: false,
            pause_on_hover: false,
            animation_speed: 1000,
            navigation_arrows: true,
            variable_height: true,
            swipe: true,
            bullets: true
        }
    });

    //Control to reveal modal of Quienes Somos
    $(document).foundation();    
    $('a.custom-close-reveal-modal').click(function(){
      $('#myModal').foundation('reveal', 'close');
    });

     //Slick controller for pre footer anunciantes
    $('.data-slick').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll:1,
        infinite: true,
        variableWidth: true,
        speed: 1000
    });


    //Change url direction in the viewer when user selects a mini-magazine
    $(document).ready(function() {
      $('.selectrev').click(function () {
          var url = $(this).attr('rel');
          $('#iframe').attr('src', url);
          $('#iframe').reload();
      });
    });
});