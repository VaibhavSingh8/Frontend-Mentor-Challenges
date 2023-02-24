const form = document.getElementById('form-container');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const pwd = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(firstName.value === ''){
        displayErrorMessage(firstName, "First Name cannot be empty!")
    }
    else{
        removeErrorFrom(firstName);
    }

    if(lastName.value === ''){
        displayErrorMessage(lastName, "Last Name cannot be empty!")
    }
    else{
        removeErrorFrom(lastName);
    }

    if(email.value === ''){
        displayErrorMessage(email, "Email cannot be empty!")
    }
    else if (!isValid(email.value)) {
		displayErrorMessage(email, 'Email is not valid');
	}
    else{
        removeErrorFrom(email);
    }

    if(pwd.value === ''){
        displayErrorMessage(password, "Password cannot be empty!")
    }
    else{
        removeErrorFrom(password);
    }

});

function displayErrorMessage(field, message){
    const smallTag = field.nextElementSibling;
    smallTag.innerHTML = message;
    smallTag.style.opacity = 1;
};

function removeErrorFrom(field){
    const smallTag = field.nextElementSibling;
    smallTag.style.opacity = 0;
}


function isValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

