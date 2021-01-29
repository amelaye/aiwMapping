;(function (window) {
    // Markers
    var archeoSite = L.ExtraMarkers.icon({
        icon: 'fa-landmark',
        markerColor: 'orange',
        shape: 'square',
        prefix: 'fa'
    });

    var building = L.ExtraMarkers.icon({
        icon: 'fa-building',
        markerColor: 'orange',
        shape: 'square',
        prefix: 'fa'
    });

    var industrial = L.ExtraMarkers.icon({
        icon: 'fa-industry',
        markerColor: 'orange',
        shape: 'square',
        prefix: 'fa'
    });

    // geoJson definitions
    window.geoInfoMisc = [
        // Misc
        {
            'type': 'Feature',
            'properties': {
                'name': 'Forum',
                'id': building
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8894,10673]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Site archéologique',
                'id': archeoSite
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8494,1499]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Garage YYZ',
                'id': industrial
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [6088,980]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Minoterie',
                'id': industrial
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8760,10804]
            }
        },
    ]
}(window))
