import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { firebaseConfig } from "./modules/firebase.js";
import {
  getFirestore,
  setDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

///

const emailInput = document.getElementById("email");
const passwInput = document.getElementById("password");
const registerBtn = document.getElementById("resgisterBtn");
const closeModalBtn = document.getElementById("closeBtn");

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(emailInput.value, passwInput.value);
  const email = emailInput.value.trim();
  const password = passwInput.value.trim();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const registerTime = new Date();

      setDoc(doc(db, "users"), {
        email: email,
        role: "simple",
        timestamp: `${registerTime}`,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});

//login

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(emailInput.value, passwInput.value);
  const email = emailInput.value.trim();
  const password = passwInput.value.trim();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User logged in!", user);

      const loginTime = new Date();
      updateDoc(doc(db, "users", user.uid), {
        timestamp: `${loginTime}`,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

//čia dėti onAuthStateChanged

//logout button . reikia sukurti ir paselect'inti

// logoutBtn.addEventListener("click", (event) => {
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//       console.log("user logged out");
//     })
//     .catch((error) => {
//       // An error happened.
//       console.log(error);
//     });
// });
