document.querySelector("#formLogin").addEventListener("submit", (e) => {
	e.preventDefault();

	let emailInp = document.querySelector("#email");
	let passwordInp = document.querySelector("#password");

	try {
		let email = emailInp.value;
		let password = passwordInp.value;

		if (!email || !isValidEmail(email)) throw new Error("Geçersiz email adresi");
			
	
		if (!password || !isValidPassword(password)) throw new Error("Geçersiz şifre");
			
	
		e.target.submit();
	} catch (error) {
		alert(error.message);
	}
});

const isValidEmail = (mail) => {
	let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regexEmail.test(mail);
};

const isValidPassword = (password) => {
	let passwordRegex =
	/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	return passwordRegex.test(password);
};
