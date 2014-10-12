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
    this._map.on('zoomend', this._zoomCSS, this);
  },

  removeHooks: function () {
    this._map.off('zoomend', this._zoomCSS, this);
  },

  _zoomCSS: function (e) {

    var map = this._map,
        zoom = map.getZoom();

      var container = map.getContainer();

      $(container).removeClass (function (index, css) {
        return (css.match (/z[0-9]{1,2}/g) || []).join(' ');
      }).addClass('z' + zoom);

  }


});

L.Map.addInitHook('addHandler', 'zoomCss', L.Map.ZoomCSS);