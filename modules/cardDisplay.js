import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { firebaseConfig } from "./firebase.js";
import { likes } from "./likes.js";

function displayMealCards(isAdmin) {
    const firebaseApp = initializeApp(firebaseConfig);
    const database = getDatabase(firebaseApp);

    const mealsRef = ref(database, "meals");

    const cardsContainer = document.getElementById("cards");

    onValue(mealsRef, (snapshot) => {
        const mealsData = snapshot.val(); 

        cardsContainer.innerHTML = "";

        for (let mealKey in mealsData) {
            const meal = mealsData[mealKey];

            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card", "mb-3");
            cardDiv.setAttribute("id", `${mealKey}`); 
            cardDiv.innerHTML = `
                <div class="row g-0" id="${meal.category}">
                    <div class="col-md-4 col-sm-12">
                        <img src="${meal.pictureURL}" class="img-fluid rounded-start border border-warning border-2" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class="card-title">
                                <h5 class="d-inline">${meal.title}</h5>
                                <span class="price text-warning">$${meal.price}</span>
                            </div>
                            <p class="card-text">${meal.description}</p>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <button type="submit" class="btn btn-primary">Order</button>
                                ${isAdmin ? `<button type="button" class="btn btn-danger delete-btn">Delete</button>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            likes(cardDiv, mealKey);
            cardsContainer.appendChild(cardDiv);
        }


        cardsContainer.addEventListener('click', function(event) {
            if (isAdmin && event.target.classList.contains('delete-btn')) {
                const cardId = event.target.closest('.card').id;
                handleCardDeletion(cardId);
            }
        });
    });
}

function handleCardDeletion(cardId) {
    const cardToDelete = document.getElementById(cardId);
    if (cardToDelete) {
        cardToDelete.remove();
    }

    const firebaseApp = initializeApp(firebaseConfig);
    const database = getDatabase(firebaseApp);
    const mealsRef = ref(database, "meals/" + cardId);
    
    remove(mealsRef)
        .then(() => {
            console.log("Card and corresponding meal data deleted successfully.");
            
            const likesRef = ref(database, "Likes/" + cardId);
            remove(likesRef)
                .then(() => {
                    console.log("Likes associated with the meal deleted successfully.");
                })
                .catch((error) => {
                    console.error("Error deleting likes:", error);
                });

            const likeCounterRef = ref(database, "LikeCounter/" + cardId);
            remove(likeCounterRef)
                .then(() => {
                    console.log("Like counter associated with the meal deleted successfully.");
                })
                .catch((error) => {
                    console.error("Error deleting like counter:", error);
                });
        })
        .catch((error) => {
            console.error("Error deleting card and meal data:", error);
        });
}

export { displayMealCards };
