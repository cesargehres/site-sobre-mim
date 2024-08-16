function mudouTamanho() {
    let windowWidth = window.innerWidth;
    const menu = document.querySelector("nav#menu")
    if (window.innerWidth > 600) {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}

function menuHamburguer() {
    const menu = document.querySelector("nav#menu")
    if (window.innerWidth <= 600) {
        if (menu.style.display == "none") {
            menu.style.display = "block"
        } else {
            menu.style.display = "none"
        }
    }        
}

