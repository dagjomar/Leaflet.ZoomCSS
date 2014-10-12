Leaflet.ZoomCSS
===============

Add zoom level css class to map element for easy style updates based on zoom levels

Install
-------

Just include the leaflet.zoomcss.js file into your project.

done.


How it works
===========

The plugin listens for zoomend events on the map, and updates a class on the map div element.

Example
=======
When map zooms to zoomlevel 14, the div would have a class named `z14` added to it

`<div id="map" class="leaflet-container z14"> ... </div>`

So in your css styles you could do something like:

```
.z14 .my-css-styled-labels{
    font-size: 12px;
    border: 1px solid grey;
}
.z15 .my-css-styled-labels{
    font-size: 10px;
    border: 1px solid grey;
}
.z16 .my-css-styled-labels{
    font-size: 8px;
    border: 0px;
}
.z13 .my-css-styled-labels, .z12 .my-css-styled-labels, .z11 .my-css-styled-labels, .z10 .my-css-styled-labels{
    display: none;
}
```

Another idea is to apply css-transitions for opacity animation on different zoom levels