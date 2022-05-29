<?php

include "../PHP/DBConnection.php";

session_start();

$user = $_SESSION["username"];

$conn = mysqli_connect($DBConnection['host'], $DBConnection['user'], $DBConnection['password'], $DBConnection['name']);
$Username = mysqli_real_escape_string($conn, $_GET["q"]);

$qPrelevaID = "SELECT ID FROM utente WHERE Username = '$user'";
$resqPrelevaID = mysqli_query($conn, $qPrelevaID);

$ID = mysqli_fetch_row($resqPrelevaID);

$queryPrelevaFav = "SELECT ID_Scarpa FROM carrello WHERE ID_Utente = $ID[0]";
$resQueryPrelevaFav = mysqli_query($conn, $queryPrelevaFav);

if(mysqli_num_rows($resQueryPrelevaFav) > 0){

    $num_righe = mysqli_num_rows($resQueryPrelevaFav)-1;

    for($i = 0; $i <= $num_righe; $i++){

        $response[$i] = mysqli_fetch_row($resQueryPrelevaFav);

        $str = implode(" ", $response[$i]);

        $query = "SELECT * FROM Scarpe WHERE ID = '".$str."'";
        $res = mysqli_query($conn, $query);

        $scarpeCarrello[$i] = array(mysqli_fetch_assoc($res));

    }

}else{

    $scarpeCarrello = array("No_Element");    

}


echo json_encode($scarpeCarrello);
mysqli_close($conn);
?>