<?php

/*






OIf no record found provide appropriate response (user not registered,incorrectusername or password, etc.)
o If a record is found continue with the processing below
Fetch the record.
Verify password user provided against database record using the php method password_verify()
If verification fails provide appropriate response (incorrect username or password, etc.)O
o Ifit's a match, continue with the processing below.
Create a session for user id and role id
Redirect to home/dashboard page.*/

//Start session using PHP session method.
session_start();

//Include the connection file
include '../settings/connection.php';
include '../functions/sanitize.php';

$n_reg_err = "User not registered";
$pu_err = "Incorrect username or password";

//Check if login button was clicked
if (isset($_POST['login'])) {
    $email = sanitize_input($_POST['your_name']); //sanitizing input
    $pass = sanitize_input($_POST['your_pass']); // sanitizing input

    // Using prepared statement to prevent SQL injection
    $sql = "SELECT * FROM people WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result(); //query execution

    //some users found, user exists
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) { //for each record found
            $hashed_pass = $row['passwd'];
            $verify = password_verify($pass, $hashed_pass);
            if ($verify) {
                $_SESSION['uid'] = $row['email'];
                $_SESSION['rid'] = $row['rid'];
                header("Location:../view/index.php");
            } else {
                $error_message = "Incorrect username or password";
                header('Location:../Login/Login_view.php?error=' . urlencode($error_message));// Redirect to login page with error message
                die();
            }
        }
        //user does not exist
    } else {
        //Stop processing and provide appropriate message or redirection.
        $error_message = "User not registered";
        header('Location:../Login/Login_view.php?error=' . urlencode($error_message));//redirect to login
        die(); // destroy the session
    }
}

