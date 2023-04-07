<?php
if(isset($_POST['submit'])) {
    $to = "shivasgaming75@gmail.com"; // Replace with your own email address
    $subject = $_POST['subject'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $headers = "From: ".$name." <".$email."> \r\n";
    $headers .= "Reply-To: ".$email." \r\n";
    
    mail($to, $subject, $message, $headers);
    
    echo "Your message has been sent successfully.";
}
?>
