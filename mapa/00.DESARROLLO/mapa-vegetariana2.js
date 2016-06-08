      $(document).foundation();

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

        //pido un mapa a google con latitud y longitud anteriormente cargada por browser
        var gLatLon = new google.maps.LatLng(lat,lon);
        
        //objeto de configuracion del mapa pedido con centro en las coordenadas pasadas
        var objConfig ={
          zoom: 15,
          center: gLatLon,
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
          }

        }

        //creo mapa
        var gMapa=new google.maps.Map(divMapa,objConfig);

        //objeto de configuracion de marcador del usuario donde estoy
        var objConfigMarker={
          position: gLatLon,
          map: gMapa,
          title: "Usted está aquí"
        }

        //creo marcador para la ubicacion del browser
        var gMarker = new google.maps.Marker(objConfigMarker);
        //gMarker.setIcon('')

        //creo ventana de información será asignada mas adelante...
        var gInfoW =  new google.maps.InfoWindow({
            content: "loading..."
        });

        var distribuidores = [
          {nombre: 'Almacén Natural Kcero',address: 'Gascón 886,Almagro,Buenos Aires',ventana:'<div style="height:150px; width:180px"><h2>Almacén Natural Kcero</h2><h3>Gascón 886</h3><p>Teléfono: 4863-0104</p></div>'},
          {nombre: 'Onda Sana',address: 'Pringles 304,Almagro,Buenos Aires',ventana:'<div style="height:150px; width:180px"><h2>Onda Sana</h2><h3>Pringles 304</h3><p>Teléfono: 4863-0104</p></div>'},
          {nombre: 'Paprika',address: 'Sarmiento 4335,Almagro,Buenos Aires',ventana:'<div style="height:150px; width:180px"><h2>Paprika</h2><h3>Sarmiento 4335</h3><p>Teléfono: 4863-0104</p></div>'},
          {nombre: 'Popurrí',address: 'Sarmiento 4175,Almagro,Buenos Aires',ventana:'<div style="height:150px; width:180px"><h2>Popurrí</h2><h3>Sarmiento 4175</h3><p>Teléfono: 4863-0104</p></div>'}
        ];


        //armo array que guardará los distribuidores procesados en google maps
        var marcadores = new Array();

        //inicializo traductor domicilio a lat long
        var gCoder = new google.maps.Geocoder();

        for (var i = 0; i < distribuidores.length; i++) {
          setDireccion(i);
          agregarCuadroInfo(i,distribuidores,marcadores,gInfoW);          
        }


        function setDireccion(INDEX) {
          var request = new Object(); //CREO UN OBJETO          
          request.address = distribuidores[INDEX].address ; //sé que son direcciones en capital
          gCoder.geocode(request, addAddressToMap(INDEX)); //geocode hace la conversión a un punto, y su segundo parámetro es una función de callback
        }


        function addAddressToMap(response, status, indice) {

          var distribuidores = [
            {nombre: 'Almacén Natural Kcero',address: 'Gascón 886,Almagro,Buenos Aires',ventana:'<div style="height:150px; width:180px"><h2>Almacén Natural Kcero</h2><h3>Gascón 886</h3><p>Teléfono: 4863-0104</p></div>'},
            {nombre: 'Onda Sana',address: 'Pringles 304,Almagro,Buenos Aires',ventana:'<div style="height:150px; width:180px"><h2>Onda Sana</h2><h3>Pringles 304</h3><p>Teléfono: 4863-0104</p></div>'},
            {nombre: 'Paprika',address: 'Sarmiento 4335,Almagro,Buenos Aires',ventana:'<div style="height:150px; width:180px"><h2>Paprika</h2><h3>Sarmiento 4335</h3><p>Teléfono: 4863-0104</p></div>'},
            {nombre: 'Popurrí',address: 'Sarmiento 4175,Almagro,Buenos Aires',ventana:'<div style="height:150px; width:180px"><h2>Popurrí</h2><h3>Sarmiento 4175</h3><p>Teléfono: 4863-0104</p></div>'}
          ];

          if(!response) return;    //si no pudo
          //blank icono que voy a usar para mostrar el punto en el mapa
          var icon = new google.maps.MarkerImage('dietetica.png');
          //creo el marcador con la posición, el mapa, y el icono
          marker = new google.maps.Marker({
           position: response[0].geometry.location,
           title: response[0].formatted_address,
           map: gMapa,
           icon: icon
          });
          //guardo el marker en la coleccion
          marcadores.push(marker);
          //inserto el marcador en el mapa
          marker.setMap(gMapa);

          // Allow each marker to have an info window    
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {

                infoWindow.setContent(response[i][0]);
                infoWindow.open(map, marker);
            }
          })(marker, i));



        }

        





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



