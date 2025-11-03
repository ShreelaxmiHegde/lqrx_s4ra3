// Hamburger menu for mobile screen size

const menu = document.querySelector(".hamburger-menu");
const navItems = document.querySelector(".nav-items");

// open menu
menu.addEventListener("click", () => {
    navItems.classList.toggle("active");
});

// close menu when clicked outside
document.addEventListener("click", (event) => {
    if(!navItems.contains(event.target) && !menu.contains(event.target)) {
        navItems.classList.remove("active");
    }
});