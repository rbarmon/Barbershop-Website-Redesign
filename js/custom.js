
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".navbar").addClass("sticky-nav");
        } else {
            $(".navbar").removeClass("sticky-nav");
        }
    });

    // BACKSTRETCH SLIDESHOW
    $('#section_1').backstretch([
      // "images/slide/microsoft-edge-FAaz8lkinzs-unsplash.jpg", 
      // "images/slide/surface-1x5jnhtlp3Y-unsplash.jpg",
      // "images/slide/surface-71_s6RDJpGc-unsplash.jpg",
      
      "images/NC_images/general/pexels-thgusstavo-santana-1813272.jpg",
      "images/NC_images/general/pexels-thgusstavo-santana-2061820.jpg",
      "images/NC_images/general/pexels-nikolaos-dimou-1319459.jpg",
      "images/NC_images/general/pexels-nikolaos-dimou-1319460.jpg"
      
      // "images/slide/Untitled.jpeg",
      // "images/slide/amigo-barber-bg-01.jpg",
      // "images/slide/amigo-barber-bg-02.jpg",
      // "images/slide/amigo-barber-bg-03.jpg"
    ],  {duration: 2000, fade: 750});
    
  })(window.jQuery);


  // REVIEWS CAROUSEL
  $('.reviews-carousel').owlCarousel({
    items:3,
    loop:true,
    dots: false,
    nav: true,
    autoplay: true,
    margin:30,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    })


