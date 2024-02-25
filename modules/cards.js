import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { firebaseConfig } from "./firebase.js";
import {
    getDatabase,
  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  import {
    getAuth,
  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
  import { showModal } from "./modulas.js";
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app)

const allBtn = document.getElementById("allBtn");
const breakfastBtn = document.getElementById("breakfastBtn");
const lunchBtn = document.getElementById("lunchBtn");
const shakesBtn = document.getElementById("shakesBtn");
const dinnerBtn = document.getElementById("dinnerBtn");

// Add click event listeners to each button
allBtn.addEventListener("click", filterCards);
breakfastBtn.addEventListener("click", filterCards);
lunchBtn.addEventListener("click", filterCards);
shakesBtn.addEventListener("click", filterCards);
dinnerBtn.addEventListener("click", filterCards);

function filterCards(event) {
    const category = event.target.id.slice(0, -3); // Get the category from the button id
    const cards = document.querySelectorAll(".card"); // Select all card elements
    cards.forEach(card => {
        if (category === "all") {
            card.style.display = "block"; // Display all cards if "All" button is clicked
        } else {
            card.style.display = card.querySelector(`#${category}`) ? "block" : "none"; // Show card if it matches the category, hide otherwise
        }
    });
}

let outBtn = document.getElementById("signout")

outBtn.addEventListener("click", (event) => {
  event.preventDefault();
  auth
    .signOut()
    .then(() => {
      window.location.href = 'index.html';
    })
    .catch((error) => {
      console.log(error);
    });
});

//liked---------------
document.querySelector("#likedBtn").addEventListener("click", function () {
  const liked = document.querySelectorAll(".card>button")
  let index = 0
  items.forEach((item) => {
    const like = document.getElementById(`like${index++}`)
    if (like.style.color != "red") {
      item.style.display = "none";
    } else {
      item.style.display = "grid";
    }
  });
});