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






  
  // image partie blog ( ouverture popup)
  $(document).ready(function() {

    function showImage(fullPath , fullPath2) {
        var id = '#dialog';
        if (fullPath == "image") {
            var fullImagePath =
                fullPath;
        }
        if (fullPath2 == "image2") {
            var fullImagePath =
                fullPath2;
        }
        if (fullPath == "image3") {
            var fullImagePath =
                fullPath;
        }
        if (fullPath == "image4") {
            var fullImagePath =
                fullPath;
        }
        if (fullPath == "image5") {
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
  
})(jQuery);
