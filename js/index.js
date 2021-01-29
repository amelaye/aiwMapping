;(function (window) {
    function init (mapid) {
        function layerGeoGlobal(coords, map, rc, color, shape, prefix) {
            var layerGeo = L.geoJson(coords, {
                // correctly map the geojson coordinates on the image
                coordsToLatLng: function (coords) {
                    return rc.unproject(coords)
                },
                // add a popup content to the marker
                onEachFeature: function (feature, layer) {
                    if (feature.properties && feature.properties.name) {
                        let myDiv = '<h3><a href="'+feature.properties.link+'" target="blank_">'+feature.properties.name+'</a></h3>';
                        myDiv += '<img src="'+feature.properties.image+'" style="max-width:300px;"/><br />';
                        myDiv += feature.properties.description;

                        layer.bindPopup(myDiv)
                    }
                },
                pointToLayer: function (feature, latlng) {
                    let propertIcon = feature.properties.icon;
                    let myMarker = L.ExtraMarkers.icon({
                        icon: propertIcon,
                        markerColor: color,
                        shape: shape,
                        prefix: prefix
                    })
                    return L.marker(latlng, {
                        icon: myMarker
                    })
                }
            })
            map.addLayer(layerGeo)
            return layerGeo
        }

        function layerBounds (map, rc, img) {
            // set marker at the image bound edges
            var layerBounds = L.layerGroup([
                L.marker(rc.unproject([0, 0])).bindPopup('[0,0]'),
                L.marker(rc.unproject(img)).bindPopup(JSON.stringify(img))
            ])
            map.addLayer(layerBounds)

            // set markers on click events in the map
            map.on('click', function (event) {
                // to obtain raster coordinates from the map use `project`
                var coord = rc.project(event.latlng)
                // to set a marker, ... in raster coordinates in the map use `unproject`
                var marker = L.marker(rc.unproject(coord))
                    .addTo(layerBounds)
                marker.bindPopup('[' + Math.floor(coord.x) + ',' + Math.floor(coord.y) + ']')
                    .openPopup()
            })

            return layerBounds
        }

        var minZoom = 0
        var maxZoom = 9
        var img = [
            20000, // original width of image
            20000  // original height of image
        ]

        // create the map
        var map = L.map(mapid, {
            minZoom: minZoom,
            maxZoom: maxZoom
        })

        var rc = new L.RasterCoords(map, img)
        map.setView(rc.unproject([9000, 10554]), 7)
        L.control.layers({
            'Spawn': layerGeoGlobal(window.geoInfoSpawn, map, rc, 'red', 'star', 'fa'),
        }, {
            'Bounds': layerBounds(map, rc, img),
            'Homes': layerGeoGlobal(window.geoInfoHomes, map, rc, 'violet', 'square', 'fa'),
            'Metro': layerGeoGlobal(window.geoInfoMetro, map, rc, 'blue', 'circle', 'fa'),
            'Train stations': layerGeoGlobal(window.geoInfoTrains, map, rc, 'cyan', 'square', 'fa'),
            'Misc': layerGeoGlobal(window.geoInfoMisc, map, rc, 'orange', 'square', 'fa'),
        }).addTo(map)

        L.tileLayer('./tiles/{z}/{x}/{y}.png', {
            noWrap: true,
            attribution: 'Creation Amelie DUVERNET aka Amelaye <a href="http://minetest.amelieonline.net">Projet Amelaye In Minerland</a>'
        }).addTo(map)
    }

    init('map')
}(window))