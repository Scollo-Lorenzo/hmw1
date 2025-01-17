function fetchResponse(response){

	//console.log("Response -> ", response.ok);

	if(response.ok){

		return response.json();

	}else{

		return null;

	}

}


// Nella pagina "Carrello" diamo la possibilità di rimuovere le scarpe che vi sono all'interno facendo una fetch ad un file php -> delete.php

function remove(event){

    const ID = event.path[1].children[0].textContent;

    //console.log("Event -> ", event);
    //console.log("ID -> ", ID);

    fetch("../PHP/delete.php?q=" + encodeURIComponent(ID) + "-----" + encodeURIComponent("carrello"));

    //Una volta che viene eseguita la query per cancellare la scarpa interessata, "ricarichiamo" la pagina.
    location.href = "../PHP/carrello.php";

    

}

// -----------------------------------------------------------------------------------------------------------------------------------------



// Facciamo stampare tutto quello che è presente nella Tabella "Carrello" dove l'ID_Utente corrisponde con quello dell'utente che ha fatto il LOGIN

function prelevaCarrello(json){

	//console.log("File JSON --->", json);

    const lung = json.length;
    let sommaPrezzi = 0;
    //console.log("Lungh ->", lung);

    const vista = document.querySelector('#carrello');
    vista.innerHTML = '';
    
    if(json[0] == "No_Element"){

        const errorMsg = document.createElement("h1");
        errorMsg.textContent = "Nessun Elemento presente nel Carrello...";
        errorMsg.classList.add(".remove");
        vista.appendChild(errorMsg);

    }else{

        for(let i = 0; i<lung; i++){

                const sezione = document.createElement("div");
                sezione.classList.add("album_scarpe");

                const nome = document.createElement("p");
                nome.textContent = json[i][0].Nome;

                //Prendo l'ID della scarpa ma non lo rendo visibile
                const ID = document.createElement("p");
                ID.textContent = json[i][0].ID;
                ID.classList.add("hidden");

                //Prendo il Brand della scarpa ma non lo rendo visibile
                const Brand = document.createElement("p");
                Brand.textContent = json[i][0].Brand;

                const immagine = document.createElement("img");
                immagine.src = json[i][0].URLFoto;

                const Prezzo = document.createElement("p");
                Prezzo.textContent = json[i][0].Prezzo + "€";
                sommaPrezzi = sommaPrezzi + parseInt(json[i][0].Prezzo);

                const Messaggio = document.createElement("p");
                Messaggio.textContent = "Rimuovi dal Carrello!";
                Messaggio.classList.add("remove");
                Messaggio.addEventListener("click", remove);

                sezione.appendChild(ID);
                sezione.appendChild(nome);
                sezione.appendChild(Brand);
                sezione.appendChild(immagine);
                sezione.appendChild(Prezzo);
                sezione.appendChild(Messaggio);
                vista.appendChild(sezione);
        }

    }

    const tot = document.querySelector('#Totale');
    tot.innerHTML = '';
    if(sommaPrezzi == 0){

        tot.textContent = "0€";

    }else{

        tot.textContent = sommaPrezzi + "€";

    }

}

const carrello = document.querySelector("#carrello");

let Username;

Username = document.querySelector("#header h1");
console.log("Username -> ", Username.textContent);

fetch("../PHP/prelevaDaCarrello.php?q=" + encodeURIComponent(Username.textContent)).then(fetchResponse).then(prelevaCarrello);


function goToHome(){

    location.href = "../PHP/home.php";

}

const indietro = document.querySelector("#goBack img");
indietro.addEventListener("click", goToHome);
