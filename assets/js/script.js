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






  
  // image partie blog  img 1 ( ouverture popup)
  $(document).ready(function() {

    function showImage(fullPath) {
        var id = '#dialog';
        if (fullPath == "image") {
            var fullImagePath =
                fullPath;
        }
        $('.image').attr({
            'src': fullImagePath
        });
        //if close button is clicked
        $('.window .close').click(function(e) {
            //Cancel the link behavior
            e.preventDefault();
            $('#mask').removeClass('showing');
        });
    };
    $(".showImage").on("click", function() {
        showImage($(this).text());
        $('#mask').addClass('showing');
    });
  });


 // image partie blog  img 2 ( ouverture popup)
  $(document).ready(function() {

    function showImage2(fullPath2) {
        var id = '#dialog2';
        if (fullPath2 == "image2") {
            var fullImagePath2 =
                fullPath2;
        }
        $('.image2').attr({
            'src': fullImagePath2
        });
        //if close button is clicked
        $('.window .close').click(function(e) {
            //Cancel the link behavior
            e.preventDefault();
            $('#mask2').removeClass('showing2');
        });
    };
    $(".showImage2").on("click", function() {
        showImage2($(this).text());
        $('#mask2').addClass('showing2');
    });
  });
  
  
})(jQuery);
