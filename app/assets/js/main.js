$(function() {
    $("#hero .heros").owlCarousel({
        autoPlay: 9000,

        singleItem: true,
        slideSpeed: 500,
        pagination: false
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
