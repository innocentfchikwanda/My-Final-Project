<?php
include '../settings/connection.php';
include '../functions/sanitize.php';

if (isset($_POST['choreSubmit'])) {
    $chore = sanitize_input($_POST['chore']); //sanitize input

    $sql = "INSERT INTO chores (chorename) VALUES ('$chore')";

    if ($conn->query($sql) === TRUE) {

        //re-direct to Login_view.php

        header("Location:../admin/chore_control_view.php");

    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "No data received";
}
$conn->close();