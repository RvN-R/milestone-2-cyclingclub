// Initialize and add the map
function initMap() {
    // Setting Locations
    let london = {
        lat: 51.4793238,
        lng: -0.1581354
    };

    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();
    let confirmButtonPress = ("Button has been pressed");



    // The map, centered at London
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: london,
    });

    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    document.getElementById("SaturdayRideButton").addEventListener("click", () => {
        console.log(confirmButtonPress);
    });

    document.getElementById("lunchTimeRideButton").addEventListener("click", () => {
        let marker = new google.maps.Marker({
            position: london,
            map: map,
        });
    });

}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService.route({
            origin: {
                lat: 37.77,
                lng: -122.447
            },
            destination: {
                lat: 37.768,
                lng: -122.511
            },
            // Note that Javascript allows us to access the constant
            // using square brackets and a string value as its
            // "property."
            travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
            if (status == "OK") {
                directionsRenderer.setDirections(response);
            } else {
                window.alert("Directions request failed due to " + status);
            }
        }
    );
}