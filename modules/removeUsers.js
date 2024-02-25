import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { firebaseConfig } from "./firebase.js";

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const usersRef = ref(database, "users");

function fetchUsers() {
  onValue(usersRef, function (snapshot) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.style.backgroundColor = "#f2f2f2";
    popup.style.padding = "20px";
    popup.style.borderRadius = "5px";
    popup.style.position = "absolute";
    popup.style.left = "50%";
    popup.style.top = "50%";
    popup.style.transform = "translate(-50%, -50%)";

    const userList = document.createElement("ul");
    snapshot.forEach(function (childSnapshot) {
      const user = childSnapshot.val();
      const li = document.createElement("li");
      li.style.marginBottom = "10px";
      li.textContent = user.email;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.style.marginLeft = "10px";
      deleteButton.style.padding = "5px 10px";
      deleteButton.style.borderRadius = "5px";
      deleteButton.style.backgroundColor = "#dc3545";
      deleteButton.style.color = "#fff";
      deleteButton.addEventListener("click", function () {
        remove(ref(database, "users/" + childSnapshot.key));
        li.remove();
      });

      li.appendChild(deleteButton);
      userList.appendChild(li);
    });

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.padding = "5px 10px";
    closeButton.style.borderRadius = "5px";
    closeButton.style.backgroundColor = "#dc3545";
    closeButton.style.color = "#fff";
    closeButton.addEventListener("click", function () {
      document.body.removeChild(popup);
    });

    popup.appendChild(userList);
    popup.appendChild(closeButton);
    document.body.appendChild(popup);
  });
}

export function createButton() {
  const popupButton = document.createElement("button");
  popupButton.innerHTML = "delete Users";
  popupButton.classList.add("btn", "btn-outline-warning", "mx-5");
  popupButton.addEventListener("click", function () {
    fetchUsers();
  });
  document.querySelector(".categories").appendChild(popupButton);
}