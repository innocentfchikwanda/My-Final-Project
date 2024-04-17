<?php

header('Access-Control-Allow-Origin: http://localhost:3000');

include '../settings/connection.php';
include '../functions/sanitize.php';

if (isset($_POST['signup'])) {
    $fname = sanitize_input($_POST['fname']);
    $lname = sanitize_input($_POST['lname']);
    $gender = sanitize_input($_POST['gender']);
    $dob = sanitize_input($_POST['dob']);
    $tel = sanitize_input($_POST['tel']);
    $email = sanitize_input($_POST['email']);
    $pass = sanitize_input($_POST['pass']);
    $re_pass = sanitize_input($_POST['re_pass']);
    $agree_term = sanitize_input($_POST['agree-term']);

    //sanitizing the data
    $error = array();

    if (empty($fname) or empty($lname) or empty($gender) or empty($dob) or empty($tel) or empty($email) or empty($pass) or empty($re_pass)) {
        array_push($error, "All fields are required");
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        array_push($error, "Invalid email format");
    }
    if ($pass != $re_pass) {
        array_push($error, "Passwords do not match");
    }
    if (strlen($pass) < 8) {
        array_push($error, "Password must be at least 8 characters long");
    }
    if (!isset($agree_term)) {
        array_push($error, "You must agree to the terms and conditions");
    }

    if (count($error) == 0) {

        $hashed_pass = password_hash($pass, PASSWORD_DEFAULT);
        $sql = "INSERT INTO users (fname, lname, sex, dob, pnumber, email, pwd) VALUES ('$fname', '$lname', '$gender', '$dob', '$tel', '$email', '$hashed_pass')";

        if ($conn->query($sql) === TRUE) {

            //re-direct to Login_view.php

            header("Location:http://localhost:5173/home");

        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        foreach ($error as $err) {
            echo $err . "<br>";
        }
    }
}
$conn->close();