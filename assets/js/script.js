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

    // Only exicute calculateAndDisplayLunchRoute when Lunch Time Button is Clicked
    directionsRenderer.setMap(map);
    document.getElementById("lunchTimeRideButton").addEventListener("click", () => {
        calculateAndDisplayLunchRoute(directionsService, directionsRenderer);
    });

    // Only exicute calculateAndDisplaySaturdayRoute when Lunch Time Button is Clicked
    directionsRenderer.setMap(map);
    document.getElementById("SaturdayRideButton").addEventListener("click", () => {
        calculateAndDisplaySaturdayRoute(directionsService, directionsRenderer);
    });
}

//Below function provides the google initMap function the Orgin, Destination and Waypoint information to then render Lunch Time Route on the map. Also specify which mode of transport you want to use when following the route
function calculateAndDisplayLunchRoute(directionsService, directionsRenderer) {
    directionsService.route({
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
        },

        // Provding API recieves OK route should be displayed in div with the ID "lunchTimeRideInfo"
        (response, status) => {
            if (status === "OK" && response) {
                directionsRenderer.setDirections(response);
                const route = response.routes[0];
                const summaryPanel = document.getElementById("RideInfo");
                summaryPanel.innerHTML = "";

                // Display summary information for Lunch Time Ride.
                for (let i = 0; i < route.legs.length; i++) {
                    const routeSegment = i + 1;
                    summaryPanel.innerHTML +=
                        "<b>Lunch Time Ride:</b>" + "<br></br>";
                    summaryPanel.innerHTML += "<b>Meeting point: </b>" + route.legs[i].start_address + "<br></br>";
                    summaryPanel.innerHTML += "<b>Total Distance of Route: </b>" + route.legs[i].distance.text + "<br></br>";
                }
            } else {
                window.alert("Directions request failed due to " + status);
            }
        }
    );
}

//Below function provides the google initMap function the Orgin, Destination and Waypoint information to then render the Saturday ride on the map. Also specify which mode of transport you want to use when following the route

function calculateAndDisplaySaturdayRoute(directionsService, directionsRenderer) {
    directionsService.route({
            origin: 'The Dynamo, Putney Bridge Road, London, UK',
            destination: 'The Dynamo, Putney Bridge Road, London, UK',
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
        },

        // Provding API recieves OK route should be displayed in div with the ID "lunchTimeRideInfo"
        (response, status) => {
            if (status === "OK" && response) {
                directionsRenderer.setDirections(response);
                const route = response.routes[0];
                const summaryPanel = document.getElementById("RideInfo");
                summaryPanel.innerHTML = "";

                // Display summary information for Lunch Time Ride.
                for (let i = 0; i < route.legs.length; i++) {
                    const routeSegment = i + 1;
                    summaryPanel.innerHTML +=
                        "<b>Saturday Ride:</b>" + "<br></br>";
                    summaryPanel.innerHTML += "<b>Meeting point: </b>" + route.legs[i].start_address + "<br></br>";
                    summaryPanel.innerHTML += "<b>Total Distance of Route: </b>" + route.legs[i].distance.text + "<br></br>";
                }
            } else {
                window.alert("Directions request failed due to " + status);
            }
        }
    );
}

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