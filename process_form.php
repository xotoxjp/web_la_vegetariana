<?php
//PROCESS NEWSLETTER FORM HERE


if(!isset($_POST) || !isset($_POST['email']))
{ 
    $msg = $_POST['email'];
    echo '<div class="alert alert-danger"><p><i class="fa fa-exclamation-triangle"></i> '.$msg.'</p></div>';
    return false;
}

if($_POST['email'] == '')
{
    //ERROR: FIELD "email" EMPTY
    $msg = 'Por favor ingrese una cuenta de mail valida.';
    echo '<div class="alert alert-danger"><p><i class="fa fa-exclamation-triangle"></i> '.$msg.'</p></div>';
    return false;
}

///////////////////////////////////////////////
//Now yo can save subscriber in your database//
//And send confirmation email if necessary...//
///////////////////////////////////////////////

//Option 1) Send confirmation email. More info here: http://php.net/manual/es/function.mail.php

/*
mail("my_email@exemple.com","New subscriber","Email: ".$_POST['email']);
*/

//Option 2) Save subscriber on TXT file. More info here: http://www.w3schools.com/php/php_file_create.asp

/**/
$myfile = fopen("subscriptores.csv", "a") or die("No se puede abrir el archivo de subscripciones");
$txt = $_POST['email'].",";
fwrite($myfile, $txt);
fclose($myfile);
/**/

//And send success message:
$msg = 'Estamos en contacto!.';
echo '<div class="alert alert-success"><p><i class="fa fa-check"></i> '.$msg.'</p></div>';
return true;


//send an email with attachment of new suscribers
$my_file = "subscriptores.csv";
$my_path = "/public_html/";
$my_name = "sitio web";
$my_replyto = "7juanpablo@gmail.com";
$my_subject = "Nuevos subscriptores";
$my_message = "Le envío nuevos subscritores que ingresaron a la web de la revista! Saludos!!!";
mail_attachment($my_file, $my_path, "7juanpablo@gmail.com", $my_name, $my_replyto, $my_subject, $my_message);


function mail_attachment($filename, $path, $mailto, $from_name, $replyto, $subject, $message) {
 $file = $path.$filename;
 $file_size = filesize($file);
 $handle = fopen($file, "r");
 $content = fread($handle, $file_size);
 fclose($handle);
 $content = chunk_split(base64_encode($content));
 $uid = md5(uniqid(time()));
 $header = "From: ".$from_name." <".$from_mail.">\r\n";
 $header .= "Reply-To: ".$replyto."\r\n";
 $header .= "MIME-Version: 1.0\r\n";
 $header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";
 $header .= "This is a multi-part message in MIME format.\r\n";
 $header .= "--".$uid."\r\n";
 $header .= "Content-type:text/plain; charset=iso-8859-1\r\n";
 $header .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
 $header .= $message."\r\n\r\n";
 $header .= "--".$uid."\r\n";
 $header .= "Content-Type: application/octet-stream; name=\"".$filename."\"\r\n"; // use different content types here
 $header .= "Content-Transfer-Encoding: base64\r\n";
 $header .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
 $header .= $content."\r\n\r\n";
 $header .= "--".$uid."--";
 if (mail($mailto, $subject, "", $header)) {
 echo "mail send ... OK"; // or use booleans here
 } else {
 echo "mail send ... ERROR!";
 }
}
?>