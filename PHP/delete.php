<?php

include "../PHP/DBConnection.php";

$conn = mysqli_connect($DBConnection['host'], $DBConnection['user'], $DBConnection['password'], $DBConnection['name']);
$Dati = mysqli_real_escape_string($conn, $_GET["q"]);

$divisi = explode("-----", $Dati);

if($divisi[1] == "preferiti"){
    
    $queryDelFromFav = "DELETE FROM listapreferiti WHERE ID_Scarpa = '$divisi[0]'";
    $queryDelFromShoes = "DELETE FROM scarpe WHERE ID = '$divisi[0]'";
    
    $resQ1 = mysqli_query($conn, $queryDelFromFav);
    $resQ2 = mysqli_query($conn, $queryDelFromShoes);

}else{

    $queryDelFromFav = "DELETE FROM carrello WHERE ID_Scarpa = '$divisi[0]'";
    $queryDelFromShoes = "DELETE FROM scarpe WHERE ID = '$divisi[0]'";

    $resQ1 = mysqli_query($conn, $queryDelFromFav);
    $resQ2 = mysqli_query($conn, $queryDelFromShoes);

}

mysqli_close($conn);

?>