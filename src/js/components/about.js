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
      text: "I am a passionate and self-taught web developer who truly enjoys creating engaging and user-friendly digital experiences. Over the past 8 months, I have been on a transformative journey, acquiring knowledge and honing my skills in HTML, CSS, JavaScript, React, and relational databases."
    },

    {
      src: "src/images/undraw_research.svg",
      text: "My learning path has been diverse and dynamic. I have sought knowledge from various online resources such as YouTube, FreeCodeCamp, Codecademy, Udemy, Coursera, and documentations of different web technologies. The wealth of information available from these sources has provided me with a well-rounded education in web development."
    },

    {
      src: "src/images/undraw_ai.svg",
      text: "Through these online resources, I have gained practical insights, learned industry best practices, and explored real-world examples. Additionally, I have leveraged the power of ChatGPT, an AI language model, to seek guidance and clarification on complex topics, further deepening my understanding of web development concepts."
    },

    {
      src: "src/images/undraw_build.svg",
      text: "To solidify my skills and put my knowledge into practice, I have completed several projects that have challenged me to think critically, problem-solve, and apply my learning effectively. These projects have not only reinforced my technical abilities but have also showcased my ability to deliver high-quality results."
    },

    {
      src: "src/images/undraw_futuristic.svg",
      text: "As a self-motivated learner, I am committed to continuous growth and staying up-to-date with emerging trends in web development. I have a strong attention to detail, a keen eye for design, and a passion for writing clean and maintainable code."
    },

    {
      src: "src/images/undraw_collaboration.svg",
      text: "My ultimate goal is to collaborate with clients and employers who appreciate innovative thinking, creativity, and efficient development practices. Together, we can create exceptional digital experiences that leave a lasting impact."
    }
  ];

  return (
    <div id="about-me">
       <div id="about-header">
        <h1>ABOUT ME</h1>
      </div>
      {infoData.map(({src, text}, index) => (
        <div className="about-info" key={`about-info-${index}`} >
          {index % 2 === 0 ? (
            <>
              <img className="about-image" src={src} />
              <div className="about-text">
              <p >{text}</p>
              </div>
            </>
          ) : (
            <>
            <div className="about-text">
              <p>{text}</p>
            </div>
              <img className="about-image" src={src} />
            </>
          )}
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
      <h3 id="about-footer">Feel free to explore my portfolio and projects to see examples of my work.</h3>
      <Skills/>
    </Fragment>
  );
}

// Get the element where the skill elements will be rendered
const about = document.querySelector("#about");

// Create a root object to represent the React component tree
const aboutDiv = createRoot(about);

// Render the Skills component within the skills element
aboutDiv.render(<About />);
