function fetchResponse(response){

	console.log("Response -> ", response.ok);

	if(response.ok){

		return response.json();

	}else{

		return null;

	}

}
// ----------------------------------------------- Controllo USERNAME -----------------------------------------------

function jsonCheckUsername(json){

	const Usernameinserito = nome_form_reg.Username;
	console.log("File JSON --->", json.errore);

	if(Usernameinserito.classList.value == "erroreInsBox"){

		Usernameinserito.classList.remove("erroreInsBox");
		Usernameinserito.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
		Usernameinserito.parentNode.parentNode.querySelector("span").textContent = "";

	}

	if(json.errore == "username_gia_esistente")
	{

		Usernameinserito.parentNode.parentNode.querySelector("span").textContent = "Questo Username è gia presente nel Nostra DataBase";
		Usernameinserito.classList.add("erroreInsBox");
		Usernameinserito.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(Usernameinserito.classList);

	}else if(json.errore == "username_non_valido"){

		Usernameinserito.parentNode.parentNode.querySelector("span").textContent = "Questo Username NON soddisfa le condizioni sui Caratteri";
		Usernameinserito.classList.add("erroreInsBox");
		Usernameinserito.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(Usernameinserito.classList);

	}

}

function checkUsername(event){

	const Usernameinserito = nome_form_reg.Username;
	const user = Usernameinserito.value;

	if(Usernameinserito.value.length == 0){

		Usernameinserito.parentNode.parentNode.querySelector("span").textContent = "No Username Inserito";
		Usernameinserito.classList.add("erroreInsBox");
		Usernameinserito.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(Usernameinserito.classList);

	}else{

		if(Usernameinserito.classList.value == "erroreInsBox"){

			Usernameinserito.classList.remove("erroreInsBox");
			Usernameinserito.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
			Usernameinserito.parentNode.parentNode.querySelector("span").textContent = "";

		}
		//fetch("../PHP/checkUsername.php?q=" + encodeURIComponent(Usernameinserito.value)).then(fetchResponse).then(jsonCheckUsername);
		fetch("../PHP/checkCredenziali.php?q=" + encodeURIComponent(user) + "-----" + encodeURIComponent("vuoto") + "-----" + encodeURIComponent("vuoto") + "-----" + encodeURIComponent("vuoto")).then(fetchResponse).then(jsonCheckUsername);

	}

}

// ----------------------------------------------- Controllo USERNAME -----------------------------------------------



// ----------------------------------------------- Controllo EMAIL -----------------------------------------------

function jsonCheckEmail(json){

	const Emailinserita = nome_form_reg.Email;
	console.log("File JSON --->", json.errore);

	if(Emailinserita.classList.value == "erroreInsBox"){

		Emailinserita.classList.remove("erroreInsBox");
		Emailinserita.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
		Emailinserita.parentNode.parentNode.querySelector("span").textContent = "";

	}

	if(json.errore == "email_non_valida") //Quindi se json = True quindi se il CF inserito è già presente, segnaliamo l'errore
	{

		Emailinserita.parentNode.parentNode.querySelector("span").textContent = "Email NON Valida";
		Emailinserita.classList.add("erroreInsBox");
		Emailinserita.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(Emailinserita.classList);

	}

}

function checkEmail(event){

	const Emailinserita = nome_form_reg.Email;
	const email = Emailinserita.value;

	if(Emailinserita.value.length == 0){

		Emailinserita.parentNode.parentNode.querySelector("span").textContent = "No Email Inserita";
		Emailinserita.classList.add("erroreInsBox");
		Emailinserita.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(Emailinserita.classList);

	}else{

		if(Emailinserita.classList.value == "erroreInsBox"){

			Emailinserita.classList.remove("erroreInsBox");
			Emailinserita.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
			Emailinserita.parentNode.parentNode.querySelector("span").textContent = "";

		}
		//fetch("../PHP/checkEmail.php?q=" + encodeURIComponent(Emailinserita.value)).then(fetchResponse).then(jsonCheckEmail);
		fetch("../PHP/checkCredenziali.php?q=" + encodeURIComponent("vuoto") + "-----" + encodeURIComponent(email) + "-----" + encodeURIComponent("vuoto") + "-----" + encodeURIComponent("vuoto")).then(fetchResponse).then(jsonCheckEmail);

	}

}

// ----------------------------------------------- Controllo EMAIL -----------------------------------------------



// ----------------------------------------------- Controllo DATA DI NASCITA -----------------------------------------------

function jsonCheckData(json){

	const dataInserita = nome_form_reg.DataNascita;
	console.log("File JSON --->", json);

	if(dataInserita.classList.value == "erroreInsBox"){

		dataInserita.classList.remove("erroreInsBox");
		dataInserita.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
		dataInserita.parentNode.parentNode.querySelector("span").textContent = "";

	}

	if(json.errore != "no_error")
	{

		dataInserita.parentNode.parentNode.querySelector("span").textContent = "Data NON Valida";
		dataInserita.classList.add("erroreInsBox");
		dataInserita.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(dataInserita.classList);

	}

}

