const { createRoot } = ReactDOM;
const { useState, Fragment } = React;

// Component for displaying the profile image on mobile devices
function ProfileImageMobile() {
  return (
    <div id="profile-image-mobile">
      <img src="images/undraw_source_code_re_wd9m.svg" alt="" width="400px" />
    </div>
  );
}

// Component for displaying greetings
function Greet() {
  const greetData = [
    { id: "greet", text: "WELCOME TO MY WEBSITE" },
    { id: "name", text: "Hi, I'm Hiro Kurosaki." },
  ];
  
  return (
    <div id="greetings">
      {greetData.map(({ id, text }, index) => (
        <div id={id} key={index}>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

// Component for displaying slogan and introduction
function SloganIntro() {
  const homeData = [
    {
      homeID: "slogan",
      homeText: "A self-taught Web Developer.",
      classes: "line-1 anim-typewriter",
    },
    {
      homeID: "intro",
      homeText:
        "I use animation as a third dimension by which to simplify experiences and guiding through each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.",
      classes: null,
    },
  ];

  return (
    <Fragment>
      {homeData.map(({ homeID, homeText, classes }, index) => (
        <div id={`home-${homeID}`} key={index}>
          <p className={classes}>{homeText}</p>
        </div>
      ))}
    </Fragment>
  );
}

// Component for displaying social links
function HomeSocials() {
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
  
  return (
    <div id="home-socials">
      {socialData.map(({ className, title, href }, index) => (
        <div className="home-social" key={index}>
          <a className={className} href={href} title={title} target="_blank"></a>
        </div>
      ))}
    </div>
  );
}

// Component for the home introduction section
function HomeIntroduction() {
  return (
    <div id="home-introduction">
      <ProfileImageMobile />
      <Greet />
      <SloganIntro />
      <HomeSocials />
    </div>
  );
}

// Component for displaying the profile image
function ProfileImage() {
  return (
    <div id="profile-image">
      <img src="images/undraw_source_code_re_wd9m.svg" width="400px" />
    </div>
  );
}

// Component for the home page
function Home() {
  return (
    <Fragment>
      <HomeIntroduction />
      <ProfileImage />
    </Fragment>
  );
}

// Get the #home element where Home component will be rendered 
const home = document.querySelector("#home");
const homeDiv = createRoot(home);

// Render the Home component into the #home element
homeDiv.render(<Home />);
