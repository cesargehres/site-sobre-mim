let windowWidth = window.innerWidth;
const menu = document.querySelector("nav#menu")

if (windowWidth <= 600) {
    document.querySelector("nav#menu").style.display = "block"
}

function menuHamburguer() {
    const menu = document.querySelector("nav#menu")
    if (windowWidth <= 600) {
        if (menu.style.display == "none") {
            menu.style.display = "block"
        } else {
            menu.style.display = "none"
        }
    }        
}

