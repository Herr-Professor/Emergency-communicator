<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $contact = $_POST["contact"];
    $message = $_POST["message"];

    $to = "huerobts@gmail.com";
    $subject = "Emergency Form Submission";

    $email_body = "Name: $name\nContact: $contact\nMessage: $message";

    // Use mail() function to send the email (replace with a more robust solution in a production environment)
    mail($to, $subject, $email_body);

    // Redirect back to the index.html after submission
    header("Location: index.html");
    exit();
}
?>
