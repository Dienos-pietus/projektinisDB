const modal = document.querySelector(".modal");
const modal1 = document.querySelector(".modal1");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const loginCloseModal = document.querySelector(".close-modal1");
const btnsOpenModal = document.querySelectorAll(".btn-sign");
const loginOpenModal = document.querySelectorAll(".btn-log");

//////////////////////////////////////////////
// SIGN IN FORM
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/////////////////////////////////////////////////
// LOGIN FORM

const openModal1 = function () {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal1 = function () {
  modal1.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < loginOpenModal.length; i++)
  loginOpenModal[i].addEventListener("click", openModal1);

loginCloseModal.addEventListener("click", closeModal1);
overlay.addEventListener("click", closeModal1);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
    closeModal1();
  }
});

export { openModal, openModal1, closeModal, closeModal1 };
