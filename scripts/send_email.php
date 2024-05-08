<!-- send_email.php -->
<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set up email parameters
    $to = "JHuismandev@gmail.com"; // Your email address
    $subject = "New Contact Form Submission";
    $headers = "From: $name <$email>";
    $body = "Name: $name\nEmail: $email\n\n$message";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    // Handle invalid request method
    echo "Invalid request method.";
}

?>
