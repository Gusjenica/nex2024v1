<?php 

$messages_sent = false;

if(isset($_POST['email']) && $_POST['email'] != ''){
    
    if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
        $username = $_POST['name'];
        $mail = $_POST['email'];
        $messages = $_POST['poruka'];


        $to = "aanid.gasic@gmail.com";
        $body = "";

        $body .= "From: ".$username. "\r\n";
        $body .= "Email: ".$mail. "\r\n";
        $body .= "Message: ".$messages. "\r\n";


        mail($to,$body);
        $messages_sent = true;
    }
}


?>