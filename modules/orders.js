// const orderBtn = document.querySelector(".btn-primary");
// console.log(orderBtn);
// //modal container
// const orderModal = document.createElement("div");
// orderModal.classList.add("orderModal");
// console.log(orderModal);
// //modal content
// const orderModalContent = document.createElement("div");
// orderModalContent.classList.add("order-modal-content");
// orderModal.appendChild(orderModalContent);
// //close button for modal
// const closeBtn = document.createElement("span");
// closeBtn.classList.add("close");
// // closeBtn.innerHTML = "&times;";
// orderModalContent.appendChild(closeBtn);
// //
// const orderModalText = document.createElement("p");
// orderModalText.textContent = "Thank you for the order :D";
// orderModalContent.appendChild(orderModalText);

// document.body.appendChild(orderModal);

// //open/close modal

// orderBtn.addEventListener("click", () => {
//   orderModal.style.display = "block";
//   console.log("clicked");
// });

// closeBtn.addEventListener("click", () => {
//   orderModal.style.display = "none";
//   console.log("uncliked");
// });

// window.addEventListener("click", (e) => {
//   if (e.target == orderModal) {
//     orderModal.style.display = "none";
//     console.log("no click");
//   }
// });

const orderButtons = document.querySelectorAll(".btn-primary");
orderButtons.forEach((e) => {
  e.id = "orderBtn";
  e.setAttribute("data-bs-toggle", "modal");
  e.setAttribute("data-bs-target", "#orderModal");
});
console.log(orderButtons);

const orderBtn = document.querySelector(".btn-primary");
console.log(orderBtn);
const orderModal = document.getElementById("orderModal");
const completeOrderBtn = document.getElementById("completeOrderBtn");
const cancelOrderBtn = document.getElementById("cancelOrderBtn");

function showOrderModal() {
  orderModal.style.display = "block";
}
function hideOrderModal() {
  orderModal.style.display = "none";
}

orderBtn.addEventListener("click", showOrderModal);
cancelOrderBtn.addEventListener("click", hideOrderModal);
