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

function likes(el, Mid){
    const patikra = localStorage.getItem("Likes")
    const likedMenu = patikra===null?[]:JSON.parse(patikra)

    onAuthStateChanged(auth, (user)=>{
        const db = getDatabase();

        get(child(ref(db),"/Likes/"+ user.uid))
        .then((snapshot)=>{
            if (snapshot.exists()){
                const userDataFromDb = snapshot.val()
                userDataFromDb.Likes.forEach((el)=>{
                    if (!likedMenu.includes(el)) {
                        likedMenu.push(el)
                        localStorage.setItem("Likes", JSON.stringify(likedMenu))
                    }
                })

            }

        const like = document.createElement("button");
        like.setAttribute("class", `like`);
        const id = Mid;
        like.setAttribute("id", id);

        const counter = document.createElement("h3")
        counter.setAttribute('class', "likeCounter")

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
        el.append(like, counter);
        like.addEventListener('click', (ev) => {
            ev.preventDefault();
            const patikradu = localStorage.getItem("Likes")
            const likedMenuSe = patikradu===null?[]:JSON.parse(patikradu)
            
            if (like.style.color === "white") {
                like.style.color = "red";
                likeCounter++
                if(!likedMenuSe.includes(id)){likedMenuSe.push(id);}
                localStorage.setItem("Likes", JSON.stringify(likedMenuSe))
                
            } else {
                like.style.color = "white";
                likeCounter--
                likedMenuSe.splice(likedMenuSe.indexOf(id), 1);
                localStorage.setItem("Likes", JSON.stringify(likedMenuSe))
            }
            counter.innerText=likeCounter
            set(ref(db, 'Likes/' + user.uid), {
                Likes:likedMenuSe
                });
            
            set(ref(db, 'LikesCounter/' + id), {
                Number:likeCounter,
                id: id
                });
            if(likeCounter===0){
                set(ref(db, 'LikesCounter/' + id), {
                    Number:null,
                    id: null
                    });
            }
            });

        })
        
    })
}

export {likes}