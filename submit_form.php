<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $contact = $_POST["contact"];
    $message = $_POST["message"];

    $formspreeEndpoint = 'https://formspree.io/f/xoqgvpyv'; // Replace with your Formspree endpoint

    $data = array(
        'name' => $name,
        'contact' => $contact,
        'message' => $message
    );

    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );

    $context  = stream_context_create($options);
    $result = file_get_contents($formspreeEndpoint, false, $context);

    if ($result !== false) {
        echo "Form submitted successfully!";
    } else {
        http_response_code(500); // Internal Server Error
        echo "Error submitting form. Please try again later.";
    }
} else {
    http_response_code(400); // Bad Request
    echo "Invalid request.";
}
?>
