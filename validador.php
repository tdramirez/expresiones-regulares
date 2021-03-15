<?php 

// $cadena = "tel!mo `~ d@anie^l";
$cadena = $_POST['valor'];
$patron = "/[~`!^&@]/";
$respuesta = preg_replace($patron, '', $cadena);

echo json_encode($respuesta);


?>
