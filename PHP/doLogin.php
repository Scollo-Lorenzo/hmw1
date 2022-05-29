<?php

include "../PHP/DBConnection.php";

session_start();

$conn = mysqli_connect($DBConnection['host'], $DBConnection['user'], $DBConnection['password'], $DBConnection['name']);
$Username = mysqli_real_escape_string($conn, $_GET["q"]);

$_SESSION["username"] = $Username;

mysqli_close($conn);
exit;

?>