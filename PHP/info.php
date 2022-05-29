<?php

session_start();

?>

<html>

    <head>

        <title> Info su <?php echo $_SESSION["username"]; ?> </title>

        <link href="https://fonts.googleapis.com/css?family=Pangolin:400,700|Proxima+Nova" rel="stylesheet" type="text/css">
        
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Koulen&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="../CSS/Carrello_Fav.css?v=<?php echo time(); ?>"/> 
		<script src="../JS/info.js?v=<?php echo time(); ?>"/ defer="true"></script>
		<meta name="viewport" content="width=device-width, initial-scale=1"> 

    </head>

    <body>

        <main>


                    <div id="header">
                                    
                        <section id="goBack" class="inline">

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLrLuBmv9_C0QrrC0hbtCSXUgRQSTj6uIpyedGXnqOXJcKVc1yDlSB2AFeCRKgYYA09E&usqp=CAU">
                            
                        </section>

                        Info su: <h1> <?php echo $_SESSION["username"]; ?> </h1> 
                        
                        <section id="gif"> </section>

                        <br>
                                    
                    </div>

                    <section id="info">

                        <h1> INFO ACCOUNT </h1>
                        <section id="account">

                        </section>

                        Contenuto <h1> CARRELLO </h1> Totale: <h1 id="Totale_Carrello"> </h1>
                        <section id="carrello">    

                        </section>

                        Contenuto <h1> LISTA PREFERITI </h1> Totale: <h1 id="Totale_Preferiti"> </h1>
                        <section id="favList">

                        </section>

                        <section id="modale" class="hidden"> </section>

                    </section>

        </main>

    </body>

</html>
