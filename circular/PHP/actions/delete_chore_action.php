<?php

include "../settings/connection.php";

if (isset($_GET['cid'])) {
    $chore_id = $_GET['cid'];
    $sql = "DELETE FROM chores WHERE cid = $chore_id";
    if ($conn->query($sql) === TRUE) {
        header("Location:../admin/chore_control_view.php");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "No data received";
}