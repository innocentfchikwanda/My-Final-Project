<?php

//a function that selects all chores if any and returns them

function select_all_chores()
{
    include "../settings/connection.php";
    $sql = "SELECT * FROM chores";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // assign results to a variable and return variable
        $chores = $result->fetch_all(MYSQLI_ASSOC);
        return $chores;
    } else {
        echo "0 results";
    }
}