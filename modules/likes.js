import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { firebaseConfig } from "./firebase.js";
import {
    getDatabase,
    ref,
    set,
    get,
    update,
    child,
  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  import {getAuth,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app)

function likes() {
    const iflikes = localStorage.getItem("likesStorage");
    const likedMenu = iflikes === null ? [] : JSON.parse(iflikes);

    const cards = document.querySelectorAll('.menu-items > div');

    onAuthStateChanged(auth, (user)=>{
        const db = getDatabase();

        get(child(ref(db),"/Likes/"+ user.uid))
        .then((snapshot)=>{
            if (snapshot.exists()){
                const userDataFromDb = snapshot.val()
                userDataFromDb.Likes.forEach((el)=>{
                    if (!likedMenu.includes(el)) {
                        likedMenu.push(el)
                    }
                })

            }
            //-------
            cards.forEach((el, index) => {
                el.style.display = "grid";
                const like = document.createElement("button");
                like.setAttribute("class", `like`);
                const id = `like${index}`;
                like.setAttribute("id", id);
                like.style.position = "absolute";
                like.style.width = "35px";
                like.style.height = "60px";
                like.style.backgroundColor = "black";
                if (likedMenu.includes(id)) {
                    like.style.color = "red";
                } else {
                    like.style.color = "white";
                }
                like.innerHTML = "&#9825;";
                like.style.fontSize = "50px";
                like.style.textAlign = "start";
                el.append(like);
                like.addEventListener('click', (ev) => {
                    set(ref(db, 'Likes/' + user.uid), {
                        Likes:likedMenu
                        });
                    ev.preventDefault();
                    if (like.style.color === "white") {
                        like.style.color = "red";
                        likedMenu.push(id);
                    } else {
                        like.style.color = "white";
                        likedMenu.splice(likedMenu.indexOf(id), 1);
                    }
                    localStorage.setItem("likesStorage", JSON.stringify(likedMenu));
                });
            });
            //--------
            set(ref(db, 'Likes/' + user.uid), {
            Likes:likedMenu
            });
            //------------
        })
        
    })


}
likes();
