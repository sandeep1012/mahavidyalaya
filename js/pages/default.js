$(document).ready(function () {
    var hasError = false;

    function welcomeSlide() {
        $('.owl-item').removeClass('prev next');
        var currentSlide = $('.welcome-slides .owl-item.active');
        currentSlide.next('.owl-item').addClass('next');
        currentSlide.prev('.owl-item').addClass('prev');
        var nextSlideImg = $('.owl-item.next').find('.single-welcome-slide').attr('data-img-url');
        var prevSlideImg = $('.owl-item.prev').find('.single-welcome-slide').attr('data-img-url');
        $('.owl-nav .owl-prev').css({
            background: 'url(' + prevSlideImg + ')'
        });
        $('.owl-nav .owl-next').css({
            background: 'url(' + nextSlideImg + ')'
        });
    }

    var slideObj = '';
    slideObj += '<div class="single-welcome-slide bg-img bg-overlay" style="background-image: url(img/bg-img/slider0.jpg);" data-img-url="img/bg-img/slider0.jpg">' +

       '<div class="welcome-content h-100">' +
           '<div class="container h-100">' +
               '<div class="row h-100 align-items-center">' +
                 '  <div class="col-12">' +
                    '   <div class="welcome-text text-center">' +
                      '     <h2 data-animation="fadeInLeft" style="color:white;">Vidya Varidhi Mahavidyalaya</h2>' +
                       '    <a href="#" class="" style="color:#FFB200;background-color:white;padding: 5px;border-radius: 8px" data-animation="fadeInLeft" data-delay="800ms">सा विद्या या विमुक्तये</a>' +
                       '</div>' +
                   '</div>' +
              ' </div>' +
           '</div>' +
      ' </div>' +
  ' </div>';
    //-------------
    slideObj += '<div class="single-welcome-slide bg-img bg-overlay" style="background-image: url(img/bg-img/slider1.jpg);" data-img-url="img/bg-img/slider2.jpg">' +

         '<div class="welcome-content h-100">' +
             '<div class="container h-100">' +
                 '<div class="row h-100 align-items-center">' +
                   '  <div class="col-12">' +
                      '   <div class="welcome-text text-center">' +
                        '     <h2 data-animation="fadeInLeft" style="color:white;">Vidya Varidhi Mahavidyalaya</h2>' +
                         '    <a href="#" class="" style="color:#FFB200;background-color:white;padding: 5px;border-radius: 8px" data-animation="fadeInLeft" data-delay="800ms">सा विद्या या विमुक्तये</a>' +
                         '</div>' +
                     '</div>' +
                ' </div>' +
             '</div>' +
        ' </div>' +
    ' </div>';
    slideObj += '<div class="single-welcome-slide bg-img bg-overlay" style="background-image: url(img/bg-img/slider2.jpg);" data-img-url="img/bg-img/slider3.jpg">' +

        '<div class="welcome-content h-100">' +
         '   <div class="container h-100">' +
          '      <div class="row h-100 align-items-center">' +
           '         <div class="col-12">' +
            '            <div class="welcome-text text-center">' +
             '               <h2 data-animation="fadeInUp" style="color:white;">Vidya Varidhi Mahavidyalaya</h2>' +
              '              <a href="#" class="" style="color:#FFB200;background-color:white;padding: 5px;border-radius: 8px;" data-animation="fadeInUp" data-delay="800ms">सा विद्या या विमुक्तये</a>' +
               '         </div>' +
                '    </div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>';
    slideObj += '<div class="single-welcome-slide bg-img bg-overlay" style="background-image: url(img/bg-img/slider3.jpg);" data-img-url="img/bg-img/slider4.jpg">' +

      '<div class="welcome-content h-100">' +
       '   <div class="container h-100">' +
        '      <div class="row h-100 align-items-center">' +
         '         <div class="col-12">' +
          '            <div class="welcome-text text-center">' +
           '               <h2 data-animation="fadeInUp" style="color:white;">Vidya Varidhi Mahavidyalaya</h2>' +
            '              <a href="#" class="" style="color:#FFB200;background-color:white;padding: 5px;border-radius: 8px;" data-animation="fadeInUp" data-delay="800ms">सा विद्या या विमुक्तये</a>' +
             '         </div>' +
              '    </div>' +
              '</div>' +
          '</div>' +
      '</div>' +
  '</div>';
    
    slideObj += '<div class="single-welcome-slide bg-img bg-overlay" style="background-image: url(img/bg-img/slider4.jpg);" data-img-url="img/bg-img/slider5.jpg">' +

    '<div class="welcome-content h-100">' +
     '   <div class="container h-100">' +
      '      <div class="row h-100 align-items-center">' +
       '         <div class="col-12">' +
        '            <div class="welcome-text text-center">' +
         '               <h2 data-animation="fadeInUp" style="color:white;">Vidya Varidhi Mahavidyalaya</h2>' +
          '              <a href="#" class="" style="color:#FFB200;background-color:white;padding: 5px;border-radius: 8px;" data-animation="fadeInUp" data-delay="800ms">सा विद्या या विमुक्तये</a>' +
           '         </div>' +
            '    </div>' +
            '</div>' +
        '</div>' +
    '</div>' +
'</div>';
    slideObj += '<div class="single-welcome-slide bg-img bg-overlay" style="background-image: url(img/bg-img/slider5.jpg);" data-img-url="img/bg-img/slider6.jpg">' +

    '<div class="welcome-content h-100">' +
     '   <div class="container h-100">' +
      '      <div class="row h-100 align-items-center">' +
       '         <div class="col-12">' +
        '            <div class="welcome-text text-center">' +
         '               <h2 data-animation="fadeInUp" style="color:white;">Vidya Varidhi Mahavidyalaya</h2>' +
          '              <a href="#" class="" style="color:#FFB200;background-color:white;padding: 5px;border-radius: 8px;" data-animation="fadeInUp" data-delay="800ms">सा विद्या या विमुक्तये</a>' +
           '         </div>' +
            '    </div>' +
            '</div>' +
        '</div>' +
    '</div>' +
'</div>';

    $('#slider').html(slideObj);
    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome-slides');
        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            nav: true
        })

        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });



        welcomeSlide();

        welcomeSlider.on('translated.owl.carousel', function () {
            welcomeSlide();
        });
    }

    //slider
    //$.ajax({
    //    type: "POST",
    //    url: "Default.aspx/getSliderData",
    //    data: "{}",
    //    contentType: "application/json; charset=utf-8",
    //    success: function (data) {
    //        var obj = $.parseJSON(data.d);
    //    },
    //    error: function (response) {
    //        hasError = true;
    //        console.log('slider error');
    //    }
    //});

})