<?php

include "../PHP/DBConnection.php";

session_start();
$user = $_SESSION["username"];

$conn = mysqli_connect($DBConnection['host'], $DBConnection['user'], $DBConnection['password'], $DBConnection['name']);
$Dati = mysqli_real_escape_string($conn, $_GET["q"]);


$divisi = explode("-----", $Dati);

if($divisi[6] == "preferiti"){

    //Inserimento sulla Lista Preferiti

    $qInsShoes = "INSERT INTO `scarpe`(`ID`, `Nome`, `Brand`, `URLFoto`, `Prezzo`) VALUES ('$divisi[1]','$divisi[2]','$divisi[3]','$divisi[4]', '$divisi[5]')";
    $resqInsShoes = mysqli_query($conn, $qInsShoes);
    
    $qPrelevaID = "SELECT ID FROM utente WHERE Username = '$user'";
    $resqPrelevaID = mysqli_query($conn, $qPrelevaID);
    
    $ID = mysqli_fetch_row($resqPrelevaID);
    
    $qInserimento = "INSERT INTO `listapreferiti`(`ID_Utente`, `ID_Scarpa`, `Prezzo`) VALUES ('$ID[0]','$divisi[1]','$divisi[5]')";
    $resqInserimento = mysqli_query($conn, $qInserimento);

}else{

    //Inserimento su CARRELLO

    $qInsShoes = "INSERT INTO `scarpe`(`ID`, `Nome`, `Brand`, `URLFoto`, `Prezzo`) VALUES ('$divisi[1]','$divisi[2]','$divisi[3]','$divisi[4]', '$divisi[5]')";
    $resqInsShoes = mysqli_query($conn, $qInsShoes);

    $qPrelevaID = "SELECT ID FROM utente WHERE Username = '$user'";
    $resqPrelevaID = mysqli_query($conn, $qPrelevaID);

    $ID = mysqli_fetch_row($resqPrelevaID);

    $qInserimento = "INSERT INTO `carrello`(`ID_Utente`, `ID_Scarpa`, `Prezzo`) VALUES ('$ID[0]','$divisi[1]','$divisi[5]')";
    $resqInserimento = mysqli_query($conn, $qInserimento);

}

mysqli_close($conn);

?>