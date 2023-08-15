<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process user sign-up

    // After successful sign-up, redirect to the dashboard
    header("Location: dashboard.php");
    exit();
}
?>
