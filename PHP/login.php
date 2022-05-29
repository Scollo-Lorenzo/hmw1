<html>

    <head>



        <title> HM1 Login</title>

        <link href="https://fonts.googleapis.com/css?family=Pangolin:400,700|Proxima+Nova" rel="stylesheet" type="text/css">
        
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Koulen&display=swap" rel="stylesheet">

        <script src="../JS/login.js?v=<?php echo time(); ?>"/ defer="true"></script>
        <link rel="stylesheet" href="../CSS/file.css?v=<?php echo time(); ?>"/> 
		<meta name="viewport" content="width=device-width, initial-scale=1"> 

    </head>

    <body>

        <main>

            <form name = "nome_form_login" method = "POST"> 

            <label id="tastoAccedi_Registrati">  Non hai un Account? -<a href="http://localhost/HMW1/PHP/registration.php"> REGISTRATI </a>- allora!! </label>

                <p>

                    <label> Username: <input type="text" name ="Username" id="username"> </label>
                    <span> </span>
                    <span id="gif"> </span>

                </p>

                <p>

                    <label> Password: <input type="password" name ="Password" id="password"> </label>
                    <span> </span>
                    <span id="gif"> </span>

                </p>

                <p>

                    <label> &nbsp; <input type="button" value = "LOGIN" name = "bottoneLogin"> </label>

                </p>

            </form>

        </main>

    </body>

</html>

<?php
/*
include "../PHP/DBConnection.php";

    session_start();

    if(isset($_SESSION["username"])){

        header("Location: ../PHP/home.php");
        exit;

    }

    //Controlli Lato Server

    if(isset($_POST["Username"]) && isset($_POST["Password"])){

        $conn = mysqli_connect($DBConnection['host'], $DBConnection['user'], $DBConnection['password'], $DBConnection['name']);

        $user = $_POST["Username"];
        $psw = $_POST["Password"];

        $query = "SELECT Username, Password FROM utente WHERE Username = '$user' AND Password = '$psw'";

        $res = mysqli_query($conn, $query);

        if(mysqli_num_rows($res) > 0){

            $_SESSION["username"] = $_POST["Username"];

            header("Location: ../PHP/home.php");
            mysqli_close($conn);
            exit;

        }


    }

*/

?>