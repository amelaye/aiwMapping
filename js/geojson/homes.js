;(function (window) {
    // geoJson definitions
    window.geoInfoHomes = [
        // Castles
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chateau dans le ciel',
                'link': '',
                'icon': 'fa-dungeon',
                'image': 't=1612712520&w=500&h=264&tok=da6906&media=screenshot_20210207_163730.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [9002,9234]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chateau Portugalia',
                'link': '',
                'icon': 'fa-dungeon',
                'image': 'w=500&h=264&tok=8f7bd6&media=sites_joueurs:screenshot_20211214_121504.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8319,11368]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chateau Royal',
                'link': 'http://minetest.amelieonline.net/doku.php?id=village:chateau_royal',
                'icon': 'fa-dungeon',
                'image': 't=1612710323&w=500&h=264&tok=19ad00&media=screenshot_20210207_160043.png',
                'description': ''
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
                'link': 'http://minetest.amelieonline.net/doku.php?id=village:chateau_amelaye',
                'icon': 'fa-dungeon',
                'image': 't=1612710850&w=500&h=264&tok=802239&media=screenshot_20210207_160937.png',
                'description': ''
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
                'name': 'Manoir',
                'link': 'http://minetest.amelieonline.net/doku.php?id=village:manoir',
                'icon': 'fa-home',
                'image': 't=1612716655&w=500&h=264&tok=951d5f&media=screenshot_20210207_174618.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8792,10587]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Cottage',
                'link': 'http://minetest.amelieonline.net/doku.php?id=village:cottage',
                'icon': 'fa-home',
                'image': 't=1612710378&w=500&h=264&tok=0c40c2&media=screenshot_20210207_160147.png',
                'description': ''
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
                'link': 'http://minetest.amelieonline.net/doku.php?id=utilisateurs:yyz:tour',
                'icon': 'fa-home',
                'image': 't=1612711216&w=500&h=264&tok=28cb0e&media=screenshot_20210207_161547.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8719,10549]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Maison YYZ "Loin de tout"',
                'link': 'http://minetest.amelieonline.net/doku.php?id=utilisateurs:yyz:comteyyz#la_maison_loin_de_tout',
                'icon': 'fa-home',
                'image': 't=1612711322&w=500&h=264&tok=a474f3&media=screenshot_20210207_161733.png',
                'description': ''
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
                'link': '',
                'icon': 'fa-home',
                'image': 't=1612711554&w=500&h=264&tok=c8d145&media=screenshot_20210207_162125.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8637,10488]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chez Mounou et Gorgonzola',
                'link': '',
                'icon': 'fa-home',
                'image': 'w=500&h=264&tok=4adb31&media=screenshot_20211214_115734.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8602,10755]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chez Ted + Auberge Pirate',
                'link': 'http://minetest.amelieonline.net/doku.php?id=utilisateurs:ted',
                'icon': 'fa-home',
                'image': 'w=500&h=264&tok=57a7d4&media=sites_joueurs:screenshot_20211214_122103.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [9384,11063]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chez Tanavit',
                'link': '',
                'icon': 'fa-home',
                'image': 'w=500&h=264&tok=d3091b&media=sites_joueurs:screenshot_20211214_121337.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8570,11870]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chez Goops',
                'link': '',
                'icon': 'fa-home',
                'image': 'w=500&h=264&tok=a5766a&media=sites_joueurs:screenshot_20211214_121649.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [6444,9682]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chez Antares',
                'link': '',
                'icon': 'fa-home',
                'image': 'w=500&h=264&tok=4c19a3&media=screenshot_20210602_172207.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [6836,19088]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Maison de vacances Mounou',
                'link': '',
                'icon': 'fa-home',
                'image': 'w=500&h=264&tok=1184a1&media=sites_joueurs:screenshot_20211214_121106.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [10004,8560]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chez Mikabrak',
                'link': '',
                'icon': 'fa-home',
                'image': 't=1612711617&w=500&h=264&tok=082a47&media=screenshot_20210207_162228.png',
                'description': ''
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
                'link': '',
                'icon': 'fa-home',
                'image': 'w=500&h=264&tok=38740f&media=screenshot_20210602_172029.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [7490,13122]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chez Nathy & Lili',
                'link': '',
                'icon': 'fa-home',
                'image': 't=1612711871&w=500&h=264&tok=14d727&media=screenshot_20210207_162608.png',
                'description': ''
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
                'link': '',
                'icon': 'fa-home',
                'image': '',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [8803,10421]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Maison de Baobab',
                'link': '',
                'icon': 'fa-home',
                'image': 't=1612711956&w=500&h=264&tok=f700f4&media=screenshot_20210207_162807.png',
                'description': ''
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
                'link': '',
                'icon': 'fa-home',
                'image': 't=1612712401&w=500&h=264&tok=2d504c&media=screenshot_20210207_163528.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [9106,10242]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chez Alain',
                'link': '',
                'icon': 'fa-home',
                'image': 't=1647449012&w=500&h=264&tok=7a5486&media=sites_joueurs:screenshot_20220316_174301.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [9404,11364]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chez Iris',
                'link': '',
                'icon': 'fa-home',
                'image': 't=1647449146&w=500&h=264&tok=e3e035&media=sites_joueurs:screenshot_20220316_174526.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [10763,11500]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Chez Bob',
                'link': '',
                'icon': 'fa-home',
                'image': 't=1647449408&w=500&h=264&tok=0b33c6&media=sites_joueurs:screenshot_20220316_174952.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [9994,10006]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Villa Victorienne YYZ',
                'link': 'http://minetest.amelieonline.net/doku.php?id=utilisateurs:yyz:villas#villa_victorienne',
                'icon': 'fa-home',
                'image': 't=1647450331&w=500&h=264&tok=f3cce7&media=sites_joueurs:screenshot_20220316_180500.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [10646,10818]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Villa troglodyte YYZ',
                'link': 'http://minetest.amelieonline.net/doku.php?id=utilisateurs:yyz:villas#villa_troglodyte',
                'icon': 'fa-home',
                'image': 't=1647450433&w=500&h=264&tok=1c4137&media=sites_joueurs:screenshot_20220316_180702.png',
                'description': ''
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [10535,11026]
            }
        },
    ]
}(window))
