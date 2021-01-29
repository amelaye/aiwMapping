// Examples sur linuxforks pour le geojson (à s'inspirer)
/*load_geojson("Cities", "./geojson/cities.json", "city", "red");
load_geojson("Stations", "./geojson/stations.json", "train", "blue");
load_geojson("Shops", "./geojson/shops.json", "shopping-cart", "green");
load_geojson("Parks", "./geojson/parks.json", "tree", "darkgreen");
load_geojson("Libraries", "./geojson/libraries.json", "book-open", "darkblue");
load_geojson("CW Complexes", "./geojson/cw_complexes.json", "border-all", "black");
load_geojson("Courts", "./geojson/courts.json", "balance-scale", "black");
load_geojson("Waterway", "./geojson/waterway.json", "water", "darkblue");
load_geojson("Train Depots", "./geojson/depots.json", "wrench", "violet");
load_geojson("Streets", "./geojson/streets.json", "street", "blue", 0);*/

;(function (window) {
    function init (mapid) {
        function layerGeoGlobal(coords, map, rc) {
            //@todo
        }

        function layerGeoHomes (map, rc) {
            var layerGeo = L.geoJson(window.geoInfoHomes, {
                // correctly map the geojson coordinates on the image
                coordsToLatLng: function (coords) {
                    return rc.unproject(coords)
                },
                // add a popup content to the marker
                onEachFeature: function (feature, layer) {
                    if (feature.properties && feature.properties.name) {
                        layer.bindPopup(feature.properties.name)
                    }
                },
                pointToLayer: function (feature, latlng) {
                    return L.marker(latlng, {
                        icon: feature.properties.id
                    })
                }
            })
            map.addLayer(layerGeo)
            return layerGeo
        }

        function layerGeoMetro (map, rc) {
            var layerGeo = L.geoJson(window.geoInfoMetro, {
                // correctly map the geojson coordinates on the image
                coordsToLatLng: function (coords) {
                    return rc.unproject(coords)
                },
                // add a popup content to the marker
                onEachFeature: function (feature, layer) {
                    if (feature.properties && feature.properties.name) {
                        layer.bindPopup(feature.properties.name)
                    }
                },
                pointToLayer: function (feature, latlng) {
                    return L.marker(latlng, {
                        icon: feature.properties.id
                    })
                }
            })
            map.addLayer(layerGeo)
            return layerGeo
        }

        function layerGeo (map, rc) {
            var layerGeo = L.geoJson(window.geoInfo, {
                // correctly map the geojson coordinates on the image
                coordsToLatLng: function (coords) {
                    return rc.unproject(coords)
                },
                // add a popup content to the marker
                onEachFeature: function (feature, layer) {
                    if (feature.properties && feature.properties.name) {
                        layer.bindPopup(feature.properties.name)
                    }
                },
                pointToLayer: function (feature, latlng) {
                    return L.marker(latlng, {
                        icon: feature.properties.id
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
        L.control.layers({}, {
            'Bounds': layerBounds(map, rc, img),
            'Info': layerGeo(map, rc),
            'Homes': layerGeoHomes(map, rc),
            'Metro': layerGeoMetro (map, rc),
        }).addTo(map)

        L.tileLayer('./tiles/{z}/{x}/{y}.png', {
            noWrap: true,
            attribution: 'Creation Amelie DUVERNET aka Amelaye <a href="http://minetest.amelieonline.net">Projet Amelaye In Minerland</a>'
        }).addTo(map)
    }

    init('map')
}(window))