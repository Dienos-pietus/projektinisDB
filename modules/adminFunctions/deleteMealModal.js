import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, get, remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { firebaseConfig } from "../firebase.js";

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export async function deleteMealById(mealId) {
    let message = "Message to pass to a modal, it will change depending on the outcome";
    try {
        const mealRef = await ref(database, `meals/${mealId}`);
        console.log(mealRef);
        // Check if the meal exists before attempting to delete it
        const snapshot = await get(mealRef);

        if (snapshot.exists()) {
            // Meal exists, proceed with deletion
            await remove(mealRef);
            message = "Meal deleted successfully";;
            console.log(message);
        } else {
            message = ("Meal with ID", mealId, "does not exist");
            console.log(message);
        }
    } catch (error) {
        message = ("Error deleting meal: ", error);
        console.log(message);
    }
    return message;
};

console.log(deleteMealById("sadasd"))



// const message = await deleteMealById(id => {
//     inputid.value
// });