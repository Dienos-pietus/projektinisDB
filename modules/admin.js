
const categories = document.querySelector(".categories")
categories.innerHTML+=`<button type="button" class="btn btn-outline-danger mx-1" id="addBtn">add new dish</button>`

const addBtn = document.getElementById("addBtn")
const body = document.querySelector("body")

addBtn.addEventListener("click", (ev)=>{
    ev.preventDefault()
    const forma = document.createElement("form")
    forma.style.width="300px"
    forma.style.height="200px"
    forma.style.backgroundColor="green"
    forma.style.position="fixed"
    forma.style.top="20%"
    forma.style.left="45%"
    forma.style.display="flex"
    forma.style.flexDirection="column"
    const exit = document.createElement("button")
    exit.innerText="exit"
    const labelPhoto = document.createElement("label").innerText="Photo Url:"
    const inputPhoto = document.createElement("input")
    const labelPrice = document.createElement("label").innerText="Price: (format: 00.00)"
    const inputPrice = document.createElement("input")
    const labelName = document.createElement("label").innerText="Name:"
    const inputName = document.createElement("input")
    const labelAbout = document.createElement("label").innerText="About:"
    const inputAbout = document.createElement("textarea")
    const add = document.createElement("button")
    add.innerText="Add"
    body.appendChild(forma)
    forma.append(exit,labelPhoto,inputPhoto,labelPrice,inputPrice,labelName,inputName,labelAbout,inputAbout,add)

    add.addEventListener("click", (ev)=>{
        ev.preventDefault()
        const menuItems = document.querySelector(".menu-items")
        if(inputPhoto.value!=" "){
            menuItems.innerHTML+=`<div class="card mb-3 col-md-6" id="breakfast" style="max-width: 660px">
            <div class="row g-0">
            <div class="col-md-4 col-sm-12">
                <img
                src="${inputPhoto.value}"
                class="img-fluid rounded-start border border-warning border-2"
                alt="..."
                />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <!-- <h5 class="card-title d-inline">Card title <span class="price">$${inputPrice.value}</span></h5> -->
                <div class="card-title">
                    <h5 class="d-inline">${inputName.value}</h5>
                    <span class="price text-warning">$${inputPrice.value}</span>
                </div>
                <p class="card-text">${inputAbout.value}
                </p>
                <div style="display: flex; justify-content: flex-end">
                    <button type="submit" class="btn btn-primary">Order</button>
                </div>
                </div>
            </div>
            </div>
        </div>`
        }
    })
})