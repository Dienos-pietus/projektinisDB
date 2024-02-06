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
    const likedMenu = []

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
                like.style.width = "38px";
                like.style.height = "60px";
                like.style.backgroundColor = "black";
                const counter = document.createElement("h3")
                counter.style.position="absolute"
                counter.style.margin="5px 14px"
                counter.style.color="purple"
                if(counter.innerText===""){counter.innerText=0}
                //----
                let likeCounter = 0
                get(child(ref(db),"/LikesCounter/"+ id))
                .then((snapshot)=>{
                    if (snapshot.exists()){
                        const userDataFromDb = snapshot.val()
                        if(userDataFromDb.id===id){
                            likeCounter += userDataFromDb.Number

                            counter.innerText=likeCounter
                        }
                    }
                })
                //------------
                if (likedMenu.includes(id)) {
                    like.style.color = "red";
                } else {
                    like.style.color = "white";
                }
                like.innerHTML = "&#9825;";
                like.style.fontSize = "50px";
                like.style.textAlign = "start";
                el.append(like, counter);
                like.addEventListener('click', (ev) => {
                    
                    ev.preventDefault();
                    if (like.style.color === "white") {
                        like.style.color = "red";
                        likeCounter++
                        if(!likedMenu.includes(id)){likedMenu.push(id);}
                        
                    } else {
                        like.style.color = "white";
                        likeCounter--
                        likedMenu.splice(likedMenu.indexOf(id), 1);
                    }
                    counter.innerText=likeCounter
                    set(ref(db, 'Likes/' + user.uid), {
                        Likes:likedMenu
                        });
                    set(ref(db, 'LikesCounter/' + id), {
                        Number:likeCounter,
                        id: id
                        });
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
