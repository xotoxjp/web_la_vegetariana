// Multiple Markers
  var markers = [
      ['Gascón 886',-34.600700, -58.423894],
      //['Pringles 304',-34.608481, -58.427741],
      //['Sarmiento 4335',-34.604235, -58.426599],
      ['Sarmiento 4175',-34.604540, -58.423930],
      ['Sánchez de Bustamante 2578',-34.583992, -58.402485],
      ['Billinghurst 1256',-34.595161, -58.413777],
      ['Arenales 3772',-34.584936, -58.414686],  
      ['Arenales 2895',-34.590965, -58.406113],   
      ['Larrea 940',-34.597157, -58.402078],   
      ['Juramento 2455',-34.562475, -58.457417],
      ['Juramento 2527 L77/79',-34.562782, -58.457906],
      ['Juramento 3084',-34.565668, -58.462786],
      //['Virrey del Pino 2644 ',-34.567778, -58.455189],
      ['Av Cramer 1861',-34.566788, -58.459286],
      ['Juramento 2112',-34.560457, -58.453964],
      ['Franklin D. Roosevelt 2383',-34.557096, -58.460303],
      ['Blanco Encalada 2331',-34.558821, -58.458581],
      ['Av. San Juan 3722',-34.625726, -58.417999],
      ['Av. Rivadavia 5629',-34.621768, -58.444766],    
      ['Hidalgo 919',-34.608471, -58.441593],
      ['Emilio Mitre 92',-34.622703, -58.443577],
      ['Av. Pavón 4289',-34.631254, -58.424064],
      ['Av. José María Moreno 695',-34.626639, -58.434297],
      ['Av. José M Moreno 795',-34.627707, -58.434010 ],
      ['Av. J. B. Alberdi 400',-34.622955, -58.433270 ],
      ['Paysandú 1688',-34.604835, -58.458394 ],
      ['Av. Callao 484',-34.603461, -58.392459],
      ['Cabello 3400',-34.581515, -58.408642],
      //['Av. Monroe 3637',-34.565772, -58.471721],
      ['Rojas 42',-34.619813, -58.441762],
      ['Olleros 4187',-34.586919, -58.453657],
      ['Freire 1102',-34.574514, -58.454253],
      ['Av. F. Lacroze 3170',-34.577642, -58.449057],
      ['Palpa 3173',-34.576749, -58.451400],
      //['Olleros 3582',-34.581874, -58.450483],
      ['Sarandí 109',-34.610692, -58.394897],
      ['Uriburu 69',-34.608770, -58.397586],
      ['Av. Carabobo 62',-34.627426, -58.456199],
      ['Av. Caseros 2770',-34.636506, -58.401450],
      ['Guemes 4088',-34.585474, -58.418284],
      ['Thames 2207',-34.583828, -58.424812],
      ['Paraguay 4290',-34.586297, -58.422120],
      ['Angel J. Carranza 2394',-34.576817, -58.431905],
      ['Salguero 1956',-34.587508, -58.413742],
      ['Cabrera 4864',-34.591021, -58.430937],
      ['Guemes 3723',-34.587848, -58.414834],
      ['Paraguay 4784',-34.582573, -58.427108],
      //['Salguero 2660',-34.580693, -58.408943],
      ['Juncal 2376',-34.591874, -58.400561],
      ['Av. Independencia 1291',-34.617630, -58.384268],
      ['Matheu 305',-34.613460, -58.400220],
      ['La Rioja 1252',-34.625117, -58.406938],
      ['Av. San Juan 1861',-34.622645, -58.392572],
      ['Bolivar 619',-34.615071, -58.373178],
      ['Acevedo 371',-34.598418, -58.440962],
      ['Av. Triunvirato 4658',-34.574620, -58.485934],
      ['L.M. Drago 356',-34.600994, -58.437851],
      ['Pacheco 2292',-34.574099, -58.483576],
      ['Av. Hipolito Yrigoyen 4543',-34.707466, -58.391871],
      ['Av. Angel Gallardo 74',-34.602799, -58.433546],
      ['Bolivar 950 puesto 85',-34.619096, -58.372910],
      ['Av. Triunvirato 4015',-34.579433, -58.477505],
      ['Av. 9 de Julio 1862',-34.712909, -58.383098],
      ['Cuenca 3514',-34.597432, -58.498297],
      ['Peru 657',-34.615634, -58.374586],
      //['Ramirez de Velazco 690',-34.596767, -58.438239],
      ['Ramirez de Velazco 701',-34.596566, -58.438424],
      ['Quesada 5094',-34.568161, -58.489768],
      ['Elcano 3901',-34.581960, -58.460705],
      ['Av. Triunvirato 4264',-34.577866, -58.480777],
      ['Gral Jose G Artigas 5404',-34.577875, -58.502743],
      ['Av. Nazca 4811',-34.585204, -58.503016],
  ];
                      
  // Info Window Content
  var infoWindowContent = [
      ['<div class=cartelDieteticas>' +
            '<h2>Almacén Natural Kcero</h2>' +
       
            '<div class="imagenDieteticas">' +
                  '<img src="logos/kcero.jpg" alt="imagen de dietética">' +
            '</div>'+

            '<div class="datosDieteticas">' +
                  '<p><b>Dirección: </b> Gascón 886</p>' +
                  '<p><b>Teléfono: </b> 4863-0104</p>'+
                  '<p><a href="https://www.facebook.com/kcero.almacennatural" target="_blank">Facebook</a></p>'+ 
                  '<p><b>Horarios: </b> '+
                  'Lu a Vie 9 a 20hs - Sab 10 a 14hs </p>'+
            '</div>'+

       '</div>'],

     /*  ['<div>' +
       '<h2>Onda Sana</h2>' +
       '<p>Dirección: Pringles 304</p>' +
       '<p><b>Teléfono: </b> 4981-4088</p>'+
       '<p><a href="https://www.facebook.com/ONDA-SANA-Dietetica-139923852744455/" target="_blank">Facebook</a></p>'+ 
       '<p>Sitio web: <a href="http://www.ondasana.wix.com/online" target="_blank">www.ondasana.wix.com/online</a></p>'+ 
       '<p><b>e-mail: </b> ondasana.dietetica@gmail.com</p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Vie 10 a 19hs - Sab 10 a 14hs </p>'+
       '</div>'], */

     /*  ['<div>' +
       '<h2>Paprika</h2>' +
       '<p>Dirección: Sarmiento 4335</p>' +
       '<p><b>Teléfono: </b> 4862-9999</p>'+
       '<p><a href="http://www.paprikanatural.com" target="_blank">www.paprikanatural.com</a></p>'+ 
       '<p><b>e-mail: </b> info@paprikanatural.com</p>'+
       '<p><a href="https://www.facebook.com/paprikanatural" target="_blank">Facebook</a></p>'+ 
       '</div>'],*/
      
      ['<div class=cartelDieteticas>' +
       '<h2>Popurrí</h2>' +

       '<div class="imagenDieteticas">' +
       '<img src="logos/popurri.jpg" alt="imagen de dietética"  >' +       
       '</div>'+

       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Sarmiento 4175</p>' +
       '<p><b>Teléfono: </b> 15 5101-8383</p>'+
       '<p><a href="https://www.facebook.com/popurridietetica" target="_blank">Facebook</a></p>'+ 
       '</div>'+

       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>La dietética de Ana</h2>' +
       '<p><b>Dirección: </b> Sánchez de Bustamante 2578</p>' +
       '<p><b>Teléfono: </b> 4801-9891</p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Vie 8 a 20hs - Sab 9 a 14hs </p>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Dietética Bamboo</h2>' +
       '<p><b>Dirección: </b> Billinghurst 1256</p>' +
       '<p><b>Teléfono: </b> 6379-7641</p>'+
       '<p><b>e-mail: </b> dietética@yahoo.com.ar</p>'+
       '<p><a href="https://www.facebook.com/Dietetica-Bamboo-774686315942640/" target="_blank">Facebook</a></p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Vie 10 a 20hs - Sab 10 a 15hs </p>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Pachamama</h2>' +
       
       '<div class="imagenDieteticas">' +
       '<img src="logos/pachamama.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Arenales 3772</p>' +
       '<p><b>Teléfono: </b> 4833-4383</p>'+
       '<p><b>e-mail: </b> dieteticapachamama@yahoo.com</p>'+
       '</div>'+       
       
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Dietética Arenales</h2>' +
       '<p><b>Dirección: </b> Arenales 2895</p>' +
       '<p><b>Teléfono: </b> 4824-4637</p>'+
       '<p><b>e-mail: </b> dietética@yahoo.com.ar</p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Vie 9 a 20hs - Sab 9 a 13hs </p>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Vida más Natural</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/vida_mas_natural.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Larrea 940</p>' +
       '<p><b>Teléfono: </b> 4964-5263</p>'+
       '<p><b>e-mail: </b> infovidamasnatural@gmail.com</p>'+
       '<p><a href="https://www.facebook.com/vidamasnatural" target="_blank">Facebook</a></p>'+
       '</div>'+
       
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Casa Polti</h2>' + 
       '<div class="imagenDieteticas">' +
       '<img src="logos/casa_polti.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Juramento 2455</p>' +
       '<p><b>Teléfono: </b> 4784-3081</p>'+
       '<p><b>e-mail: </b> casapolti@casapolti.com.ar</p>'+
       '<p><b>Sitio web: </b><a href="http://www.casapolti.com.ar" target="_blank"> www.casapolti.com.ar</a></p>'+
       '<p><a href="https://www.facebook.com/casapolti/" target="_blank">Facebook</a></p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Casa Polti</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/casa_polti.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Juramento 2527 L77/79</p>' +
       '<p><b>Teléfono: </b> 4783-0883</p>'+
       '<p><b>e-mail: </b> casapolti@casapolti.com.ar</p>'+
       '<p><b>Sitio web: </b><a href="https://www.casapolti.com.ar" target="_blank"> www.casapolti.com.ar</a></p>'+
       '<p><a href="https://www.facebook.com/casapolti/" target="_blank">Facebook</a></p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Cumelén</h2>' +
       '<p><b>Dirección: </b> Juramento 3084</p>' +
       '<p><b>Teléfono: </b> 4781-1944</p>'+       
       '</div>'],

      /* ['<div>' +
       '<h2>Dietética Los Manzanos </h2>' +
       '<p>Virrey del Pino 2644 </p>' +
       '<p><b>Teléfono: </b> 4785-9952</p>'+       
       '</div>'], */     

      ['<div class=cartelDieteticas>' +
       '<h2>Natural Store</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/natural_store.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Av Cramer 1861</p>' +
       '<p><b>Teléfono: </b> 4788-5628</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Lo de Pérez</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/lo_de_perez.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Juramento 2112</p>' +
       '<p><b>Teléfono: </b> 4781-1065</p>'+
       '<p><b>e-mail: </b> info@lodeperez.com</p>'+
       '<p><b>Sitio web: </b><a href="http://www.lodeperez.com" target="_blank"> www.lodeperez.com</a></p>'+
       '<p><a href="https://www.facebook.com/dieteticalodeperez/" target="_blank">Facebook</a></p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Ser Natural</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/ser_natural.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Franklin D. Roosevelt 2383</p>' +     
       '</div>'+
       '</div>'],      

      ['<div class=cartelDieteticas>' +
       '<h2>Vida Country </h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/vida_country.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Blanco Encalada 2331</p>' +
       '<p><b>Teléfonos: </b> 4780-1919</p>'+
       '<p><b>e-mail: </b> dietetica-vidacountry@hotmail.com</p>'+
       '<p><a href="https://www.facebook.com/Dietética-Vida-Country-428055810646553/" target="_blank">Facebook</a></p>'+
       '</div>'+
       '</div>'],

 
      ['<div class=cartelDieteticas>' +
       '<h2>Madre Tierra</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/madre_tierra.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Av. San Juan 3722</p>' +
       '<p><b>Teléfono: </b> 4922-2482</p>'+
       '<p><b>e-mail: </b> madretierra_2003@yahoo.com.ar</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Hola Verde</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/hola_verde.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Av. Rivadavia 5629</p>' +
       '<p><b>Teléfono: </b> 4431-1017</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>La Curva</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/la curva_caballito.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Hidalgo 919</p>' +
       '<p><b>Teléfono: </b> 15 5348-8740</p>'+
       '</div>'+
       '</div>'],

 
      ['<div class=cartelDieteticas>' +
       '<h2>El Emporio de la miel</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/emporio_de_la_miel.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: : </b> Emilio Mitre 92</p>' +
       '<p><b>Teléfono: </b> 15 5492-8513</p>'+
       '<p><b>e-mail: </b> delivery@elemporiodelamiel.com</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>El Emporio de la miel</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/emporio_de_la_miel.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Av. Pavón 4289</p>' +
       '<p><b>Teléfono: </b> 4925-2201</p>'+
       '<p><b>e-mail: </b> delivery@elemporiodelamiel.com</p>'+
       '</div>'+
       '</div>'], 

      ['<div class=cartelDieteticas>' +
       '<h2>Mente Natural </h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/mente_natural.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Av. José María Moreno 695</p>' +
       '<p><b>Teléfono: </b> 4924-0705 / 4926-0949</p>'+
       '<p><a href="https://www.facebook.com/comidasmentenatural/" target="_blank">Facebook</a></p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Nuestra Cosecha</h2>' +
       '<p><b>Dirección: </b> Av. José M Moreno 795 </p>' +
       '<p><b>Teléfono: </b> 3998-2815</p>'+
       '<p><b>e-mail: </b> dietética@yahoo.com.ar</p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Vie 9 a 13hs - 16 a 20hs - Sab 9 a 14hs </p>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Organic Way</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/organic_way.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Av. J. B. Alberdi 400</p>' +
       '<p><b>Teléfono: </b> 4921-6270</p>'+
       '<p><b>e-mail: </b> organic.way@mail.com</p>'+
       '<p><a href="https://www.facebook.com/Organic-Way-Almacén-orgánico-y-natural-356714507721378/" target="_blank">Facebook</a></p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Tentaciones Naturales</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/tentaciones_naturales.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Paysandú 1688</p>' +
       '<p><b>Teléfono: </b> 4581-7871</p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Vie 9:30 a 14 - 16 a 20hs - Sab 9:30 a 14hs</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Dietética Callao</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/dietetica_callao.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Av. Callao 484</p>' +
       '<p><b>Teléfono: </b> 4372-7427</p>'+
       '<p><b>e-mail: </b> Info@dieteticacallao.com.ar</p>'+
       '<p><b>Sitio web: </b><a href="http://www.dieteticacallao.com.ar" target="_blank"> www.dieteticacallao.com.ar</a></p>'+
       '<p><a href="https://www.facebook.com/dieteticacallao/" target="_blank">Facebook</a></p>'+
       '</div>'+
       '</div>'],   

      ['<div class=cartelDieteticas>' +
       '<h2>Mampu</h2>' +
       '<p><b>Dirección: </b> Cabello 3400</p>' +
       '<p><b>Teléfono: </b> 4806-0220</p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Vie 9:30 a 13:30 - 15 a 20hs</p>'+      
       '</div>'],   

      /*  ['<div>' +
       '<h2>Almacen Natural Don Botica Vitrola</h2>' +
       '<p>Av. Monroe 3637</p>' +
       '<p><b>e-mail: </b> donboticavitrola@hotmail.com</p>'+
       '<p><a href="https://www.facebook.com/Don-Botica-Vitrola-332892516862663/" target="_blank">Facebook</a></p>'+
       '</div>'],*/

      ['<div class=cartelDieteticas>' +
       '<h2>Dietética Rojas</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/dietetica_rojas.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Rojas 42</p>' +
       '<p><b>Teléfono: </b> 4902-1229</p>'+   
       '</div>'+   
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Mogale</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/mogale_chacarita.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       '<p><b>Dirección: </b> Olleros 4187</p>' +
       '<p><b>Teléfono: </b> 4553-2300</p>'+
       '</div>'+      
       '</div>'],


      ['<div class=cartelDieteticas>' +
       '<h2>Granada</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/granada.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Freire 1102</p>' +
       '<p><b>Teléfono: </b> 4554-2906</p>'+  
       '<p><b>e-mail: </b> almacenorganicogranada@gmail.com</p>'+
       '<p><a href="https://www.facebook.com/AlmacenGranada/" target="_blank">Facebook</a></p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Natural Flavor</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/natural_flavor.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Av. F. Lacroze 3170</p>' +
       '<p><b>Teléfono: </b> 4555-0891</p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Sab 9 a 14 - 15 a 20:30hs Feriados 9 a 13hs </p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Mayoral</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/mayoral_colegiales.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b> Palpa 3173</p>' +
       '<p><b>Teléfono: </b> 4451-7427</p>'+
       '</div>'+
       '</div>'],

      /*  ['<div>' +
       '<h2>Nat Gen</h2>' +
       '<p>Olleros 3582</p>' +
       '<p><b>Teléfono: </b> 2050-1108</p>'+
       '<p><a href="https://www.facebook.com/tiendasnatgen/" target="_blank">Facebook</a></p>'+
       '</div>'], */

      ['<div class=cartelDieteticas>' +
       '<h2>Dietética Sarandí</h2>' +
       '<p><b>Dirección: </b> Sarandí 109</p>' +     
       '</div>'],  

      ['<div class=cartelDieteticas>' +
       '<h2>Dietéticos Uriburu</h2>' +
       '<p><b>Dirección: </b> Uriburu 69</p>' +
       '<p><b>Teléfono: </b> 4952-1400</p>'+
       '<p><b>e-mail: </b> dietética@yahoo.com.ar</p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Vie 8:30 a 20hs Sab 9 a 17hs</p>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Sano y Natural</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/sano_y_natural.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Av. Carabobo 62</p>' +
       '<p><b>Teléfono: </b> 4631-7649</p>'+
       '<p><a href="https://www.facebook.com/dietetica.sanoynatural.5/" target="_blank">Facebook</a></p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Matices Naturales</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/matices_naturales.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Av. Caseros 2770</p>' +
       '<p><b>Teléfono: </b> 15 4409-9516</p>'+      
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Almacén Natural</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/almacen natural_palermo.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Guemes 4088</p>' +
       '<p><b>Teléfono: </b> 4832-2765</p>'+    
       '</div>'+  
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Bahia del Angel</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/bahia_del_angel.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Thames 2207</p>' +
       '<p><b>Teléfono: </b> 4777-4556</p>'+
       '<p><b>e-mail: </b> bahíadelangel@outlook.es</p>'+
       '<p><b>Sitio web: </b><a href="http://www.bahiadelangel.com.ar" target="_blank">www.bahiadelangel.com.ar</a></p>'+      
       '<p><b>Horarios: </b> '+
       'Lu a Vie 10 a 20hs Sab 10 a 18hs</p>'+
       '<p><a href="https://www.facebook.com/dieteticabahiadelangel/" target="_blank">Facebook</a></p>'+       
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Dietética Hamsa</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/hamsa_palermo.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Paraguay 4290</p>' +
       '<p><b>Teléfono: </b> 4833-4715</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Dulces Sugerencias</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/dulces_sugerencias.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Angel J. Carranza 2394</p>' +
       '<p><b>Teléfono: </b> 4771-6565</p>'+
       '<p><b>e-mail: </b> monicaciurca@hotmail.com</p>'+
       '<p><b>Horarios: </b> '+
       'Lu-Vie 9:30 a 20hs Sab 9:30 a 14hs</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Naturalmente</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/naturalmente_palermo.jpg" alt="imagen de dietética"  >' +       
       '</div>'+

       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Salguero 1956</p>' +
       '<p><b>Teléfono: </b> 4829-0584</p>'+
       '</div>'+      
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Punto Vegetal</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/punto_vegetal.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Cabrera 4864</p>' +
       '<p><b>Teléfono: </b> 4774-6495</p>'+
       '<p><a href="https://www.facebook.com/puntovegetal/" target="_blank">Facebook</a></p>'+
       '</div>'+
       '</div>'],
 
      ['<div class=cartelDieteticas>' +
       '<h2>Sabroso y Natural</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/sabroso_y_natural.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Guemes 3723</p>' +
       '<p><b>Teléfono: </b> 4821-4371</p>'+
       '<p><b>e-mail: </b> picciololuis@hotmail.com</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Semillas de Vida</h2>' +
       '<p><b>Dirección: </b>Paraguay 4784</p>' +
       '<p><b>Teléfono: </b> 4770-9404</p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Vie 10 a 14 - 16:30 a 20hs Sab 10 a 13:30 </p>'+
       '<p><a href="https://www.facebook.com/semillasdevida.almacennatural/" target="_blank">Facebook</a></p>'+
       '</div>'],

      /*  ['<div>' +
       '<h2>The Grocery tienda gourmet</h2>' +
       '<p>Salguero 2660</p>' +
       '<p>Delivery: 4806-6857</p>'+
       '<p><b>e-mail: </b> thegrocerypalermo@gmail.com</p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Vie 9 a 21hs Sab 9 a 14hs</p>'+
       '</div>'],*/

      ['<div class=cartelDieteticas>' +
       '<h2>Cuatro Soles</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/cuatro_soles.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Juncal 2376</p>' +
       '<p><b>Teléfono: </b> 4821-8626</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>El Edén Natural</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/el_eden_natural.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Av. Independencia 1291</p>' +
       '<p><b>Teléfono: </b> 4978-6914</p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Vie 9:30 a 14 - 16:30 a 20hs Sab 9:30 a 13hs</p>'+
       '</div>'+
       '</div>'],


      ['<div class=cartelDieteticas>' +
       '<h2>La Abeja Africana</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/la_abeja_africana.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Matheu 305</p>' +
       '<p><b>Telefóno: </b> 4943-3330</p>'+
       '<p><b>Sitio web: </b><a href="http:/www.laabejaafricana.com" target="_blank">www.laabejaafricana.com</a></p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Tendencia Natural</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/tendencia natural_sancristobal.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       '<p><b>Dirección: </b>La Rioja 1252</p>' +
       '<p><b>Teléfono: </b> 4943-1242</p>'+
       '</div>'+
       '</div>'],


      ['<div class=cartelDieteticas>' +
       '<h2>Vida Mística</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/vida_mistica.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Av. San Juan 1861</p>' +
       '<p><b>Teléfono: </b> 4304-5893</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>El Manchego</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/el_manchego.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Bolivar 619</p>' +
       '<p><b>Teléfono: </b> 4361-6234</p>'+
       '<p><b>Teléfono: </b> 5368-9522</p>'+
       '<p><b>e-mail: </b> elmanchegogrande@gmail.com</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Brisa Natural</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/brisa_natural.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Acevedo 371</p>' +
       '<p><b>Teléfono: </b> 3531-8776</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Condor del Sol</h2>' +
       '<p><b>Dirección: </b>Av. Triunvirato 4658</p>' +
       '<p><b>Teléfono: </b> 4523-2699</p>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Gurfi</h2>' +
       '<p><b>Dirección: </b>L.M. Drago 356</p>' +
       '<p><b>Teléfono: </b> 4854-2061</p>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Delicias Naturales</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/delicias_naturales.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Pacheco 2292</p>' +
       '<p><b>Teléfono: </b> 4523-9609</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2><b>Dirección: </b>Dietética Lanús</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/dietetica_lanus.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Av. Hipolito Yrigoyen 4543</p>' +
       '<p><b>Teléfono: </b> 6089-6148 / 4247-2800</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>La Cascada</h2>' +
       '<p><b>Dirección: </b>Av. Angel Gallardo 74</p>' +
       '<p><b>e-mail: </b> juliandug@gmail.com</p>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Almacén Natural del Mercado</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/almacen_del_mercado.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Bolivar 950 puesto 85</p>' +
       '<p><b>Teléfono: </b> 15 6277-1475</p>'+
       '<p><b>Sitio web: </b><a href="http:/www.almacen-natural.com.ar" target="_blank">www.almacen-natural.com.ar</a></p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>El Portal Almacén Natural</h2>' +
       '<p><b>Dirección: </b>Av. Triunvirato 4015</p>' +
       '<p><b>Teléfono: </b> 4521-0254</p>'+
       '<p><b>e-mail: </b> elportalalmacennatural@gmail.com</p>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Buona Vita</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/buona_vita.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Av. 9 de Julio 1862</p>' +
       '<p><b>Teléfono: </b> 4249-1746</p>'+
       '<p><b>e-mail: </b> buonavitadietetica@gmail.com</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Dietética Cuenca y Beiró</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/cuenca_y_beiro.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Cuenca 3514</p>' +
       '<p><b>Teléfono: </b> 4504-3699</p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Vie 9 a 19hs Sab 9 a 14hs</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Gaia</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/gaia.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Peru 657</p>' +
       '<p><b>Teléfono: </b> 4361-0146</p>'+
       '<p><b>e-mail: </b> dieteticagaia@outlook.com</p>'+
       '<p><a href="https://www.facebook.com/gaia.dietetica/" target="_blank">Facebook</a></p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Vie 9 a 20hs Sab 10 a 15hs </p>'+
       '</div>'+
       '</div>'],

     /*  ['<div>' +
       '<h2>Nat Gen</h2>' +
       '<p>Ramirez de Velazco 690</p>' +
       '<p><b>Teléfono: </b> 4856-8885</p>'+
       '<p><a href="https://www.facebook.com/TiendasNatgen/" target="_blank">Facebook</a></p>'+
       '</div>'],*/

      ['<div class=cartelDieteticas>' +
       '<h2>Almacen Purista</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/almacen_purista.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Ramirez de Velazco 701</p>' +
       '<p><b>Teléfono: </b> 4779-2210</p>'+
       '<p><b>e-mail: </b> info@almacenpurista.com  / franquicias@almacenpurista.com </p>'+
       '<p><b>Sitio web: </b><a href="http://www.almacenpurista.com" target="_blank">www.almacenpurista.com</a></p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Dame tu Mano</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/dame_tu_mano.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Quesada 5094</p>' +
       '<p><b>Teléfono: </b> 4541-1024</p>'+
       '<p><b>e-mail: </b> espaciodametumano@gmail.com</p>'+
       '<p><a href="https://www.facebook.com/www.DAMETUMANOalmacennatural/" target="_blank">Facebook</a></p>'+
       '<p><b>Sitio web: </b><a href="http://dametumanoalmacen.com.ar/" target="_blank">www.dametumanoalmacen.com.ar</a></p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Vie 10 a 14hs - 17 a 20:30hs Sab 9:30 a 15hs</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>La Despensa</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/la_despensa.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Elcano 3901</p>' +
       '<p><b>Teléfono: </b> 4554-5926</p>'+
       '<p><a href="https://www.facebook.com/ladespensaorganicos/" target="_blank">Facebook</a></p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Vie 10 a 14hs - 16 a 20hs </p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Matices Naturales</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/matices_naturales.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Av. Triunvirato 4264</p>' +
       '<p><b>Teléfono: </b> 4522-2206</p>'+
       '<p><a href="https://www.facebook.com/maticesnaturales/" target="_blank">Facebook</a></p>'+
       '<p><b>Sitio web: </b><a href="http://www.maticesnaturales.com.ar" target="_blank">www.maticesnaturales.com.ar</a></p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Conciencia Almacén Natural</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/conciencia.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Gral Jose G Artigas 5404</p>' +
       '<p><b>Teléfono: </b> 4574-4637</p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Sab 9 a 13hs - 16 a 20:30hs</p>'+
       '</div>'+
       '</div>'],

      ['<div class=cartelDieteticas>' +
       '<h2>Couss Couss</h2>' +
       '<div class="imagenDieteticas">' +
       '<img src="logos/álmacen_couss_couss.jpg" alt="imagen de dietética"  >' +       
       '</div>'+
       
       '<div class="datosDieteticas">' +
       '<p><b>Dirección: </b>Av. Nazca 4811</p>' +
       '<p><b>Teléfono: </b> 4572-6233</p>'+
       '<p><b>Horarios: </b> '+
       'Lu a Vie 9:30 a 13hs - 17 a 20hs Sab 9:30 a 13:30hs</p>'+
       '</div>'+
       '</div>'],
  ];