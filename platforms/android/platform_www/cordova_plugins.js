cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-hms-map.HMSMap",
      "file": "plugins/cordova-plugin-hms-map/www/HMSMap.js",
      "pluginId": "cordova-plugin-hms-map",
      "clobbers": [
        "HMSMap"
      ]
    },
    {
      "id": "cordova-plugin-hms-map.circle",
      "file": "plugins/cordova-plugin-hms-map/www/circle.js",
      "pluginId": "cordova-plugin-hms-map"
    },
    {
      "id": "cordova-plugin-hms-map.groundOverlay",
      "file": "plugins/cordova-plugin-hms-map/www/groundOverlay.js",
      "pluginId": "cordova-plugin-hms-map"
    },
    {
      "id": "cordova-plugin-hms-map.interfaces",
      "file": "plugins/cordova-plugin-hms-map/www/interfaces.js",
      "pluginId": "cordova-plugin-hms-map"
    },
    {
      "id": "cordova-plugin-hms-map.marker",
      "file": "plugins/cordova-plugin-hms-map/www/marker.js",
      "pluginId": "cordova-plugin-hms-map"
    },
    {
      "id": "cordova-plugin-hms-map.polygon",
      "file": "plugins/cordova-plugin-hms-map/www/polygon.js",
      "pluginId": "cordova-plugin-hms-map"
    },
    {
      "id": "cordova-plugin-hms-map.polyline",
      "file": "plugins/cordova-plugin-hms-map/www/polyline.js",
      "pluginId": "cordova-plugin-hms-map"
    },
    {
      "id": "cordova-plugin-hms-map.tileOverlay",
      "file": "plugins/cordova-plugin-hms-map/www/tileOverlay.js",
      "pluginId": "cordova-plugin-hms-map"
    },
    {
      "id": "cordova-plugin-hms-map.utils",
      "file": "plugins/cordova-plugin-hms-map/www/utils.js",
      "pluginId": "cordova-plugin-hms-map"
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-hms-map": "5.2.0-302"
  };
});