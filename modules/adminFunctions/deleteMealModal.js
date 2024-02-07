import { getDatabase, ref, remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { firebaseConfig } from "../firebase.js";

// Initialize Firebase app and get the database reference
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

// Function to delete a meal by its ID
export function deleteMealById(mealId) {
    const mealRef = ref(database, `meals/${mealId}`)
    remove(mealRef)
        .then(() => {
            console.log("Meal deleted successfully");
        })
        .catch((error) => {
            console.error("Error deleting meal: ", error)
        });
};


