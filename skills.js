// Import the necessary functions from ReactDOM and React
const { createRoot } = ReactDOM;
const { useState } = React;

// Get the element where the skill elements will be rendered
const skills = document.querySelector("#skills");

// Create a root object to represent the React component tree
const skillsDiv = createRoot(skills);

// Array of skill images and corresponding names
const skillsData = [
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
    name: "HTML"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    name: "CSS"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "JavaScript"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
    name: "PostgreSQL"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    name: "Bash"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    name: "Git"
  }
];

// React component that renders the skills section
function Skills() {
  return (
    <div id="skills">
      {/* Iterate over the skillsData array and generate skill elements */}
      {skillsData.map(({ image, name }, index) => (
        <div key={index} className="skill">
          <div className="skill-content">
            <div className="skill-icon">
              <img src={image} alt={name} />
            </div>
            <p className="skill-name">{name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Render the Skills component within the skills element
skillsDiv.render(<Skills />);
