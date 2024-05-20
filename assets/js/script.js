(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  // navigation
  $(window).scroll(function () {
    if ($('.navigation').offset().top > 1) {
      $('.navigation').addClass('nav-bg');
    } else {
      $('.navigation').removeClass('nav-bg');
    }
  });

  // //  Search Form Open
  // $('#searchOpen').on('click', function () {
  //   $('.search-wrapper').addClass('open');
  //   setTimeout(function () {
  //     $('.search-box').focus();
  //   }, 400);
  // });
  // $('#searchClose').on('click', function () {
  //   $('.search-wrapper').removeClass('open');
  // });

  // // image blog nom : clickable-image-open
  //   const image = document.querySelector(".clickable-image-open");

  //   image.addEventListener("click", () =>{
  //   image.classList.add("image-open");
  //   })
  
  // // image blog nom : clickable-image-close
  //   const image2 = document.querySelector(".clickable-image-close");

  //   image2.addEventListener("click", () =>{
  //   image2.classList.add("image-close");
    })
  

})(jQuery);
