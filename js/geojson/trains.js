;(function (window) {
    // Markers
    var trainStation = L.ExtraMarkers.icon({
        icon: 'fa-train',
        markerColor: 'cyan',
        shape: 'square',
        prefix: 'fa'
    });

    // geoJson definitions
    window.geoInfoTrains = [
        {
            'type': 'Feature',
            'properties': {
                'name': 'Gare du Zoo',
                'id': trainStation
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8897,10610]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Site archéologique',
                'id': trainStation
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8533,1486]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Gare Centrale',
                'id': trainStation
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8865,10739]
            }
        },
    ]
}(window))
