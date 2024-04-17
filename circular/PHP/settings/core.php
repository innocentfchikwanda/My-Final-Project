<?php

session_start();

function check_user_id()
//a function that checks if the user id session exists 
{
    //user id does not exist
    if (!isset($_SESSION['uid'])) {
        header('Location:../Login/Login_view.php');//redirect to login
        die(); // destroy the session
    } else {
        // user is exists
        return true;
    }
}

function check_roie_id()
//a function that checks if the role id session exists
{
    if (!isset($_SESSION['rid'])) {
        return false;
    } else {
        return $_SESSION['rid'];
    }
}
