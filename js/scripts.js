function openNav() {
    let menu = document.getElementById("navigation")

    if (menu.className === "navigation") {
        menu.className += " menujs"
        document.getElementById("threeline-icon").innerHTML = "&cross;"
    } else {
        menu.className = "navigation"
        document.getElementById("threeline-icon").innerHTML = "&#9776"
    }
}