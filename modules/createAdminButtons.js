import { createMealModal } from "./addMealModal.js";

function createAddMealButton() {
    // Create the "Add Meal" button element
    const addMealButton = document.createElement('button');
    addMealButton.textContent = 'Add Meal';
    addMealButton.type = 'button';
    addMealButton.classList.add('btn', 'btn-outline-warning', 'mx-1');

    // open modal when button is clicked
    addMealButton.addEventListener('click', () => {
        createMealModal();
    });

    // Append the button to the .categories class
    const categories = document.querySelector('.categories');
    categories.appendChild(addMealButton);
}

// Call the function to create the "Add Meal" button
createAddMealButton();