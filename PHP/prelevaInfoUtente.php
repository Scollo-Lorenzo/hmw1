<?php

include "../PHP/DBConnection.php";

session_start();
$user = $_SESSION["username"];

$conn = mysqli_connect($DBConnection['host'], $DBConnection['user'], $DBConnection['password'], $DBConnection['name']);

$query = "SELECT * FROM utente WHERE Username = '$user'";
$res = mysqli_query($conn, $query);

$response = mysqli_fetch_assoc($res);

echo json_encode($response);
mysqli_close($conn);

?>