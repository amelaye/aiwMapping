# Amelaye In Minerland Leaflet.js mapping

Hi ! This is my customizable mapping for Minetest.

![alt text](http://www.bonjouramel.fr/wp-content/uploads/2021/01/minetestwaou.png "Sample")

###### How to create your map

1. Generate your map in .png format with minetestmapper
2. Download gdal2tiles-leaflet inside the project, go into it
3. Execute this :
<code>
./gdal2tiles.py -l -p raster -z 0-10 -w none <your map path> ../tiles
</code> and wait ...
   
4. Change your map size in js/index.js
5. Change the coords in the js/geojson files