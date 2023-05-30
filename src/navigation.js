// Event Listener for Navigating Sections
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((nav, index) => {
  // Add click event listener to each navigation link
  nav.addEventListener("click", (event) => {

    // Remove the 'active' class from all navigation links
    navLinks.forEach(item => {
      item.classList.remove("active");
    });

    // Add the 'active' class to the clicked navigation link
    nav.classList.add("active");

  });
});