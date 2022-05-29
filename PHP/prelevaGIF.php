<?php

/*
const endPointAPIGIF = "https://api.giphy.com/v1/gifs/search?api_key=";
const KEY = "1s2le53GpUp2F2xGGfNJANSWuKtvm5I5";

fetch(endPointAPIGIF + KEY + "&q=Animal&limit=100&offset=0&rating=g&lang=it").then(onResponse).then(printGIF);*/

include "../PHP/DBConnection.php";

$conn = mysqli_connect($DBConnection['host'], $DBConnection['user'], $DBConnection['password'], $DBConnection['name']);
$tipo = mysqli_real_escape_string($conn, $_GET["q"]);

if($tipo == "info"){

    $KEY = "1s2le53GpUp2F2xGGfNJANSWuKtvm5I5";
    $endPointAPIGIF = "https://api.giphy.com/v1/gifs/search?api_key=";

    $URL = $endPointAPIGIF.$KEY."&q=how+about+you&limit=10&offset=0&rating=g&lang=it";
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $URL);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);

    //echo $result;    

    echo $result;

}else{

    $KEY = "1s2le53GpUp2F2xGGfNJANSWuKtvm5I5";
    $endPointAPIGIF = "https://api.giphy.com/v1/gifs/search?api_key=";

    $URL = $endPointAPIGIF.$KEY."&q=welcome&limit=10&offset=0&rating=g&lang=it";
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $URL);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);

    echo $result;


}



curl_close($curl);

?>