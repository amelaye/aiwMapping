;(function (window) {
    // Markers
    var metroStation = L.ExtraMarkers.icon({
        icon: 'fa-subway',
        markerColor: 'blue',
        shape: 'circle',
        prefix: 'fa'
    });

    // geoJson definitions
    window.geoInfoMetro = [
        // Trains
        {
            'type': 'Feature',
            'properties': {
                'name': 'St. Chateau Royal',
                'id': metroStation
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [9148,10407]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'St. Place de l\'église',
                'id': metroStation
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8873,10480]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'St. Mansion Hill',
                'id': metroStation
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8794,10588]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'St. Phare',
                'id': metroStation
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [9196,10514]
            }
        },
    ]
}(window))
