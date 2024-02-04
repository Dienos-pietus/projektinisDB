import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { firebaseConfig } from "./modules/firebase.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);

import {
  openModal,
  openModal1,
  closeModal,
  closeModal1,
} from "./modules/connect.js";

openModal();
openModal1();
closeModal();
closeModal1();
