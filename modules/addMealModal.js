import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { firebaseConfig } from "./firebase.js";

export function createMealModal() {
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal", "fade", "show");
    modalContainer.id = "mealModalContainer";
    modalContainer.setAttribute("tabindex", "-1");
    modalContainer.setAttribute("aria-labelledby", "mealModalLabel");
    modalContainer.setAttribute("aria-hidden", "true");
    modalContainer.style.display = "block";
    modalContainer.style.backgroundColor = "white";
    modalContainer.style.width = "400px";
    modalContainer.style.height = "400px";
    modalContainer.style.position = "fixed";
    modalContainer.style.top = "50%";
    modalContainer.style.left = "50%";
    modalContainer.style.transform = "translate(-50%, -50%)";
    modalContainer.style.zIndex = "9999";

    const modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog");
    modalContainer.appendChild(modalDialog);

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modalDialog.appendChild(modalContent);

    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    modalContent.appendChild(modalHeader);

    const modalTitle = document.createElement("h5");
    modalTitle.classList.add("modal-title");
    modalTitle.id = "mealModalLabel";
    modalTitle.textContent = "Add Meal";
    modalHeader.appendChild(modalTitle);

    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    modalContent.appendChild(modalBody);

    const titleInput = document.createElement("input");
    titleInput.classList.add("form-control");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Meal Title");
    modalBody.appendChild(titleInput);

    const priceInput = document.createElement("input");
    priceInput.classList.add("form-control");
    priceInput.setAttribute("type", "number");
    priceInput.setAttribute("placeholder", "Price");
    modalBody.appendChild(priceInput);

    const descriptionInput = document.createElement("input");
    descriptionInput.classList.add("form-control");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("placeholder", "Description");
    modalBody.appendChild(descriptionInput);

    const pictureURLInput = document.createElement("input");
    pictureURLInput.classList.add("form-control");
    pictureURLInput.setAttribute("type", "text");
    pictureURLInput.setAttribute("placeholder", "Picture URL");
    modalBody.appendChild(pictureURLInput);

    const modalFooter = document.createElement("div");
    modalFooter.classList.add("modal-footer");
    modalContent.appendChild(modalFooter);

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("btn", "btn-success");
    submitBtn.textContent = "Submit";
    submitBtn.addEventListener("click", () => {
        // Submit logic here
        modalContainer.remove();
    });
    modalFooter.appendChild(submitBtn);

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("btn", "btn-danger");
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", () => {
        modalContainer.remove();
    });
    modalFooter.appendChild(cancelBtn);

    document.body.appendChild(modalContainer);
}