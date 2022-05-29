<html>

    <head>

        <title> HM1 registrazione </title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Koulen&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="../CSS/file.css?v=<?php echo time(); ?>"/> 
		<script src="../JS/registration.js?v=<?php echo time(); ?>"/ defer="true"></script>
		<meta name="viewport" content="width=device-width, initial-scale=1"> 

    </head>

    <body>

            <main>

                <form name = "nome_form_reg" method = "POST"> 

                <label id="tastoAccedi_Registrati">  Hai già un Account? -<a href="http://localhost/HMW1/PHP/login.php"> ACCEDI </a>- allora!! </label>

                    <p>

                        <label> Username: <input type="text" name ="Username" placeholder="nome1947" id="username"> </label>
                        <span> </span>
                    </p>
    
                    <p>

                        <label> Email: <input type="text" name ="Email" placeholder="example@live.it" id="email"> </label>
                        <span> </span>

                    </p>

                    <p>

                        <label> Data di Nascita: (AAAA/MM/GG) <input type="text" name ="DataNascita" placeholder="2000/02/24" id="data"> </label>
                        <span> </span>

                    </p>
    
                    <p>

                        <label> Password: <input type="password" name ="Password" placeholder="Almeno 8 Caratteri" id="password"> </label>
                        <span> </span>
                    </p>

                    <p>

                        <label> &nbsp; <input type="submit" value="REGISTRATI"> </label>

                    </p>

                    <label> <span id="errorMsg"> </span> </label>

                </form>

            </main>

    </body>

</html>
