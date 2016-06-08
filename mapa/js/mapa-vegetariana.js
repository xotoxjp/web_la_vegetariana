$(document).ready(function() {
  var map;
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {
      mapTypeId: 'roadmap'
  };
                  
  // Display a map on the page
  map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
  map.setTilt(45);
  
        
  // Display multiple markers on a map
  var infoWindow = new google.maps.InfoWindow(), marker, i;
  // Icono que voy a usar para mostrar en el mapa
  var dietetica = new google.maps.MarkerImage('images/dietetica.png');
  var food = new google.maps.MarkerImage('images/eat-shop.png');
  var fruta = new google.maps.MarkerImage('images/fruit.png');

  agregarMarcadores(markers,dietetica,infoWindowContent);
  agregarMarcadores(markersFood,food,infoWindowContentFood);
  agregarMarcadores(markersFruit,fruta,infoWindowContentFruit);
/*********************************************************************************
**********************************************************************************/
function agregarMarcadores(ArrayMarker,Icono,ArrayInfoWindow){  
  // Loop through our array of markers & place each one on the map  
  for( i = 0; i < ArrayMarker.length; i++ ) {
    var position = new google.maps.LatLng(ArrayMarker[i][1], ArrayMarker[i][2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
      position: position,
      map: map,
      icon: Icono,
      title: ArrayMarker[i][0]
    });
    
    // Allow each marker to have an info window    
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infoWindow.setContent(ArrayInfoWindow[i][0]);
        infoWindow.open(map, marker);
      }
    })(marker, i));

    // Automatically center the map fitting all markers on the screen
    map.fitBounds(bounds);
  }
}
/*********************************************************************************
**********************************************************************************/

 


  // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
  var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
      this.setZoom(14);
      google.maps.event.removeListener(boundsListener);
  });
  

  // Estilos al mapa
  var customMapType = new google.maps.StyledMapType([
  {
    stylers: [
      {hue: ' #8B4513'},
      {saturation: -20}
    ]
  },
  {
    elementType: 'labels.icon',
    stylers: [{visibility: 'off'}]
  },
  {
    featureType: 'landscape',
    stylers: [{visibility: 'off'}]
  },
  {
    featureType: 'water',
    stylers: [{color: '#8FBC8F'}]
  }
  ], {
    name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);


/*************************************************************************************************************/
/*********************************definición de barrios de baires*********************************************/
/*************************************************************************************************************/
/*
  map.data.addGeoJson(chacaritaData);
  map.data.addGeoJson(villacrespoData);



  map.data.setStyle(function(feature) {
      var barrio = feature.getProperty("barrio");
      var color
      switch(barrio) {
          case "Chacarita":
              color = 'red';
              break;
          case "VillaCrespo":
              color = 'green';
              break;
          default:
              color = 'blue'
      }
      return {
      fillColor: color,
      strokeWeight: 1
      };
  });
*/
/*************************************************************************************************************/
/*************************************************************************************************************/
 
});

$(document).foundation();