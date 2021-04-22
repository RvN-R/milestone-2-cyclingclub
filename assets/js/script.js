//initMap function initalises the map onto the page. 
function initMap() {
    let directionsRenderer = new google.maps.DirectionsRenderer();
    let directionsService = new google.maps.DirectionsService();
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat: 51.4793238,
            lng: -0.1581354
        },
    });

    /** Varible ROUTES holds name and details of route in an array. 
     * param - {string} routeName holds the name of the route
     * param - {string} routeDetails holds an array of the routes orign, destination and waypoint. 
     */

    const ROUTES = [{
        routeName: 'LunchRide',
        routeDetails: {
            origin: 'The London Peace Pagoda, Carriage Drive North, London, UK',
            destination: 'The London Peace Pagoda, Carriage Drive North, London, UK',
            waypoints: [{
                location: 'Chelsea Bridge, Chelsea Bridge Road, London, UK',
                stopover: false
            }, {
                location: 'Embassy of Lithuania, Bessborough Gardens, London, UK',
                stopover: false
            }, {
                location: 'Wellington Arch, Apsley Way, London, UK',
                stopover: false
            }, {
                location: 'The Lodge Cafe., London, UK',
                stopover: false
            }, {
                location: 'Will to Win Hyde Park Sport Centre, South Carriage Drive, London, UK',
                stopover: false
            }, {
                location: 'Albert Bridge Road, London, UK',
                stopover: false
            }, ],
            optimizeWaypoints: false,
            travelMode: google.maps.TravelMode.BICYCLING,
        }
    }]

    console.log(ROUTES[0].routeName, ROUTES[0].routeDetails, directionsService, directionsRenderer);








    // Function controls hover effect of SaturdayRideButton

    $("#SaturdayRideButton").mouseenter(function () {
        $("#SaturdayRideButton").removeClass("SaturdayRideButtonPassive").addClass("SaturdayRideButtonActive");
    });

    $("#SaturdayRideButton").mouseleave(function () {
        $("#SaturdayRideButton").removeClass("SaturdayRideButtonActive").addClass("SaturdayRideButtonPassive");
    });

    // Function controls hover effect of lunchTimeRideButton

    $("#lunchTimeRideButton").mouseenter(function () {
        $("#lunchTimeRideButton").removeClass("lunchTimeRideButtonPassive").addClass("lunchTimeRideButtonActive");
    });

    $("#lunchTimeRideButton").mouseleave(function () {
        $("#lunchTimeRideButton").removeClass("lunchTimeRideButtonActive").addClass("lunchTimeRideButtonPassive");
    });

    //Function controls hover effect of form-send-button

    $("#form-send-button").mouseenter(function () {
        $("#form-send-button").removeClass("form-send-button-passive").addClass("form-send-button-active");
    });

    $("#form-send-button").mouseleave(function () {
        $("#form-send-button").removeClass("form-send-button-active").addClass("form-send-button-passive");
    });

    // Function linking form to EmailJS
    window.onload = function () {
        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;
            //once form exectus it resets the form and triggers a modal if successful. 
            emailjs.sendForm('contact_service', 'contact_form', this)
                .then(function () {
                    console.log('SUCCESS!');
                    $("#exampleModal").modal("toggle");
                    $("#contact-form").trigger("reset");
                }, function (error) {
                    console.log('FAILED...', error);
                });
        });
    }
}