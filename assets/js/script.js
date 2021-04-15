// Initialize and add the map
function initMap() {
    // The location of Center London
    let london = {
        lat: 51.5074,
        lng: -0.1278
    };
    // The map, centered at Center London
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: london,
    });

}

function lunchRide() {
    // The location of Lunch Time Ride - Battersea Band Stand
    let batterseaBandStand = {
        lat: 51.4793,
        lng: -0.1581
    };

    //The marker, positioned Battersea Park Band Stand Lunch Time Ride
    let batterseaMarker = new google.maps.Marker({
        position: batterseaBandStand,
        map: map,
    });


}