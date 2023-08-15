<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Generate a random verification token
    $verification_token = bin2hex(random_bytes(16));

    // Store user details and token in the database
    // Remember to use prepared statements to prevent SQL injection

    // Send verification email
    $verification_link = "http://yourwebsite.com/verify_email.php?token=$verification_token";
    $email_subject = "Verify Your Email";
    $email_body = "Click the link below to verify your email:\n$verification_link";
    mail($email, $email_subject, $email_body);

    // Redirect to success page
    header("Location: success.html");
}
?>
