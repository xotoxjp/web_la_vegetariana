
      // If you're adding a number of markers, you may want to drop them on the map
      // consecutively rather than all at once. This example shows how to use
      // window.setTimeout() to space your markers' animation.


      var locales = [
        {title: 'Almacén Natural Kcero',address: 'Gascón 886,Almagro,Buenos Aires'},
        {title: 'Onda Sana',address: 'Pringles 304,Almagro,Buenos Aires'},
        {title: 'Paprika',address: 'Sarmiento 4335,Almagro,Buenos Aires'},
        {title: 'Popurrí',address: 'Sarmiento 4175,Almagro,Buenos Aires'}
      ];

     var distribuidores = [
          {nombre: 'Almacén Natural Kcero',address: 'Gascón 886,Almagro,Buenos Aires',ventana:'<div style="height:150px; width:180px"><h2>Almacén Natural Kcero</h2><h3>Gascón 886</h3><p>Teléfono: 4863-0104</p></div>'},
          {nombre: 'Onda Sana',address: 'Pringles 304,Almagro,Buenos Aires',ventana:'<div style="height:150px; width:180px"><h2>Onda Sana</h2><h3>Pringles 304</h3><p>Teléfono: 4863-0104</p></div>'},
          {nombre: 'Paprika',address: 'Sarmiento 4335,Almagro,Buenos Aires',ventana:'<div style="height:150px; width:180px"><h2>Paprika</h2><h3>Sarmiento 4335</h3><p>Teléfono: 4863-0104</p></div>'},
          {nombre: 'Popurrí',address: 'Sarmiento 4175,Almagro,Buenos Aires'ventana:'<div style="height:150px; width:180px"><h2>Popurrí</h2><h3>Sarmiento 4175</h3><p>Teléfono: 4863-0104</p></div>'}
        ];

      var neighborhoods = [
        {lat: 52.511, lng: 13.447},
        {lat: 52.549, lng: 13.422},
        {lat: 52.497, lng: 13.396},
        {lat: 52.517, lng: 13.394}
      ];

      var markers = [];
      var map;

      function initMap() {
        map = new google.maps.Map(document.getElementById('mapa'), {
          zoom: 12,
          center: {lat: 52.520, lng: 13.410}
        });
      }



      function drop() {
        clearMarkers();
        for (var i = 0; i < neighborhoods.length; i++) {
          addMarkerWithTimeout(neighborhoods[i], i * 200);
        }
      }

      function addMarkerWithTimeout(position, timeout) {
        window.setTimeout(function() {
          markers.push(new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP
          }));
        }, timeout);
      }


      

      function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
      }