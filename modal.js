function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements open and close modal
const modalbg = document.querySelector(".bground");
const modalContent = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalForm = document.querySelector(".modal-body__form");
const modalConfirmation = document.querySelector(".modal-body__confirmation");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const CloseModalConfirmation = document.querySelector(".btn-close");


// open and close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", openModal));
modalCloseBtn.addEventListener("click", closeModal);
CloseModalConfirmation.addEventListener("click", closeModal);

// open and close modal form
function openModal() {
  modalbg.style.display = "block";
  modalConfirmation.style.display = "none";
}

function closeModal() {
  //modalContent.style.animationName = "modalclose";
  modalbg.style.display = "none";
  document.location.reload();
}



