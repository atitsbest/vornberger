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

    $(".heros").responsiveSlides({
        auto: true
    });

    // $(".brands.schmuck").owlCarousel({
    //     autoPlay: 3000, //Set AutoPlay to 3 seconds
    //     pagination: false,
    //     itemScaleUp: true,
    //     items : 5,
    //     itemsMobile: [479,2],
    //     itemsTablet: [768,3],
    //     itemsDesktopSmall: [979, 5],
    //     itemsDesktop: false
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

        var map = new google.maps.Map($('#anfahrt')[0], mapOptions);
        marker.setMap(map);
        map.set('styles', [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#99c018"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]);
    });
});
