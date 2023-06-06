// Import the necessary functions from ReactDOM and React
const { createRoot } = ReactDOM;
const { useState, Fragment } = React;

// Array of project data containing objects with information about each project
const projectsData = [
  {
    image: "note-app.jpg",
    link: 'https://jeffs0412.github.io/note-taking-app/',
    githubLink: 'https://github.com/Jeffs0412/note-taking-app',
    description: 'A Note Taking App built with HTML, CSS, JavaScript, and React.',
    name: 'Note Taking App'
  },
  {
    image: "random-quote.jpg",
    link: 'https://jeffs0412.github.io/random-quote-generator',
    githubLink: 'https://github.com/Jeffs0412/random-quote-generator',
    description: 'A Random Quote Generator that generates random quotes from a third-party API. It is built using HTML, CSS, and JavaScript.',
    name: 'Random Quote Generator'
  },
  {
    image: "coffee-info.png",
    link: 'https://jeffs0412.github.io/coffee-info/',
    githubLink: 'https://github.com/Jeffs0412/coffee-info',
    description: 'This single-page website provides information about different coffee roasting levels and coffee-producing countries. It is built using HTML, CSS, JavaScript and React.',
    name: 'The Best Coffee - By Region'
  },
  {
    image: "picture-picture1.png",
    link: 'https://jeffs0412.github.io/picture-in-picture/',
    githubLink: 'https://github.com/Jeffs0412/picture-in-picture',
    description: 'Lorem ipsum dolor sit amet, tenetur. Eaque iste qui, ipsa illum nisi explicabo cupiditate expedita accusantium. Debitis, fugiat?',
    name: 'Picture in Picture'
  },
  {
    image: "database (2).png",
    link: 'https://github.com/Jeffs0412/worldcup_database',
    githubLink: 'https://github.com/Jeffs0412/worldcup_database',
    description: 'Lorem ipsum dolor sit amet, tenetur. Eaque iste qui, ipsa illum nisi explicabo cupiditate expedita accusantium. Debitis, fugiat?',
    name: 'Worldcup Database'
  }
];

// Component for rendering individual projects
function ProjectContents() {
  return (
    <div id="project-container">
      {/* Iterate over the projectsData array and destructure every element into saparate properties*/}
      {projectsData.map(({ image, link, githubLink, description, name }, index) => (
        <div className="project" key={index}>
          <a className="project-link" href={link} target="_blank">
            <img src={`src/images/${image}`} alt="View Source Code" />
          </a>

          <div className="project-content">
          <div className="project-name">
            <p className="name">{name}</p>
            <a href={githubLink} title="Visit GitHub Repository" className="fab fa-github" target="_blank"></a>
          </div>
          <div className="project-description">
            <p>{description}</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Projects() {
  return (
    <Fragment>
      <div id="projects-header">
        {/* Display the projects header */}
        <h1>PROJECTS</h1>
      </div>
      {/* Render the project contents */}
      <ProjectContents />
    </Fragment>
  );
}

// Get the element where the project elements will be rendered
const projects = document.querySelector("#projects");
const projectsDiv = createRoot(projects);
// Render the Projects component
projectsDiv.render(<Projects />);
