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
                        let myDiv;
                        if(feature.properties.link !== '') {
                            myDiv = '<h3><a href="'+feature.properties.link+'" target="blank_">'+feature.properties.name+'</a></h3>';
                        } else {
                            myDiv = '<h3>'+feature.properties.name+'</h3>';
                        }
                        if(feature.properties.image !== '') {
                            myDiv += '<img src="http://minetest.amelieonline.net/lib/exe/fetch.php?' + feature.properties.image + '" style="max-width:300px;"/><br />';
                        }
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

        /**
         * layer drawing a polygon
         */
        function layerPolygon (map, rc) {
            var points = window.polygon.map(function (point) {
                return rc.unproject([point.x, point.y])
            })
            var layerPolygon = L.polygon([points])
            map.addLayer(layerPolygon)
            return layerPolygon
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


        // Définition des layers
        var layerSpawn = layerGeoGlobal(window.geoInfoSpawn, map, rc, 'red', 'star', 'fa');
        var layerHome = layerGeoGlobal(window.geoInfoHomes, map, rc, 'violet', 'square', 'fa');
        var layerVillage = layerGeoGlobal(window.geoInfoVillages, map, rc, 'black', 'square', 'fa');
        var layerRestaurant = layerGeoGlobal(window.geoInfoFood, map, rc, 'purple', 'square', 'fa');
        var layerBoutique = layerGeoGlobal(window.geoInfoShops, map, rc, 'yellow', 'square', 'fa');
        var layerMetro = layerGeoGlobal(window.geoInfoMetro, map, rc, 'blue', 'circle', 'fa');
        var layerTrainStation = layerGeoGlobal(window.geoInfoTrains, map, rc, 'cyan', 'square', 'fa');
        var layerMisc = layerGeoGlobal(window.geoInfoMisc, map, rc, 'orange', 'square', 'fa');


        L.control.layers({
            'Spawn': layerSpawn,
        }, {
         //   'Bounds': layerBounds(map, rc, img),
          //  'Polygon': layerPolygon(map, rc),
            'Homes': layerHome,
            'Villages': layerVillage,
            'Restaurants': layerRestaurant,
            'Boutiques': layerBoutique,
            'Metro': layerMetro,
            'Train stations': layerTrainStation,
            'Misc': layerMisc,
        }).addTo(map)

        L.tileLayer('./tiles/{z}/{x}/{y}.png', {
            noWrap: true,
           // bounds: rc.getMaxBounds(),
            attribution: 'Creation Amelie DUVERNET aka Amelaye <a href="http://minetest.amelieonline.net">Projet Amelaye In Minerland</a>'
        }).addTo(map)

        // Moteur de recherche
        var searchControl = new L.Control.Search({
            layer: L.layerGroup([layerHome, layerVillage, layerRestaurant, layerBoutique, layerMetro, layerTrainStation, layerMisc]),
            propertyName: 'name',
            initial: false,
            buildTip: function(text, val) {
                var type = val.layer.feature.properties.type;
                return '<a href="#" class="'+type+'">'+text+'<b>'+type+'</b></a>';
            },
        })
        map.addControl(searchControl);

        searchControl.on('search:locationfound', function(e) {
            if(e.layer._popup)
                e.layer.openPopup();
        });

        // Recherche par URL
        let queryString = window.location.href;
        let url = queryString.split('#');
        if(url.length > 1) {
            let params = url[1].split(',');
            L.marker(rc.unproject([params[0], params[1]]))
                .addTo(map)
                .bindPopup(decodeURI(params[2]))
                .openPopup()

            map.setView(rc.unproject([params[0], params[1]]), 7);
        }
    }

    init('map')
}(window))