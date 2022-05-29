<?php

include "../PHP/DBConnection.php";

session_start();

$conn = mysqli_connect($DBConnection['host'], $DBConnection['user'], $DBConnection['password'], $DBConnection['name']);
$Credenziali = mysqli_real_escape_string($conn, $_GET["q"]);

$divisi = explode("-----", $Credenziali);

$Username       = $divisi[0];
$Email          = $divisi[1];
$DataNascita    = $divisi[2];
$Password       = $divisi[3];
$hashed_password = hash("sha256", $Password);

//$query = "INSERT INTO `utente`(`Username`, `Email`, `DataNascita`, `Password`) VALUES ('$Username','$Email','$DataNascita','$Password')";
$query = "INSERT INTO `utente`(`Username`, `Email`, `DataNascita`, `Password`) VALUES ('$Username','$Email','$DataNascita','$hashed_password')";
$res = mysqli_query($conn, $query);
    
$_SESSION['username'] = $Username;


mysqli_close($conn);

?>