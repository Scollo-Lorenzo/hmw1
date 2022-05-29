<?php

include "../PHP/DBConnection.php";

$response = array("esiste" => "undefined");

$conn = mysqli_connect($DBConnection['host'], $DBConnection['user'], $DBConnection['password'], $DBConnection['name']);
$UserPass = mysqli_real_escape_string($conn, $_GET["q"]);

//Dividiamo l'Username dalla Password
$divisi = explode("-----", $UserPass);

$Username = $divisi[0];
$Password = $divisi[1];


//Controlliamo che l'username non sia già inserito nel Database
//$queryControllo = "SELECT Username, Password FROM utente WHERE Username = '$divisi[0]' AND Password = '$divisi[1]";

$queryControlloUsername = "SELECT Username FROM utente WHERE Username = '$Username'";
$result = mysqli_query($conn, $queryControlloUsername);

if(mysqli_num_rows($result) > 0){

    $response = array("esiste" => "si");

    $queryControlloPassword = "SELECT Password FROM utente WHERE Username = '$Username'";
    $resultPassword = mysqli_query($conn, $queryControlloPassword);

    //Prelevalo la Password (hashed) dal DB
    $PassDB = mysqli_fetch_row($resultPassword);

    //Faccio l'hashing della password che ha inserito l'utente
    $hashed_password = hash("sha256", $Password);

    if($PassDB[0] == $hashed_password){

        $response = array("coincidono" => "si");

    }else{

        $response = array("coincidono" => "no");

    }

}else{

    $response = array("esiste" => "no");

}

echo json_encode($response);
mysqli_close($conn);
?>