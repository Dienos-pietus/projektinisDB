import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { firebaseConfig } from "./firebase.js";
import {
    getDatabase,
    ref,
    set,
    update,
  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
  import { showModal } from "./modulas.js";
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app)


let logEmailInput = document.getElementById("email-login")
let logPasswordInput = document.getElementById("psw-login")
let signEmailInput = document.getElementById("email")
let signPasswordInput = document.getElementById("psw")
let logBtn = document.getElementById("login")
let regBtn = document.getElementById("signin")

const signin = function () {

regBtn.addEventListener("click", (e) => {
    e.preventDefault();
  
    const email = signEmailInput.value.trim();
    const password = signPasswordInput.value.trim();
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
  
        const registerTime = new Date();
        set(ref(db, "/users/" + user.uid), {
          email: email,
          role: "simple",
          timestamp: `${registerTime}`,
        }).then(() => {
          window.location.href = 'menu.html';
        });
      })
      .catch((error) => {
        showModal(`Toksai vartotojas jau egzistuoja`)
      });
  })};

  const login = function () {

    logBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const email = logEmailInput.value.trim();
        const password = logPasswordInput.value.trim();
      
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            const loginTime = new Date();
            update(ref(db, "/users/" + user.uid), {
              timestamp: `${loginTime}`,
            }).then(() => {
              window.location.href = 'menu.html';
            });
          })
          .catch((error) => {
           showModal(`Tokio vartotojo nėra arba neteisingai įvedėte slaptažodį`)
          });
      });
  }
  export { signin, login }