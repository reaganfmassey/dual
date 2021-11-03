const DEFAULT = 0
var geocoder  = new google.maps.Geocoder();             // create a geocoder object
var location  = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);    // turn coordinates into an object
let geocode = geocoder.geocode({'latLng': location}, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {           // if geocode success
        var add = results[0].formatted_address;         // if address found, pass to processing function
        document.write(add);
    }
        var geoJSON = {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    //location
                    coordinates: [-0.032, 38.913]
                },
                properties: {
                    title: 'Mapbox',
                    //city
                    description: 'Washington, D.C.'
                }
            }]
        };
        console.log(geoJSON["features"['type']])


        function addMarker(geoJSON) {
            console.log(geoJSON["properties"]);
        }
    }
);


