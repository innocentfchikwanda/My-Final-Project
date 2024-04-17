<?php

function get_chore($id)
{
    include "../settings/connection.php";
    $sql = "SELECT * FROM chores WHERE cid = '$id'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // assign results to a variable and return variable
        $choresFound = $result->fetch_all(MYSQLI_ASSOC);
        return $choresFound;
    } else {
        echo "0 results";
    }
}