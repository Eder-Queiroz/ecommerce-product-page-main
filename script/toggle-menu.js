
(function() {
    const HAMBURGUER_MENU = document.querySelector(".hamburguer-menu")
    const CLOSE_MENU = document.querySelector(".close-menu")

    HAMBURGUER_MENU.onclick = function(e) {
        const BODY = document.querySelector("body")
        BODY.classList.toggle("hide-menu")
    }

    CLOSE_MENU.onclick = function(e) {
        const BODY = document.querySelector("body")
        BODY.classList.toggle("hide-menu")
    }

})()