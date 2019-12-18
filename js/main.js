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


        var flipCardWidth = $('.flip-card').width();
        $('.flip-card, .flip-card-back').css({
            'height': flipCardWidth + 'px'
        });
        var navHeight = $('nav').height() - 32;
        console.log(navHeight);
        $('body').css({
            'margin-top': navHeight + 'px'
        });
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
    
    initAutocomplete("Origin");
    initAutocomplete("Destination");
});

function myMap() {
    let mapProp = {
        center: new google.maps.LatLng(40.714, -74.005),
        zoom: 10,
        streetViewControl: false,
    };
    let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    let cityCircle = new google.maps.Circle({
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

function showBookingMap(){    
    let mapProp = {
        center: new google.maps.LatLng(40.714, -74.005),
        zoom: 10,
        streetViewControl: false,
    };
    let map = new google.maps.Map(document.getElementById("bookingMap"), mapProp);
}

function initAutocomplete(suffix) {
    var addressField = document.getElementById('address' + suffix);
    
    var options = {
      types: ['geocode'],
      componentRestrictions: { 'country': 'us' }
    };
    
    var autocomplete = new google.maps.places.Autocomplete(addressField, options);

    autocomplete.setFields(['address_component']);
    
    autocomplete.addListener('place_changed', function () {
        fillInAddress();
    });
}

function fillInAddress() {
    
}
