function fetchResponse(response){

	console.log("Response -> ", response.ok);

	if(response.ok){

		return response.json();

	}else{

		return null;

	}

}

//------------------------------------------------------Codice Modale------------------------------------------------------

function apriModale(event) {

	const image = document.createElement('img');
	image.id = 'immagine_post';
	image.src = event.currentTarget.src;
	modale.appendChild(image);
	modale.classList.remove('hidden');
	document.body.classList.add('no-scroll');
}

function chiudiModale(event) {
	console.log(event);
	if(event.key === 'Escape')
	{
		modale.classList.add('hidden');
		img = modale.querySelector('img');
		img.remove();
		document.body.classList.remove('no-scroll');
	}
}

//creo il pulsante per la chiusura del post 
window.addEventListener('keydown', chiudiModale);

//------------------------------------------------------Codice Modale------------------------------------------------------



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
                immagine.addEventListener("click", apriModale);

                const Prezzo = document.createElement("p");
                Prezzo.textContent = json[i][0].Prezzo + "€";
                sommaPrezzi = sommaPrezzi + parseInt(json[i][0].Prezzo);

                sezione.appendChild(ID);
                sezione.appendChild(nome);
                sezione.appendChild(Brand);
                //sezione.appendChild(colore);
                sezione.appendChild(immagine);
                sezione.appendChild(Prezzo);
                vista.appendChild(sezione);
        }

    }

    const tot = document.querySelector('#Totale_Carrello');
    tot.innerHTML = '';
    if(sommaPrezzi == 0){

        tot.textContent = "0€";

    }else{

        tot.textContent = sommaPrezzi + "€";

    }

}

function prelevaFavList(json){

	//console.log("File JSON --->", json);

    const lung = json.length;
    let sommaPrezzi = 0;
    //console.log("Lungh ->", lung);

    const vista = document.querySelector('#favList');
    vista.innerHTML = '';
    
    if(json[0] == "No_Element"){

        const errorMsg = document.createElement("h1");
        errorMsg.textContent = "Nessun Elemento presente nel Lista Preferiti...";
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
                immagine.addEventListener("click", apriModale);

                const Prezzo = document.createElement("p");
                Prezzo.textContent = json[i][0].Prezzo + "€";
                sommaPrezzi = sommaPrezzi + parseInt(json[i][0].Prezzo);

                sezione.appendChild(ID);
                sezione.appendChild(nome);
                sezione.appendChild(Brand);
                //sezione.appendChild(colore);
                sezione.appendChild(immagine);
                sezione.appendChild(Prezzo);
                vista.appendChild(sezione);
        }

    }

    const tot = document.querySelector('#Totale_Preferiti');
    tot.innerHTML = '';
    if(sommaPrezzi == 0){

        tot.textContent = "0€";

    }else{

        tot.textContent = sommaPrezzi + "€";

    }

}

function getRandomNumber(){

    let numRandom; 

        random = Math.random() * (10 - 1) + 1;
        numRandom = parseInt(random);

    return numRandom;

}

function printGIF(json){

    console.log("JSON Ricevuto -->", json);
	data = json.data;

	const sezione = document.querySelector("#gif");
	sezione.innerHTML = ' ';

	console.log("Sezione ->", sezione);
    
    if(data.length == 0){

        const errore = document.createElement("h1"); 
        const messaggio = document.createTextNode("Nessun risultato!"); 
        errore.appendChild(messaggio); 

    }else{

		let numero = getRandomNumber();

		//sezione.classList.add("album_scarpe");
		const new_img = document.createElement("img");
		new_img.src = data[numero].images.downsized.url;

		//Event Listener per rendere cliccabile l'immagine
		//new_img.addEventListener("click", apriModale);

		//Appendiamo tutto alla "vista"
		sezione.appendChild(new_img);

    }

}

function printInfoUtente(json){

    console.log("FILE JSON --> ", json);

    const sezione = document.querySelector("#account");

    const msgNome = document.createElement("p");
    msgNome.textContent = "Nome Utente:";
    const username = document.createElement("strong");
    username.textContent = json.Username;

    const msgEmail = document.createElement("p");
    msgEmail.textContent = "Email:";
    const email = document.createElement("strong");
    email.textContent = json.Email;

    const msgData = document.createElement("p");
    msgData.textContent = "Nato il:";
    const data = document.createElement("strong");
    data.textContent = json.DataNascita;

    const msgID = document.createElement("p");
    msgID.textContent = "Identificativo numero:";
    const ID = document.createElement("strong");
    ID.textContent = json.ID;

    sezione.appendChild(msgNome);
    sezione.appendChild(username);
    sezione.appendChild(msgEmail);
    sezione.appendChild(email);
    sezione.appendChild(msgData);
    sezione.appendChild(data);
    sezione.appendChild(msgID);
    sezione.appendChild(ID);

}

const info = "info";

fetch("../PHP/prelevaGIF.php?q=" + encodeURIComponent(info)).then(fetchResponse).then(printGIF);

fetch("../PHP/prelevaInfoUtente.php").then(fetchResponse).then(printInfoUtente);

let Username;
Username = document.querySelector("#header h1");

const favList = document.querySelector("#favList");
fetch("../PHP/prelevaDaFav.php?q=" + encodeURIComponent(Username.textContent)).then(fetchResponse).then(prelevaFavList);


const carrello = document.querySelector("#carrello");
fetch("../PHP/prelevaDaCarrello.php?q=" + encodeURIComponent(Username.textContent)).then(fetchResponse).then(prelevaCarrello);


function goToHome(){

    location.href = "../PHP/home.php";

}

const indietro = document.querySelector("#goBack img");
indietro.addEventListener("click", goToHome);