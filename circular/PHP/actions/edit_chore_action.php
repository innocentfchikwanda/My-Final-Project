<?php

include "../settings/connection.php";

$id = $_POST['cid'];
$chore = $_POST['chore'];

$sql = "UPDATE `chores` SET `chorename` = '$chore' WHERE `cid` = '$id'";



if ($conn->query($sql) === TRUE) {
    header("Location:../admin/chore_control_view.php");
} else {
    echo "Error updating record: " . $conn->error;
}