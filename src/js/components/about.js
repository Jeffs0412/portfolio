// Import the necessary functions from ReactDOM and React
const { createRoot } = ReactDOM;
const { useState } = React;

function AboutMe() {
  
  const infoData = [
    {
      src: "report.svg",
      text: "Implemented a dynamic web-based report generation feature that enable authorized users to generate filtered reports based on real-time data to enhance their ability to make data-driven decisions."
    },
    
    {
      src: "programmer.svg",
      text: "Utilized MVC architecture in ASP.NET Core, creating efficient Models, Views, and Controllers. Incorporated best practices for code efficiency, readability, and maintainability and leveraged LINQ and stored procedures for optimized data processing."
    },

    {
      src: "undraw_build.svg",
      text: "Enhanced the user interface through design improvements and implementation of dynamic web pages, utilizing HTML, CSS, JavaScript, jQuery, and Bootstrap. Employed third-party libraries for optimized data presentation, significantly enhancing user experience and website usability."
    },
    
    {
      src: "development.svg",
      text: "Played a pivotal role in troubleshooting and resolving bugs, contributing to the overall improvement of website functionality ensuring alignment with the users' needs."
    },
    
    {
      src: "debug.svg",
      text: "Conducted rigorous website testing to identify errors, fix bugs and implement potential improvements."
    }
  ];

  const src_path = "src/images";
  
  return (
    <div id="about-me">
       <div id="about-header">
        <h1>EXPERIENCE</h1>
        <div id="job">
          <h2>JUNIOR PROGRAMMER</h2>
          <h3>(August 2023 - Present)</h3>
        </div>
      </div>
      {infoData.map(({src, text}, index) => (
        <div className="about-info" key={`about-info-${index}`} >
            <>
              <img className="about-image" src={`${src_path}/${src}`} />
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

  // Array of skill images and corresponding names
  const skillsData = [
    {
      image: "html5/html5-plain.svg",
      name: "HTML"
    },
    
    {
      image: "css3/css3-plain.svg",
      name: "CSS"
    },
    
    {
      image: "javascript/javascript-original.svg",
      name: "JavaScript"
    },
    
    {
      image: "react/react-original.svg",
      name: "React.js"
    },
    
    {
      image: "csharp/csharp-plain.svg",
      name: "C#"
    },
    
    {
      image: "dotnetcore/dotnetcore-original.svg",
      name: "ASP.NET Core"
    },
    
    {
      image: "mysql/mysql-original.svg",
      name: "MySQL"
    },

    {
      image: "visualstudio/visualstudio-plain.svg",
      name: "Visual Studio"
    },
    
    {
      image: "git/git-original.svg",
      name: "Git"
    }
  ];

  const imageLink = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

  return (
    <div id="skills">
      {/* Iterate over the skillsData array and generate skill elements */}
      {skillsData.map(({ image, name }, index) => (
        <div key={index} className="skill">
          <div className="skill-content">
            <div className="skill-icon">
              <img src={`${imageLink}/${image}`} alt={name} />
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
      {/* <h3 id="about-footer">Feel free to explore my portfolio and projects to see examples of my work.</h3> */}
    </Fragment>
  );
}

// Get the element where the skill elements will be rendered
const about = document.querySelector("#about");

// Create a root object to represent the React component tree
const aboutDiv = createRoot(about);

// Render the Skills component within the skills element
aboutDiv.render(<About />);
