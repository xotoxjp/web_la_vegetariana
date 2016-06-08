     var divMapa = document.getElementById('mapa');
      //pido direccion al browser
      navigator.geolocation.getCurrentPosition(fn_ok, fn_error);

      //si direccion es denegada por usuario
      function fn_error(){
        divMapa.innerHTML = 'Hubo un problema al solicitar los datos';
      }




      //si direccion es habilitada por usuario
      function fn_ok(respuesta){
        //capturo latitud y longitud del browser
        //mostrar_objeto(respuesta.coords);
        var lat=respuesta.coords.latitude;
        var lon=respuesta.coords.longitude;

        //pido un mapa a google con latitud y longitud
        var gLatLon = new google.maps.LatLng(lat,lon);
        
        //objeto de configuracion del mapa pedido con centro en las coordenadas pasadas
        var objConfig ={
          zoom: 14,
          center: gLatLon,
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
          }

        }

        //creo mapa
        var gMapa=new google.maps.Map(divMapa,objConfig);

        //objeto de configuracion de marcadores
        var objConfigMarker={
          position: gLatLon,
          map: gMapa,
          title: "Usted está aquí"
        }

        //creo marcador para la ubicacion del browser
        var gMarker = new google.maps.Marker(objConfigMarker);
            //gMarker.setIcon('')

        //inicializo traductor domicilio a lat long
        var gCoder = new google.maps.Geocoder();

        //domicilio a buscar
        var objInformacion={
          address: 'Gascón 886,Almagro,Buenos Aires'
        }
        
        //funcion 
        function fn_coder(datos) {
          var coordenadas = datos[0].geometry.location; //obj LatLong

          var config={
            map: gMapa,
            animation: google.maps.Animation.DROP,
            position: coordenadas,
            title: 'Almacén Natural Kcero'
          }

          var gMarkerDV = new google.maps.Marker(config)

              gMarkerDV.setIcon('dietetica.png')


          var objHTML ={
            content: '<div style="height:150px; width:300px"><h2>Almacén Natural Kcero</h2><h3>Gascón 886</h3><p>Teléfono: 4863-0104</p></div>'
          }
          var gInfoW = new google.maps.InfoWindow(objHTML);

          google.maps.event.addListener(gMarkerDV, 'click', function() {
              gInfoW.open(gMapa,gMarkerDV);
          });
        }



        gCoder.geocode(objInformacion,fn_coder);


      //estilos al mapa
      var customMapType = new google.maps.StyledMapType([
      {
        stylers: [
          {hue: ' #8B4513'},
          {visibility: 'on'},
          {gamma: 0.5},
          {weight: 0.5}
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


      gMapa.mapTypes.set(customMapTypeId, customMapType);
      gMapa.setMapTypeId(customMapTypeId);







      }// fin: function fn_ok

      //funcion auxiliar para visualizar coordenas de navegador
      //mostrar_objeto(navigator.geolocation);
      function mostrar_objeto(obj){
        for (var prop in obj) {
          document.write(prop+': '+obj[prop]+ '<br/>');
        };
      }



