//MAP JS 
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
            routeName: 'Lunch Ride',
            routeDetails: {
                origin: 'The London Peace Pagoda, Carriage Drive North, London, UK',
                destination: 'Prince Albert, Albert Bridge Road, London, UK',
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
        },

        {
            routeName: 'Saturday Ride',
            routeDetails: {
                origin: 'The Dynamo, Putney Bridge Road, London, UK',
                destination: 'The Rocket, Brewhouse Lane, London, UK',
                waypoints: [{
                    location: 'Parkcycle Richmond Park, Roehampton Gate Car Park, Priory Lane, London, UK',
                    stopover: false
                }, {
                    location: 'Isabella Plantation Cafe, Broomfield Hill, Kingston upon Thames, UK',
                    stopover: false
                }, {
                    location: 'Kingston Gate, Richmond Park, Kingston upon Thames, UK',
                    stopover: false
                }, {
                    location: 'The Royal Star and Garter Home, Richmond, UK',
                    stopover: false
                }, {
                    location: 'Parkcycle Richmond Park, Roehampton Gate Car Park, Priory Lane, London, UK',
                    stopover: false
                }, {
                    location: 'Parkcycle Richmond Park, Roehampton Gate Car Park, Priory Lane, London, UK',
                    stopover: false
                }, ],
                optimizeWaypoints: false,
                travelMode: google.maps.TravelMode.BICYCLING,
            }
        }
    ]

    // addEventListener executes directions.Renderer when button with ID lunchTimeRideButton is clicked
    directionsRenderer.setMap(map);
    document.getElementById("lunchTimeRideButton").addEventListener("click", () => {
        showRoute(ROUTES[0].routeName, ROUTES[0].routeDetails, directionsService, directionsRenderer)
    });

    // addEventListener executes directions.Renderer when button with ID SaturdayRideButton is clicked
    directionsRenderer.setMap(map);
    document.getElementById("SaturdayRideButton").addEventListener("click", () => {
        showRoute(ROUTES[1].routeName, ROUTES[1].routeDetails, directionsService, directionsRenderer)
    });


    /** Function calls parameters within the ROUTE variable and links that to directionService.route
     * 
     * param {string} - route - provides string of location, which calls longitude and latitude information from pollyfill script in HTML
     * 
     * param {html} - summaryPanel - HTML of trip that is then pushed to a <div> with the id RideInfo 
     * 
     */
    function showRoute(routeName, route, directionsService, directionsRenderer) {
        directionsService.route(route, (response, status) => {
            if (status === "OK" && response) {
                directionsRenderer.setDirections(response);
                const route = response.routes[0];
                const summaryPanel = document.getElementById("RideInfo");
                summaryPanel.innerHTML = "";

                // Display summary information for Lunch Time Ride.
                for (let i = 0; i < route.legs.length; i++) {
                    const routeSegment = i + 1;
                    summaryPanel.innerHTML +=
                        `<b>${routeName}</b>` + "<br></br>";
                    summaryPanel.innerHTML += "<b>Meeting point (A): </b>" + route.legs[i].start_address + "<br></br>";
                    summaryPanel.innerHTML += "<b>Ending point (B): </b>" + route.legs[i].end_address + "<br></br>";
                    summaryPanel.innerHTML += "<b>Total Distance of Route: </b>" + route.legs[i].distance.text + "<br></br>";
                }
            } else {
                window.alert("Directions request failed due to " + status);
            }
        });


    }

    // JS for Styling HTML
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

    //JS FORM
    /** Function linking form to EmailJS , if successful toggles a modal and resets form. 
     * 
     * para {string} - contact_service - Name of email template you are trying to link form with
     * 
     * para {string} - contact_form - Email Tempalates Template ID
     * */

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