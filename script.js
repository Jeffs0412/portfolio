const {createRoot} = ReactDOM;
const {useState} = React;
const skills = document.querySelector("#skills");
const skillsDiv = createRoot(skills);

const skill_images = ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"];
const skill_name = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL", "Bash", "Git"];
const skillElements = [];

function Skills() {
    return (
      <div id="skills">
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

skillsDiv.render(<Skills/>);

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
