<?php

include "../PHP/DBConnection.php";

$conn = mysqli_connect($DBConnection['host'], $DBConnection['user'], $DBConnection['password'], $DBConnection['name']);
$Credenziali = mysqli_real_escape_string($conn, $_GET["q"]);

$divisi = explode("-----", $Credenziali);

$Username       = $divisi[0];
$Email          = $divisi[1];
$DataNascita    = $divisi[2];
$Password       = $divisi[3];

$response = array("errore" => "no_error");

if($Username !== "vuoto") //Se il Campo che contiene l'Username non è vuoto lo controlla
{

    //Prima di fare la query, vediamo se l'Username inserito soddisfa alcune condizioni:
    $pattern = '/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[_.\-()?#;:!@])[0-9A-Za-z_.\-()?#;:!@]{1,31}$/';

    if(!preg_match($pattern, $Username)){ //L'Username deve avere ettera Miaiuscola, Minuscola, Un Numero e Un Carattere Speciale

        $response = array("errore" => "username_non_valido");

    }
    else{

        //Controlliamo che l'username non sia già inserito nel Database
        $queryControllo = "SELECT Username FROM utente WHERE Username = '$Username'";
        //Eseguiamo la Query
        $result = mysqli_query($conn, $queryControllo);

        if(mysqli_num_rows($result) > 0){

            $response = array("errore" => "username_gia_esistente");

        }
    }

}

if($Email !== "vuoto") //Se il Campo che contiene l'Email non è vuoto lo controlla
{

    if(!filter_var($Email, FILTER_VALIDATE_EMAIL)){

        $response = array("errore" => "email_non_valida");
    
    }

}

if($DataNascita !== "vuoto"){ //Se il Campo che contiene la Data di Nascita non è vuoto lo controlla

    $dataDivisa = explode("/", $divisi[2]); 

    if($dataDivisa[0] <= "1900" || $dataDivisa[0] >= date("Y")){

        $response = array("errore" => "data_non_valida");

    }else if($dataDivisa[1] <= "0" || $dataDivisa[1] > "12"){

        $response = array("errore" => "data_non_valida");

    }else if($dataDivisa[2] <= "0" || $dataDivisa[2] > "31"){

        $response = array("errore" => "data_non_valida");

    }

}

if($Password !== "vuoto"){

    $pattern = '/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[_.\-()?#;:!@])[0-9A-Za-z_.\-()?#;:!@]{1,15}$/';

    if(strlen($Password) < 8){

        $response = array("errore" => "password_troppo_corta");

    }else if(!preg_match($pattern, $Password)){ //La Password deve avere una Lettera Maiuscola, una Minuscola, Un Numero e Un Carattere Speciale

        $response = array("errore" => "password_non_valida");

    }

}




echo json_encode($response);
//echo json_encode($dataDivisa);

mysqli_close($conn);
?>