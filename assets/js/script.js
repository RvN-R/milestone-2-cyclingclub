// // Initialize and add the map
// function initMap() {
//     // The location of Center London
//     let london = {
//         lat: 51.5074,
//         lng: -0.1278
//     };
//     // The map, centered at Center London
//     let map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 10,
//         center: london,
//     });

// }


// function lunchRide() {
//     // The location of Lunch Time Ride - Battersea Band Stand
//     let batterseaBandStand = {
//         lat: 51.4793,
//         lng: -0.1581
//     };

//     //The marker, positioned Battersea Park Band Stand Lunch Time Ride
//     let batterseaMarker = new google.maps.Marker({
//         position: batterseaBandStand,
//         map: map,
//     });


// }

// function initMap() {
//     const directionsService = new google.maps.DirectionsService();
//     const directionsRenderer = new google.maps.DirectionsRenderer();
//     let message = "Button Been Pressed"
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 6,
//         center: {
//             lat: 51.4793,
//             lng: -0.1581
//         },
//     });
//     directionsRenderer.setMap(map);
//     let SRButton = document.getElementById("lunchTimeRideButton");
//     SRButton.addEventListener("click", () => {
//         calculateAndDisplayRoute(directionsService, directionsRenderer);
//         console.log(message);

//     });

// }

// Initialize and add the map
function initMap() {
    // Setting Locations
    let london = {
        lat: 51.4793238,
        lng: -0.1581354
    };

    // The map, centered at Uluru
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: london,
    });

    document.getElementById("lunchTimeRideButton").addEventListener("click", () => {
        let marker = new google.maps.Marker({
            position: london,
            map: map,
        });
    });

}