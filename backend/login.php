<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process user log-in

    // After successful log-in, redirect to the dashboard
    header("Location: dashboard.php");
    exit();
}
?>
