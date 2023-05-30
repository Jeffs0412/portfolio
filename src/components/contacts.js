// Import the necessary functions from ReactDOM and React
const { createRoot } = ReactDOM; // Importing the createRoot function from ReactDOM
const { useState, Fragment } = React; // Importing the useState hook and Fragment from React

// Object containing contact information
const contactData = [
  {
    icon: "phone",
    label: "Contact Phone Number",
    details: "+63 995 468 6995",
  },
  {
    icon: "envelope",
    label: "Email",
    details: "manalejefferson@gmail.com",
  },
];

// Component for rendering individual contact items
function ContactsContents() {
  return (
    <div id="contact-container">
      {contactData.map(({icon, label, details}, index) => (
        <div className="contact" key={index}>
          <div className="contact-icon">
            <i className={`fas fa-${icon}`} />
          </div>
          <div className="contact-label">
            <p>{label}</p>
          </div>
          <div className="contact-details">
            <p>{details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Object containing social media information
const socialData = [
  {
    className: "fa-brands fa-linkedin",
    title: "Visit Linkedin Profile",
    href: "https://www.linkedin.com/in/jefferson-manale/",
  },
  {
    className: "fa-brands fa-github",
    title: "Visit GitHub Profile",
    href: "https://github.com/Jeffs0412",
  },
  {
    className: "fa-sharp fa-solid fa-envelope",
    title: "Email",
    href: "mailto:manalejefferson@gmail.com",
  },
];

// Component for rendering social media icons
function SocialsContents() {
  return (
    <div id="socials">
      {socialData.map(({className, title, href}, index) => (
        <div className="social" key={index}>
          <a
            className={className}
            title={title}
            href={href}
            target="_blank"
          />
        </div>
      ))}
    </div>
  );
}

// Main component for the contacts section
function Contacts() {
  return (
    <Fragment>
      <div id="contacts-header">
        <h1>CONTACT ME</h1>
      </div>
      <div id="contacts-container">
        <div id="contact-description">
          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Quas autem facilis eum neque
            iure ea.
          </p>
        </div>
        <ContactsContents />
        <SocialsContents />
      </div>
    </Fragment>
  );
}

// Get the element where the contact elements will be rendered
const contacts = document.querySelector("#contacts");
const contactsDiv = createRoot(contacts);

// Render the Contacts component
contactsDiv.render(<Contacts />);
