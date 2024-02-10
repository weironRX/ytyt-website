const openIcon = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".menu__close-button")

const menu = document.querySelector(".menu")

openIcon.addEventListener("click", () => {
    menu.classList.toggle("_active")
    document.body.classList.toggle("_locked")
})

closeIcon.addEventListener("click", () => {
    menu.classList.toggle("_active")
    document.body.classList.toggle("_locked")
})