function checkData(event){

	const dataInserita = nome_form_reg.DataNascita;
	const data = dataInserita.value;

	if(dataInserita.value.length == 0){

		dataInserita.parentNode.parentNode.querySelector("span").textContent = "No Data di Nascita Inserita";
		dataInserita.classList.add("erroreInsBox");
		dataInserita.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(dataInserita.classList);

	}else{

		if(dataInserita.classList.value == "erroreInsBox"){

			dataInserita.classList.remove("erroreInsBox");
			dataInserita.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
			dataInserita.parentNode.parentNode.querySelector("span").textContent = "";

		}
		//fetch("../PHP/checkEmail.php?q=" + encodeURIComponent(dataInserita.value)).then(fetchResponse).then(jsonCheckEmail);
		fetch("../PHP/checkCredenziali.php?q=" + encodeURIComponent("vuoto") + "-----" + encodeURIComponent("vuoto") + "-----" + encodeURIComponent(data) + "-----" + encodeURIComponent("vuoto")).then(fetchResponse).then(jsonCheckData);

	}

}

// ----------------------------------------------- Controllo DATA DI NASCITA -----------------------------------------------



// ----------------------------------------------- Controllo PASSWORD -----------------------------------------------

function jsonCheckPassword(json){

	const Passwordinserito = nome_form_reg.Password;
	console.log("File JSON --->", json.errore);

	if(Passwordinserito.classList.value == "erroreInsBox"){

		Passwordinserito.classList.remove("erroreInsBox");
		Passwordinserito.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
		Passwordinserito.parentNode.parentNode.querySelector("span").textContent = "";

	}

	if(json.errore == "password_troppo_corta") //Quindi se json = True quindi se il CF inserito è già presente, segnaliamo l'errore
	{

		Passwordinserito.parentNode.parentNode.querySelector("span").textContent = "Questa Password è Troppo Corta";
		Passwordinserito.classList.add("erroreInsBox");
		Passwordinserito.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(Passwordinserito.classList);

	}else if (json.errore == "password_non_valida"){

		Passwordinserito.parentNode.parentNode.querySelector("span").textContent = "Questa Password non rispetta le specifiche";
		Passwordinserito.classList.add("erroreInsBox");
		Passwordinserito.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(Passwordinserito.classList);

	}

}

function checkPassword(event){

	const Passwordinserito = nome_form_reg.Password;
	const password = Passwordinserito.value;

	if(Passwordinserito.value.length == 0){ //Aggiungere Condizioni sulle lettere che devono essere MAIUSCOLE e che dev'essere esattamente lungo 16 caratteri

		Passwordinserito.parentNode.parentNode.querySelector("span").textContent = "No Password Inserito";
		Passwordinserito.classList.add("erroreInsBox");
		Passwordinserito.parentNode.parentNode.querySelector("span").classList.add("erroreInsText");
		console.log(Passwordinserito.classList);

	}else{

		if(Passwordinserito.classList.value == "erroreInsBox"){

			Passwordinserito.classList.remove("erroreInsBox");
			Passwordinserito.parentNode.parentNode.querySelector("span").classList.remove("erroreInsText");
			Passwordinserito.parentNode.parentNode.querySelector("span").textContent = "";

		}
		//fetch("../PHP/checkPassword.php?q=" + encodeURIComponent(Passwordinserito.value)).then(fetchResponse).then(jsonCheckPassword);
		fetch("../PHP/checkCredenziali.php?q=" + encodeURIComponent("vuoto") + "-----" + encodeURIComponent("vuoto") + "-----" + encodeURIComponent("vuoto") + "-----" + encodeURIComponent(password)).then(fetchResponse).then(jsonCheckPassword);

	}
}

// ----------------------------------------------- Controllo PASSWORD -----------------------------------------------

async function jsonCheckCredenziali(json){

	const user = nome_form_reg.Username.value;
	const email = nome_form_reg.Email.value;
	const data = nome_form_reg.DataNascita.value;	
	const password = nome_form_reg.Password.value;

	console.log("JSON ->", json);

	if(json.errore == "no_error"){

		console.log("Puoi fare l'accesso...");

	}else{

		console.log("Qualcosa non va...");
		await fetch("../PHP/doReg.php?q=" + encodeURIComponent(user) + "-----" + encodeURIComponent(email) + "-----" + encodeURIComponent(data) + "-----" + encodeURIComponent(password));
		location.href = "../PHP/home.php";

	}

}

function clickSubmit(event){

	event.preventDefault();

	const user = nome_form_reg.Username;
	const email = nome_form_reg.Email;
	const data = nome_form_reg.DataNascita;	
	const password = nome_form_reg.Password;

	const errorMsg = document.querySelector("#errorMsg");
	console.log("errorMsg ->", errorMsg);

	if(errorMsg.classList.value == "erroreInsText"){

		console.log("Condizione ok");
		errorMsg.classList.remove("erroreInsText");
		errorMsg.textContent = " ";

	}

	if(	user.classList.value == "erroreInsBox" || user.value.length == 0 ||
		email.classList.value == "erroreInsBox" || email.value.length == 0 ||
		data.classList.value == "erroreInsBox" || data.value.length == 0 ||
		password.classList.value == "erroreInsBox" || password.value.length == 0){

		errorMsg.textContent = "Assicurati che i campi siano compliati correttamente";
		errorMsg.classList.add("erroreInsText");

	}else{

		errorMsg.textContent = "OK!";
		fetch("../PHP/checkCredenziali.php?q=" + encodeURIComponent(user) + "-----" + encodeURIComponent(email) + "-----" + encodeURIComponent(data) + "-----" + encodeURIComponent(password)).then(fetchResponse).then(jsonCheckCredenziali);
	
	}

}


nome_form_reg.Username.addEventListener("blur", checkUsername);
nome_form_reg.Email.addEventListener("blur", checkEmail);
nome_form_reg.DataNascita.addEventListener("blur", checkData);
nome_form_reg.Password.addEventListener("blur", checkPassword);
nome_form_reg.addEventListener("submit", clickSubmit);

