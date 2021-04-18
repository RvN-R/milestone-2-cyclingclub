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

    // Only exicute directionRender when Lunch Time Button is Clicked
    directionsRenderer.setMap(map);
    document.getElementById("lunchTimeRideButton").addEventListener("click", () => {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    });
}

//below function provides the google initMap funciton the Orgin, Destination and Waypoint information to then render on the map. Also specify which mode of transport you want to use when following the route
function calculateAndDisplayRoute(directionsService, directionsRenderer) {
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
            travelMode: google.maps.TravelMode.DRIVING,
        },

        // Provding API recieves OK route should be displayed in div with the ID "lunchTimeRideInfo"
        (response, status) => {
            if (status === "OK" && response) {
                directionsRenderer.setDirections(response);
                const route = response.routes[0];
                const summaryPanel = document.getElementById("lunchTimeRideInfo");
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