// Import the necessary functions from ReactDOM and React
const { createRoot } = ReactDOM;
const { useState } = React;

// Get the element where the skills will be rendered
const skills = document.querySelector("#skills");

// Create a root object to represent the React component tree
const skillsDiv = createRoot(skills);

// Array of skill images and corresponding names
const skill_images = ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"];
const skill_name = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL", "Bash", "Git"];


// React component that renders the skills section
function Skills() {
  return (
    <div id="skills">
      {/* Iterate over the skill_images array and generate skill elements */}
      {skill_images.map((image, index) => (
        <div key={index} className="skill">
          <div className="skill-content">
            <div className="skill-icon">
              <img src={image} />
            </div>
            <p className="skill-name">{skill_name[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Render the Skills component within the skills element
skillsDiv.render(<Skills/>);

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
