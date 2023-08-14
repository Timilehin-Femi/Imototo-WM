const toggleBars = document.getElementById("toggle-bars")
const navBarLinks = document.getElementsByClassName("navbar-links")[0]

toggleBars.addEventListener("click", () => {
    navBarLinks.classList.toggle("active")
})
