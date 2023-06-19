// Import the necessary functions from ReactDOM and React
const { createRoot } = ReactDOM;
const { useState } = React;


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



function AboutMe() {

  const infoData = [
    {
      src: "src/images/undraw_programming.svg",
      text: "I am a passionate and self-taught web developer who want to create engaging and user-friendly digital experiences. As a self-taught web developer, I have been on a transformative journey, acquiring relevant skills in the field of web development such as HTML, CSS, JavaScript, React, PHP and relational databases."
    },

    {
      src: "src/images/undraw_research.svg",
      text: "Learning web development technologies has been a challenge for me, yet I learned to enjoy it. I have acquired the relevant knowledge and skills from different free online resources such as YouTube, FreeCodeCamp, Codecademy, Udemy, Coursera, and documentations of different web technologies."
    },

    {
      src: "src/images/undraw_build.svg",
      text: "To enhance and use my skills into practice, I have completed several simple projects that have challenged me to think critically, problem-solve, and apply my learning effectively."
    },

    {
      src: "src/images/undraw_tech.svg",
      text: "As a self-taught web developer, I am committed to continuous learning and staying up-to-date the latest technologies that will improve my skills and increase my productivity."
    },

    {
      src: "src/images/undraw_collaboration.svg",
      text: "My ultimate goal is to collaborate with clients and employers who appreciate innovative thinking, creativity, and efficient development practices."
    }
  ];

  return (
    <div id="about-me">
       <div id="about-header">
        <h1>ABOUT ME</h1>
      </div>
      {infoData.map(({src, text}, index) => (
        <div className="about-info" key={`about-info-${index}`} >
            <>
              <img className="about-image" src={src} />
              <div className="about-text">
                <p >{text}</p>
              </div>
            </>
        </div>
      ))}
    </div>
  );
} 

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

function About() {
  return (
    <Fragment>
      <AboutMe/>
      <Skills/>
      <h3 id="about-footer">Feel free to explore my portfolio and projects to see examples of my work.</h3>
    </Fragment>
  );
}

// Get the element where the skill elements will be rendered
const about = document.querySelector("#about");

// Create a root object to represent the React component tree
const aboutDiv = createRoot(about);

// Render the Skills component within the skills element
aboutDiv.render(<About />);
