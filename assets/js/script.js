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

    function showImage(fullPath) {
        var id = '#dialog';
        if (fullPath == "image") {
            var fullImagePath =
                fullPath ;
        }
        // if (fullPath == "image2") {
        //     var fullImagePath =
        //         "/assets/images/post/post-2.jpg"";
        }
        // if (fullPath == "image3") {
        //     var fullImagePath =
        //         "http://www.walldevil.com/wallpapers/a49/wallpapers-nature-wallpaper-peony-white-online-canada-corner-pink.jpg";
        // }
        // if (fullPath == "image4") {
        //     var fullImagePath =
        //         "http://wallpapercave.com/wp/Jp7kTmf.jpg";
        // }
        // if (fullPath == "image5") {
        //     var fullImagePath =
        //         "http://www.hdbloggers.net/wp-content/uploads/2016/06/Nature.jpg";
        // }


        $('.image').attr({
            'src': fullImagePath
        });

        //if close button is clicked
        $('.window .close').click(function(e) {
            //Cancel the link behavior
            e.preventDefault();

            $('#mask').removeClass('showing');
        });

    });

    $(".showImage").on("click", function() {
        showImage($(this).text());
        $('#mask').addClass('showing');

    });

});
  

})(jQuery);
