;(function (window) {
    // Markers
    var spawnStation = L.ExtraMarkers.icon({
        icon: 'fa-anchor',
        markerColor: 'red',
        shape: 'star',
        prefix: 'fa'
    });

    var archeoSite = L.ExtraMarkers.icon({
        icon: 'fa-landmark',
        markerColor: 'cyan',
        shape: 'square',
        prefix: 'fa'
    });

    var metroStation = L.ExtraMarkers.icon({
        icon: 'fa-subway',
        markerColor: 'blue',
        shape: 'circle',
        prefix: 'fa'
    });

    var house = L.ExtraMarkers.icon({
        icon: 'fa-home',
        markerColor: 'violet',
        shape: 'square',
        prefix: 'fa'
    });

    var castle = L.ExtraMarkers.icon({
        icon: 'fa-dungeon',
        markerColor: 'violet',
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
    window.geoInfo = [
        {
            'type': 'Feature',
            'properties': {
                'name': 'Spawn Station',
                'id': spawnStation
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [22087, 15321]
            }
        },
        // Castles
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chateau dans le ciel',
                'id': castle
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [22088,14112]
            }
        },
        // Homes
        {
            'type': 'Feature',
            'properties': {
                'name': 'Tour YYZ',
                'id': house
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [21807,15415]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Maison YYZ "Loin de tout"',
                'id': house
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [20372,6946]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chez Jym',
                'id': house
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [21714,15305]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Maisons Mikabrak et Cloud',
                'id': house
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [21536,15081]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chez Nathy & Lili',
                'id': house
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [23006,15916]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Cabane de Guillaume',
                'id': house
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [21890,15284]
            }
        },
        // Trains
        {
            'type': 'Feature',
            'properties': {
                'name': 'St. Chateau Royal',
                'id': metroStation
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [22223,15290]
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
                'coordinates': [21989,15317]
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
                'coordinates': [21887,15451]
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
                'coordinates': [22286,15378]
            }
        },
        // Misc
        {
            'type': 'Feature',
            'properties': {
                'name': 'Forum',
                'id': building
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [22006,15538]
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
                'coordinates': [21581, 6327]
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
                'coordinates': [19222,5831]
            }
        },
    ]
}(window))
