;(function (window) {
    // geoJson definitions
    window.geoInfoTrains = [
        {
            'type': 'Feature',
            'properties': {
                'name': 'Gare du Zoo',
                'link': 'http://minetest.amelieonline.net/doku.php?id=train:zoo',
                'icon': 'fa-train',
                'image': 'http://minetest.amelieonline.net/lib/exe/fetch.php?w=600&tok=24c205&media=screenshot_20210110_184336.png',
                'description': 'Permet de prendre le petit train du Zoo.<br>C\'est un trajet relativement court qui attend le visiteur mais qui vaut le coup ! '
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
                'icon': 'fa-train',
                'image': '',
                'description': ''
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
                'icon': 'fa-train',
                'image': '',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8865,10739]
            }
        },
    ]
}(window))
