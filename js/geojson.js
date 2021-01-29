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

    var trainStation = L.ExtraMarkers.icon({
        icon: 'fa-train',
        markerColor: 'cyan',
        shape: 'square',
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
                'coordinates': [8999,10456]
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
