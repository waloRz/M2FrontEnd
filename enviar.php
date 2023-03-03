<?php  
if(isset($_POST['correo']) && isset(['mensaje'])){
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];
}
    $from = $correo;
	$to = "prueba.envio@gmail.com";
	$subject = "Nuevo mensaje de ". $correo;
	$message = $mensaje;
	$headers = "From:" . $from;
 
    mail($to,$subject,$message, $headers)
    if(mail ($to, $subject, $message, $headers)){
        echo 1;
    }else{
        echo 0;
    }

    }

?>