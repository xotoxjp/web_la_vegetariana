 //Suscribe function para revista online
 //Submit Newsletter form to PHP file

$("#form_newsletter").submit(function(event) {
  //stop form from submitting normally
  event.preventDefault();

  //get some values from elements on the page:
  var $form = $( this );



  //Send the data using post     
  var posting

  $.ajax({
      //type: 'HEAD',
      url: '../process_form.php',
      async: false,
  }).done (function() {
        posting  = $.post( '../process_form.php', $form.serialize() );
  }).fail (function() {
        console.log("error 404...file not found")
  });

  // console.log(algo);

  //Show result
  posting.done(function( data ) {

    $("#form_newsletter button").hide();
    
    $("#form_newsletter_result").hide().html(data).fadeIn();
  });

});