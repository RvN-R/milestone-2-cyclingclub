// Initialize and add the map
function initMap() {
    // Setting Locations
    let london = {
        lat: 51.4793238,
        lng: -0.1581354
    };

    let albertBridge = {
        lat: 51.48266462110233,
        lng: -0.1665253491778361
    };

    let hydePark = {
        lat: 51.50624357808803,
        lng: -0.17264036049967665
    };

    let marbleArch = {
        lat: 51.513619091328465,
        lng: -0.1590325573598735
    }


    // The map, centered at London
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: london,
    });

    document.getElementById("lunchTimeRideButton").addEventListener("click", () => {
        let marker = new google.maps.Marker({
            position: london,
            zoom: 12,
            map: map,
        });

        let marker2 = new google.maps.Marker({
            position: albertBridge,
            zoom: 12,
            map: map,
        });

        let marker3 = new google.maps.Marker({
            position: hydePark,
            zoom: 12,
            map: map,
        });

        let marker4 = new google.maps.Marker({
            position: marbleArch,
            zoom: 12,
            map: map,
        });
    });

}