$('.carousel').carousel({

});
$(document).ready(function () {
    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);
    var $pane = $('#pane1');

    function checkWidth() {
        var windowWidth = $window.width();
        var windowHeight = $window.height();
        var aspectRatio = windowWidth / windowHeight;
        if (aspectRatio < 1.2) {
            $("#firstImg").attr("src", "img/landingAirplaneSq.jpg");
            $("#secondImg").attr("src", "img/nycBrooklynBridgeSq.jpg");
            $("#thirdImg").attr("src", "img/openingDoorSq.jpg");
        } else {
            $("#firstImg").attr("src", "img/landingAirplane2x.jpg");
            $("#secondImg").attr("src", "img/nycBrooklynBridge2x.jpg");
            $("#thirdImg").attr("src", "img/openingDoor2x.jpg");
        }


        var elementWidth = $('.flip-card').width();
        $('.flip-card').css({
            'height': elementWidth + 'px'
        });
        if (windowWidth < 993) {
            $('.flip-card-back').css({
                'font-size': '1.5em'
            });
        } else {

            $('.flip-card-back').css({
                'font-size': '1.2em'
            });
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.714, -74.005),
        zoom: 10,
        streetViewControl: false,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var cityCircle = new google.maps.Circle({
        strokeColor: '#03fc0b',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#03fc0b',
        fillOpacity: 0.25,
        map: map,
        center: {
            lat: 40.714,
            lng: -74.005
        },
        radius: 45000
    });
}
