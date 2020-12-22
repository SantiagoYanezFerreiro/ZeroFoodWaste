
  function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center: {
                lat: 70.419,
                lng: -58.94
            }
        });

        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var locations = [{
                lat: 40.785091,
                lng: -73.58
            }, {
                lat: 40.785091,
                lng: -73.58
            }, {
                lat: 40.785091,
                lng: -73.58
            }


        ];

        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });
        new MarkerClusterer(map, markers, {
            imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        });


    }
