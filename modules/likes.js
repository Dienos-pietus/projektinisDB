
function likes() {
    const iflikes = localStorage.getItem("likesStorage")
    const likedMenu = iflikes===null?[]:JSON.parse(iflikes)

    const cards = document.querySelectorAll('.menu-items>div')
    
    let index = 0
    // console.log(cards);
    cards.forEach((el)=>{
        
        // console.log(el);
        // el.setAttribute("style", "position:alternative")
        el.style.display="grid"
        const like = document.createElement("button")
        like.setAttribute("class",`like`)
        like.setAttribute("id",`like${index++}`)
        const id = `like${index}`
        like.style.position="absolute"
        like.style.width="35px"
        like.style.height="60px"
        like.style.backgroundColor="black"
        if(iflikes.includes(id)){
            like.style.color="red"
        }else{like.style.color="white"}
        like.innerHTML="&#9825;"
        like.style.fontSize="50px"
        like.style.textAlign="start"
        el.append(like)
        like.addEventListener('click', (ev)=>{
            ev.preventDefault()
            if(like.style.color==="white"){
                like.style.color="red"
                likedMenu.push(id)
                console.log(likedMenu);
            }else{
                like.style.color="white"
                likedMenu.splice(likedMenu.indexOf(id), 1)
                console.log(likedMenu);
            }
        localStorage.setItem("likesStorage", JSON.stringify(likedMenu))

        })
    })
    
}
likes()