<?php

//Start session using PHP session method.
session_start();

//Include the connection file
include '../settings/connection.php';
include '../functions/sanitize.php';

$n_reg_err = "User not registered";
$pu_err = "Incorrect username or password";

//Check if login button was clicked
if (isset($_POST['login'])) {

    $email = sanitize_input($_POST['email']); //sanitizing input
    $pass = sanitize_input($_POST['pass']); // sanitizing input

    // Using prepared statement to prevent SQL injection
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result(); //query execution

    //some users found, user exists
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) { //for each record found
            $hashed_pass = $row['pwd'];
            $verify = password_verify($pass, $hashed_pass);
            if ($verify) {
                $_SESSION['uid'] = $row['email'];
                $_SESSION['rid'] = $row['id'];
                header("Location:http://localhost:5173/home");
            } else {
                $error_message = "Incorrect username or password";
                header('Location:http://localhost:5173?error=' . urlencode($error_message));// Redirect to login page with error message
                die();
            }
        }
        //user does not exist
    } else {
        //Stop processing and provide appropriate message or redirection.
        $error_message = "User not registered";
        header('Location:http://localhost:5173?error=' . urlencode($error_message));//redirect to login
        die(); // destroy the session
    }
}

