
<?php


// <!-- Mario D. quiroz fotografía -->
// ASIGNACIÓN DE VARIABLES

$first_name = $_POST['name'];

$phone_number = $_POST['phone'];

$email = $_POST['email'];

$message = $_POST['comments'];

$destinatario = 'darkmarthur@gmail.com';

$titulo = 'CORREO DE MARIO D. QUIROZ.COM';
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $first_name\nE-Mail: $email\nTeléfono: $phone_number\n\nMensaje:\n $message";
  
  

  //PROCESO DE ENVÍO
if ($_POST['submit']) {
if (mail($destinatario, $titulo, $msjCorreo, $header)) {
echo "<script language='javascript'>
alert('Tus datos han sido enviados con éxito.');
window.location.href = 'http://www.mariodquiroz.com/contact.html';
</script>";
} else {
echo 'Falló el envio, favor de reintentar';
}
}




?>	


