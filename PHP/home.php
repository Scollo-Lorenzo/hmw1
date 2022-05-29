<?php

    session_start();
    if(!isset($_SESSION["username"])){

        header("Location: ../PHP/login.php");
        exit;

    }

?>

<html>

    <head>

        <title> HM1 Home</title>

        <link href="https://fonts.googleapis.com/css?family=Pangolin:400,700|Proxima+Nova" rel="stylesheet" type="text/css">
        
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Koulen&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="../CSS/CSSxHOME.css?v=<?php echo time(); ?>"/> 
		<script src="../JS/home.js?v=<?php echo time(); ?>"/ defer="true"></script>
		<meta name="viewport" content="width=device-width, initial-scale=1"> 

    </head>

    <body>

        <main>

            <header>

                <nav>

                    <div id="welcome">
                        
                    BENVENUTO: <h1> <?php echo $_SESSION["username"]; ?> </h1>

                    <span id="gif"> </span>

                    <br>
                    Fatti un giro nella nostra vetrina, la selezione di oggi offre:
                    
                    </div>

                    <div id="drop-menu">
                        <ul id="menu">
                            <li><a href="#">MENU</a>
                                <ul>
                                    <li><a href="carrello.php">CARRELLO</a></li>
                                    <li><a href="listaPreferiti.php">LISTA PREFERITI</a></li>
                                    <li><a href="info.php">INFO ACCOUNT</a></li>
                                    <li> 
                                        <form name = "form_logout" method = "GET"> 

                                            <label> &nbsp; <input type="submit" value="LOGOUT"> </label>

                                        </form>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                </div>

                </nav>

            </header>



            <section id="vista">



            </section>

            <section id="modale" class="hidden">



            </section>



            <section id = "sezione_ricerca">

                <section id = "img_cerca">

                    <form id = "cerca">

                        <label id ="request">

                            Effettua ricerca per:

                            <select name = 'tipo' id='tipo'>
                                <option value='brand'>Brand</option>
                                <option value='name'>Nome</option>
                            </select>

                        </label>

                        <br>

                        <label id="request">

                            Inserisci nome di ciò che vuoi cercare da Cercare: 
                            <br>
                            <input type = "text" id = "contenuto_textbox">

                        </label>

                        <br>

                        <label id="request">

                            Scegli quanti elementi vuoi far visualizzare:

                            <select name = 'numberOfElement' id='numberOfElement'>
                                <option value='dieci'>10</option>
                                <option value='quindici'>15</option>
                                <option value='venti'>20</option>
                            </select>

                        </label>

                        <br>

                        <label id="bottone_invio">&nbsp;<input class="submit" type='submit' value="Cerca"></label> 


                    </form>

                </section>

            </section>

            <section id="vista_dinamica">



            </section>

            <section id="footer">

            </section>

        </main>

    </body>

</html>