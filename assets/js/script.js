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
        $('.window2 .close2').click(function(e) {
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

   // image partie blog  img 3 ( ouverture popup)
  $(document).ready(function() {
    function showImage3(fullPath3) {
        var id = '#dialog3';
        if (fullPath3 == "image3") {
            var fullImagePath3 =
                fullPath3;
        }
        $('.image3').attr({
            'src': fullImagePath3
        });
        //if close button is clicked
        $('.window3 .close3').click(function(e) {
            //Cancel the link behavior
            e.preventDefault();
            $('#mask3').removeClass('showing3');
        });
    };
    $(".showImage3").on("click", function() {
        showImage3($(this).text());
        $('#mask3').addClass('showing3');
    });
  });

 // image partie blog  img 4( ouverture popup)
  $(document).ready(function() {
    function showImage4(fullPath4) {
        var id = '#dialog4';
        if (fullPath4 == "image4") {
            var fullImagePath4 =
                fullPath4;
        }
        $('.image4').attr({
            'src': fullImagePath4
        });
        //if close button is clicked
        $('.window4 .close4').click(function(e) {
            //Cancel the link behavior
            e.preventDefault();
            $('#mask4').removeClass('showing4');
        });
    };
    $(".showImage4").on("click", function() {
        showImage4($(this).text());
        $('#mask4').addClass('showing4');
    });
  });

 // image partie blog  img 5 ( ouverture popup)
  $(document).ready(function() {
    function showImage5(fullPath5) {
        var id = '#dialog5';
        if (fullPath5 == "image5") {
            var fullImagePath5 =
                fullPath5;
        }
        $('.image5').attr({
            'src': fullImagePath5
        });
        //if close button is clicked
        $('.window5 .close5').click(function(e) {
            //Cancel the link behavior
            e.preventDefault();
            $('#mask5').removeClass('showing5');
        });
    };
    $(".showImage5").on("click", function() {
        showImage5($(this).text());
        $('#mask5').addClass('showing5');
    });
  });



  
  
})(jQuery);
