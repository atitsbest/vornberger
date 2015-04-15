$(function() {
    // Parallax scrolling background:
    // cache the window object
    $window = $(window);

    $('.heros img').imagesLoaded();

    $('div[data-type="background"]').each(function(){
        // declare the variable to affect the defined data-type
        var $scroll = $(this),
            pos = $scroll.position();

        // Unveränderte Hintergrund-Positionierung merken.
        $scroll.data('original-backgroundPosition', $scroll.css('backgroundPosition'));

        $(window).scroll(function() {
            if (Modernizr.mq('(min-width: 768px)')) {
                // HTML5 proves useful for helping with creating JS functions!
                // also, negative value because we're scrolling upwards
                var scrollTop = $window.scrollTop(),
                    speed = $scroll.data('speed'),
                    yPos = -(scrollTop-pos.top) / speed,
                    xPos = $scroll.data('pos-x')

                // background position
                var coords = xPos + ' '+ yPos + 'px';

                // console.log((scrollTop+viewportHeight)-pos.top+ ' => ' + speed);

                // move the background
                $scroll.css({ backgroundPosition: coords });
            }
            else {
                $scroll.css({ backgroundPosition: $scroll.data('original-backgroundPosition') });
            }
        }); // end window scroll
    });  // end section function

    $("#hero .heros").responsiveSlides({
        auto: true
    });

    // $("footer .brands").owlCarousel({
    //     autoPlay: 5000, //Set AutoPlay to 3 seconds
    //     pagination: false,
    //     itemScaleUp: true,
    //     items : 7,
    //     itemsMobile: [479,2],
    //     itemsTablet: [768,3],
    //     itemsDesktopSmall: [979, 5],
    //     itemsDesktop: false
    //
    // });

    google.maps.event.addDomListener(window, 'load', function initialize() {
        var latlng = new google.maps.LatLng(50.001058,12.083484);

        var mapOptions = {
            center: latlng,
            scrollwheel: false,
            streetViewControl: false,
            zoomControl: false,
            mapTypeControl: false,
            panControl: false,
            zoom: 16
        };

        var marker = new google.maps.Marker({
            position: latlng,
            url: '/',
            animation: google.maps.Animation.DROP
        });

        var map = new google.maps.Map($('#kontakt .col-xs-12')[0], mapOptions);
        marker.setMap(map);
    });
});
