<?php
function sanitize_input($data)
{
    //A function to sanitize user input and prevent XSS vulnerabilities
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

