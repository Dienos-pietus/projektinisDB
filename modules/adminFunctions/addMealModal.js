// creates add new meal modal and saves values to the database


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { firebaseConfig } from "../firebase.js";

export function createMealModal() {
    // Initialize Firebase app and get the database reference
    const firebaseApp = initializeApp(firebaseConfig);
    const database = getDatabase(firebaseApp);

    // Create modal container
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal", "fade", "show", "border-warning", "border-3");
    modalContainer.id = "mealModalContainer";
    modalContainer.style.display = "block";
    modalContainer.style.backgroundColor = "white";
    modalContainer.style.width = "450px";
    modalContainer.style.height = "420px";
    modalContainer.style.position = "fixed";
    modalContainer.style.top = "50%";
    modalContainer.style.left = "50%";
    modalContainer.style.zIndex = "10";

    // Create modal dialog
    const modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog", "my-0", "mx-0");
    modalContainer.append(modalDialog);

    // Create modal content
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content", "my-0", "mx-0");
    modalDialog.append(modalContent);

    // Create modal header container
    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    modalContent.append(modalHeader);

    // Create modal title
    const modalTitle = document.createElement("h5");
    modalTitle.classList.add("modal-title");
    modalTitle.textContent = "Add Meal";
    modalTitle.style.fontSize = "18px"
    modalHeader.append(modalTitle);

    // Create modal body
    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    modalContent.append(modalBody);

    // Create input fields for meal details
    const titleInput = document.createElement("input");
    titleInput.classList.add("form-control");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Meal Title");
    titleInput.style.fontSize = "15px";
    modalBody.append(titleInput);

    const priceInput = document.createElement("input");
    priceInput.classList.add("form-control");
    priceInput.setAttribute("type", "text");
    priceInput.setAttribute("placeholder", "Price");
    priceInput.style.fontSize = "12px";
    modalBody.append(priceInput);

    const descriptionInput = document.createElement("textarea");
    descriptionInput.classList.add("form-control");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("placeholder", "Description");
    descriptionInput.style.fontSize = "12px";
    modalBody.append(descriptionInput);

    const pictureURLInput = document.createElement("input");
    pictureURLInput.classList.add("form-control");
    pictureURLInput.setAttribute("type", "text");
    pictureURLInput.setAttribute("placeholder", "Picture URL");
    pictureURLInput.style.fontSize = "12px";
    modalBody.append(pictureURLInput);

    // Create categories dropdown
    const selectCategory = document.createElement("select");
    selectCategory.style.fontSize = "12px";
    selectCategory.classList.add("form-control");
    
    const categories = ["Breakfast", "Lunch", "Dinner", "Shakes"];
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.style.fontSize = "12px";
        option.textContent = category;
        selectCategory.append(option);
    });
    modalBody.append(selectCategory);

    // Create modal footer
    const modalFooter = document.createElement("div");
    modalFooter.classList.add("modal-footer");
    modalContent.append(modalFooter);

    // Create submit button
    const submitBtn = document.createElement("button");
    submitBtn.classList.add("btn", "btn-success");
    submitBtn.textContent = "Submit";
    submitBtn.addEventListener("click", () => {
        const title = titleInput.value;
        const price = priceInput.value;
        const description = descriptionInput.value;
        const pictureURL = pictureURLInput.value;
        const category = selectCategory.value;

        // Save meal to the database
        const mealRef = ref(database, "meals");
        const newMealRef = push(mealRef);
        set(newMealRef, {
            title: title,
            price: price,
            description: description,
            pictureURL: pictureURL,
            category: category,
            likes: 0,
        });

        modalContainer.remove();
    });
    modalFooter.append(submitBtn);

    // Create cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("btn", "btn-danger");
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", () => {
        modalContainer.remove();
    });
    modalFooter.append(cancelBtn);

    
    document.body.append(modalContainer);
}