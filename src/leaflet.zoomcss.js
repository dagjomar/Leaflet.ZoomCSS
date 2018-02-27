/*
  Leaflet.ZoomCSS
  Adding a css class on the map div element, so other elements, such as markers can be automatically styled based on the zoom level using css instead of javascript
  Copyright (c) 2014, Dag Jomar Mersland, dagjomar@gmail.com, @dagjomar

  https://github.com/dagjomar/Leaflet.ZoomCSS
*/


L.Map.mergeOptions({
  zoomCss: true
});

L.Map.ZoomCSS = L.Handler.extend({
  addHooks: function () {
    this._zoomCSS();
    this._map.on('zoomend', this._zoomCSS, this);
  },

  removeHooks: function () {
    this._map.off('zoomend', this._zoomCSS, this);
  },

  _zoomCSS: function (e) {

    var map = this._map,
        diff = parseFloat(map.getZoom()) - Math.floor(parseFloat(map.getZoom())),
        zoom = diff <= 0.5 ? Math.floor(map.getZoom()) : Math.ceil(map.getZoom()),
        container = map.getContainer();

    container.className = container.className.replace( /\sz[0-9]{1,2}/g, '' ) + ' z' + zoom;

  }


});

L.Map.addInitHook('addHandler', 'zoomCss', L.Map.ZoomCSS);
