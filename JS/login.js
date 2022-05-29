function fetchResponse(response){

	console.log("Response -> ", response.ok);

	if(response.ok){

		return response.json();

	}else{

		return null;

	}

}

async function jsonCheckUserPassword(json){

	const Usernameinserito = nome_form_login.Username;
	const Passwordinserito = nome_form_login.Password;

	const Username = Usernameinserito.value;
	
	console.log("File JSON --->", json);

	if(Usernameinserito.classList.value == "erroreInsBox"){

		Usernameinserito.classList.remove("erroreInsBox");
		Usernameinserito.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
		Usernameinserito.parentNode.parentNode.querySelector("span").textContent = "";

	}

	if(json.coincidono == "si") //Quindi se json.esiste = si, vuol dire che l'Username inserito è presente, allora può effettuare l'accesso
	{

        //console.log("Tutto ok!");
		await fetch("../PHP/doLogin.php?q=" + encodeURIComponent(Username));
		location.href = "../PHP/home.php";

	}else{

        Passwordinserito.parentNode.parentNode.querySelector("span").textContent = "Username o Password Sbagliate...";
		Passwordinserito.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		//console.log(Passwordinserito.classList);

    }

}

function checkUserPassword(event){

	const Usernameinserito = nome_form_login.Username;
	const Passwordinserita = nome_form_login.Password;

	const user = Usernameinserito.value;
	const password = Passwordinserita.value;

	if(Usernameinserito.classList.value == "erroreInsBox"){ //Se è gia presente un messaggio di errore lo toglie (x l'Username)

		Usernameinserito.classList.remove("erroreInsBox");
		Usernameinserito.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
		Usernameinserito.parentNode.parentNode.querySelector("span").textContent = "";

	}

	if(Passwordinserita.classList.value == "erroreInsBox"){ //Se è gia presente un messaggio di errore lo toglie (x la Password)

		Passwordinserita.classList.remove("erroreInsBox");
		Passwordinserita.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
		Passwordinserita.parentNode.parentNode.querySelector("span").textContent = "";

	}

	if(Usernameinserito.value.length == 0){ //Controlla che sia effettivamente inserito qualcosa nella textbox dell'Username

		Usernameinserito.parentNode.parentNode.querySelector("span").textContent = "No Username Inserito";
		Usernameinserito.classList.add("erroreInsBox");
		Usernameinserito.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(Usernameinserito.classList);

	}
	
	if(Passwordinserita.value.length == 0){ //Controlla che sia effettivamente inserito qualcosa nella textbox della Password

		Passwordinserita.parentNode.parentNode.querySelector("span").textContent = "No Password Inserita";
		Passwordinserita.classList.add("erroreInsBox");
		Passwordinserita.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(Passwordinserita.classList);

	}
	
	if(Usernameinserito.value.length != 0 && Passwordinserita.value.length != 0){ //Se entrambi i campi sono almeno compilati, fa un controllo lato Server dell'Username e
																				  //chiamiamo "jsonChechUserPassword"

		fetch("../PHP/checkUsernamePassword.php?q=" + encodeURIComponent(user) + "-----" + encodeURIComponent(password)).then(fetchResponse).then(jsonCheckUserPassword);

	}

}

function onResponse(response){

    console.log("Risposta ricevuta!!");
    return response.json();

}



nome_form_login.bottoneLogin.addEventListener("click", checkUserPassword);

