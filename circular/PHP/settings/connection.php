<?php
$servername = "34.35.42.62";
$username = "innocent";
$password = "mysql.1223";
$DATABASE = 'circulardb';

// Create connection
$conn = new mysqli($servername, $username, $password, $DATABASE);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

echo "connection suceeded";

