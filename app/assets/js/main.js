$(function() {
    $("#hero .heros").responsiveSlides({
        auto: true
    });

    $("#brillen .brands").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds

        items : 7,
        itemsMobile: [479,2],
        itemsTablet: [768,3],
        itemsDesktopSmall: [979, 5],
        itemsDesktop: false

    });
});
