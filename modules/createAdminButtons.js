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



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { firebaseConfig } from "./firebase.js";
import {
    getDatabase,
    ref,
    get,
    child,
  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  import {
    getAuth,
    onAuthStateChanged,
  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app)


onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      get(child(ref(db), "/users/" + uid))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userDataFromDB = snapshot.val();
            const userRole = userDataFromDB.role;
            if (userRole === "admin") {
                createAddMealButton();
            } 
          } 
        })
    }
  });