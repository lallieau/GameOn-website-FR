let formularIsValid = false;
let date = new Date()

const inputDate = document.querySelector(".formData input[type=date]")


inputDate.setAttribute("max", date.getFullYear() - 15 + "-" + String(date.getMonth()).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0"))

function validate(event)
{
    event.preventDefault();
    formularIsValid = true;

    formData.forEach(element => {
        element.querySelectorAll("input").forEach((input) =>{
            if(!input.checkValidity()){
                element.setAttribute('data-error-visible', true);
                formularIsValid = false;
            }
        });
    });

    if(formularIsValid){
        modalForm.style.display = "none";
        modalConfirmation.style.display = "flex";
    }

}