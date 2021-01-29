;(function (window) {
    // Markers
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

    // geoJson definitions
    window.geoInfoHomes = [
        // Castles
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chateau dans le ciel',
                'id': castle
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [9002,9234]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chateau Royal',
                'id': castle
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [9138,10437]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chateau Amelaye',
                'id': castle
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8973,10536]
            }
        },
        // Homes
        {
            'type': 'Feature',
            'properties': {
                'name': 'Cottage',
                'id': house
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [9080,10563]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Tour YYZ',
                'id': house
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8720,10547]
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
                'coordinates': [7280,2087]
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
                'coordinates': [8624,10445]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chez Mikabrak',
                'id': house
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8464,10217]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chez Cloud',
                'id': house
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8371,10188]
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
                'coordinates': [9912,11037]
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
                'coordinates': [8804,10424]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Maison de Baobab',
                'id': house
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [9352,10552]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chez Bledar',
                'id': house
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [9106,10242]
            }
        },
    ]
}(window))
