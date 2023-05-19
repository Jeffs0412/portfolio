// Event Listener for Navigating Sections
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((nav, index) => {
    nav.addEventListener("click", (event) => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        nav.classList.add("active");

    });
});