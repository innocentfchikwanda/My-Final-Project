<?php

/*
- Write a SELECT query on the "family_name" table
- execute the query using the connection
- check if execution worked
- fetch the results
- use the results to build the family dropdown on the Register_view.php page
*/

function drop_down_options()
{
    include "../settings/connection.php";
    $sql = "SELECT fam_name FROM family_name";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            echo "<option value='" . $row["fam_name"] . "'>" . $row["fam_name"] . "</option>"; //changed from family
        }
    } else {
        echo "0 results";
    }
}
