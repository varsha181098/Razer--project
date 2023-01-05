const searchBtn = document.getElementById("searchBtn")
const closeBtn = document.getElementById("closeBtn")
const searchBox = document.getElementById("searchBox");
const search = document.getElementById("search");
const cartBtn = document.getElementById("cartBtn");
const shopingContainer = document.getElementById("shoping-container");

const menuBtn = document.getElementById("menu-btn")

const menuCloseBtn = document.getElementById("menu-closebtn")

const navContainer = document.getElementById("nav-container");

const cart = document.getElementById("cart")
/* by ank*/ 
let btnOpen = document.getElementsByClassName("footer-link-btn")
let btnClose = document.getElementsByClassName("footer-link-btn-cls")
let showLink = document.getElementsByClassName("show-links")
/*by ank */
searchBtn.addEventListener("click",()=>{
    searchBox.classList.toggle("active-search-box")
    search.focus()
})

closeBtn.addEventListener("click",()=> {
    searchBox.classList.toggle("active-search-box")
})

cartBtn.addEventListener("click", ()=> {
    shopingContainer.classList.toggle("active-cart")
})

menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle("active-menu-btn")
    menuCloseBtn.classList.toggle("active-menu-closebtn")

    searchBox.classList.toggle("active-search-box")
    search.focus()

    navContainer.classList.toggle("active-nav-container")

    cart.classList.toggle("active-cart")
})
menuCloseBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle("active-menu-btn")
    menuCloseBtn.classList.toggle("active-menu-closebtn")

    searchBox.classList.toggle("active-search-box")
    search.focus()

    navContainer.classList.toggle("active-nav-container")

    
    cart.classList.toggle("active-cart")
})

let btnLinkClose = ()=>{
    for (let i = 0; i < btnOpen.length; i++) {
        btnOpen[i].style.display = "block"
        btnClose[i].style.display = "none"
        showLink[i].style.height = 0
    }
}

for (let i = 0; i < btnOpen.length; i++) {
    //console.log(btnOpen)
    btnOpen[i].addEventListener("click",()=>{
        btnLinkClose()
        btnOpen[i].style.display = "none"
        btnClose[i].style.display = "block"
        showLink[i].style.height = "auto"
    })
}
for (let i = 0; i < btnOpen.length; i++) {
    //console.log(btnOpen)
    btnClose[i].addEventListener("click",()=>{
        btnLinkClose()
        btnOpen[i].style.display = "block"
        btnClose[i].style.display = "none"
        showLink[i].style.height = 0
    })
}