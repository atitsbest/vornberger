$(function() {
    // Parallax scrolling background:
    // cache the window object
    $window = $(window);

    $('.container[data-type="background"]').each(function(){
        // declare the variable to affect the defined data-type
        var $scroll = $(this);

        $(window).scroll(function() {
            // HTML5 proves useful for helping with creating JS functions!
            // also, negative value because we're scrolling upwards
            var yPos = -($window.scrollTop() / $scroll.data('speed'));

            // background position
            var coords = '50% '+ yPos + 'px';

            // move the background
            $scroll.css({ backgroundPosition: coords });
        }); // end window scroll
    });  // end section function

    $("#hero .heros").responsiveSlides({
        auto: true
    });

    $("#brillen .brands").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds
        itemScaleUp: true,
        items : 7,
        itemsMobile: [479,2],
        itemsTablet: [768,3],
        itemsDesktopSmall: [979, 5],
        itemsDesktop: false

    });
});
