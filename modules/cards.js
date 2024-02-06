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

const items = document.querySelectorAll(".card");

document.querySelector("#breakfastBtn").addEventListener("click", function () {
  items.forEach((item) => {
    // console.log(item);
    if (item.id != "breakfast") {
      item.style.display = "none";
    } else {
      item.style.display = "grid";
    }
  });
});
document.querySelector("#lunchBtn").addEventListener("click", function () {
  items.forEach((item) => {
    // console.log(item);
    if (item.id != "lunch") {
      item.style.display = "none";
    } else {
      item.style.display = "grid";
    }
  });
});
document.querySelector("#shakesBtn").addEventListener("click", function () {
  items.forEach((item) => {
    // console.log(item);
    if (item.id != "shakes") {
      item.style.display = "none";
    } else {
      item.style.display = "grid";
    }
  });
});
document.querySelector("#dinnerBtn").addEventListener("click", function () {
  items.forEach((item) => {
    // console.log(item);
    if (item.id != "dinner") {
      item.style.display = "none";
    } else {
      item.style.display = "grid";
    }
  });
});

document.querySelector("#allBtn").addEventListener("click", function () {
  items.forEach((element) => {
    element.style.display = "grid";
  });
});

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
