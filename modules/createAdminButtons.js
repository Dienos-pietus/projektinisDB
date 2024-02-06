import { createMealModal } from "./addMealModal.js";

function createAddMealButton() {
    const addMealButton = document.createElement('button');
    addMealButton.textContent = 'Add Meal';
    addMealButton.type = 'button';
    addMealButton.classList.add('btn', 'btn-outline-warning', 'mx-5');

    addMealButton.addEventListener('click', () => {
        createMealModal();
    });

    const categories = document.querySelector('.categories');
    categories.appendChild(addMealButton);
}

// Call the function to create "Add Meal" button, needs to be run on authentication
createAddMealButton();