let formularIsValid = false;
let date = new Date()

const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationInput = document.querySelectorAll(".checkbox-input[type=radio]");
const checkboxInput = document.getElementById("checkbox1");
const dateInput = document.querySelector(".formData input[type=date]")

// Check Validation

function firstNameValidation() {
    let regex = /^[^0-9]{2,}$/;
	let inputValue = firstNameInput.value;
	return regex.test(inputValue);
}

function lastNameValidation() {
    let regex = /^[^0-9]{2,}$/;
	let inputValue = lastNameInput.value;
	return regex.test(inputValue);
}

function emailValidation() {
	let regex = /^\S+@\S+\.\S+$/;
	return regex.test(emailInput.value);
}

function birthdateValidation() {
	let birthdate = new Date(birthdateInput.value);
	let today = new Date();
	if (birthdate.toString() !== "Invalid Date") {
		if (
			birthdate.getDate() >= today.getDate() &&
			birthdate.getMonth() == today.getMonth() &&
			birthdate.getFullYear() == today.getFullYear()
		) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}

function quantityValidation() {
	let regex = /^[0-9]+$/;
	return regex.test(quantityInput.value);
}

function locationValidation() {
	for (let radio of locationInput) {
		if (radio.checked === true) return true;
	}
	return false;
}

function checkboxValidation() {
	return checkboxInput.checked;
}

// Validation Form

function validate(event)
{
    event.preventDefault();
    formularIsValid = true;

    if(!firstNameValidation()){
        firstNameInput.parentNode.setAttribute('data-error-visible', true);
        formularIsValid = false;
    } else {
        firstNameInput.parentNode.setAttribute('data-error-visible', false);
    }

    if(!lastNameValidation()){
        lastNameInput.parentNode.setAttribute('data-error-visible', true);
        formularIsValid = false;
    } else {
        lastNameInput.parentNode.setAttribute('data-error-visible', false);
    }

    if(!emailValidation()){
        emailInput.parentNode.setAttribute('data-error-visible', true);
        formularIsValid = false;
    } else {
        emailInput.parentNode.setAttribute('data-error-visible', false);
    }

    if(!birthdateValidation()){
        birthdateInput.parentNode.setAttribute('data-error-visible', true);
        formularIsValid = false;
    } else {
        birthdateInput.parentNode.setAttribute('data-error-visible', false);
    }

    if(!quantityValidation()){
        quantityInput.parentNode.setAttribute('data-error-visible', true);
        formularIsValid = false;
    } else {
        quantityInput.parentNode.setAttribute('data-error-visible', false);
    }

    if(!locationValidation()){
        locationInput[0].parentElement.setAttribute('data-error-visible', true);
        formularIsValid = false;
    } else {
        locationInput[0].parentElement.setAttribute('data-error-visible', false);
    }

    if(!checkboxValidation()){
        checkboxInput.parentNode.setAttribute('data-error-visible', true);
        formularIsValid = false;
    } else {
        checkboxInput.parentNode.setAttribute('data-error-visible', false);
    }

    if(formularIsValid){
        modalForm.style.display = "none";
        modalConfirmation.style.display = "flex";
    }
}
