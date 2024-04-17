<?php

function chore_fxn()
{

    include "../action/get_all_chores_action.php";

    $var_data = select_all_chores();

    //using this variable create a table that displays all chores
    echo "<div class=table-responsive>";
    echo "<table class='table'>";
    echo "<tr><th>Chore ID</th><th>Chore Name</th><th>Action</th></tr>";

    foreach ($var_data as $chore) {
        echo "<tr>";
        echo "<td>" . $chore['cid'] . "</td>";
        echo "<td>" . $chore['chorename'] . "</td>";
        echo "<td>";
        echo "<a href='../admin/edit_chore_view.php?cid=" . $chore['cid'] . "'><img src='edit_icon.png' alt='Edit'></a>";
        echo "<a href='../action/delete_chore_action.php?cid=" . $chore['cid'] . "'><img src='delete_icon.png' alt='Delete'></a>";
        echo "</td>";
        echo "</tr>";
    }



    echo "</table>";
    echo "<div>";
}