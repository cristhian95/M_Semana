
require([
          "esri/Map",
          "esri/views/MapView",
          "esri/layers/FeatureLayer",
          "esri/PopupTemplate"
        ], function(Map, MapView,FeatureLayer,  popupTemplate) {

        var map = new Map({
          basemap: "topo-vector"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-73.783892,2.8894434],
          zoom: 7
        });

        const layer = new FeatureLayer({
         url: "https://services.arcgis.com/8DAUcrpQcpyLMznu/arcgis/rest/services/Artistas/FeatureServer/0"
      });
      map.add(layer);

      var template = {
            // autocasts as new PopupTemplate()
            title: "{Nombre}",
            content: [
              {
                // It is also possible to set the fieldInfos outside of the content
                // directly in the popupTemplate. If no fieldInfos is specifically set
                // in the content, it defaults to whatever may be set within the popupTemplate.
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "Lugar",
                    label: "LUGAR"
                  },
                  {
                    fieldName: "GENERO",
                    label: "GENERO",
                    format: {
                      digitSeparator: true,
                      places: 0
                    }
                  },

                ]
              }
            ]
          }

         layer.popupTemplate = template;

    });



//var population = new FeatureLayer ("https://services.arcgis.com/8DAUcrpQcpyLMznu/arcgis/rest/services/Artistas/FeatureServer/0",{
//});
//map.addLayer(population);
