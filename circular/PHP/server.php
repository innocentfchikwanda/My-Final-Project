<?php

include "actions/login_user_action.php";
include "actions/register_user_action.php";

header('Access-Control-Allow-Origin: localhost:5173');

// Check if the name has been sent in the POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['name'])) {
    $name = $_POST['name'];
    // Respond with a greeting
    echo "Hello, " . htmlspecialchars($name) . "!";
} else {
    // Respond with an error message if the name isn't provided
    echo "Name not provided!";
}
?>
