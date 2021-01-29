;(function (window) {
    // Markers
    var spawnStation = L.ExtraMarkers.icon({
        icon: 'fa-anchor',
        markerColor: 'red',
        shape: 'star',
        prefix: 'fa'
    });

    // geoJson definitions
    window.geoInfoSpawn = [
        {
            'type': 'Feature',
            'properties': {
                'name': 'Spawn Station',
                'id': spawnStation
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8999,10456]
            }
        },
    ]
}(window))
