const { createRoot } = ReactDOM;
const { useState, Fragment } = React;

function Nav() {
    const navData = [
        {
            href: "home",
            text: "HOME"
        },
        {
            href: "about",
            text: "ABOUT"
        },
        {
            href: "projects",
            text: "PROJECTS"
        },
        {
            href: "contacts",
            text: "CONTACTS"
        },
    ];
    const [menu, toggleMenu] = useState(false);

    // if (window.innerWidth > 600) {
    //     toggleMenu(true);
    // }


    const navSection = document.querySelector("#nav-section");
    const showMenu = () => {
        toggleMenu(menu => (menu? false : true))
        // navSection.style.height = "100%";
        // navSection.style.width = "100%";
        // navSection.style.justifyContent = "center";
    }
    
    if (menu) {
        navSection.classList.add("nav-section-menu");
    } else {
        navSection.classList.remove("nav-section-menu");
    }

    return (
        <nav>
            <div class={`brand-name ${menu? "brand-name-hide" : ""} nav-div`}>
                <p>Portfolio</p>
            </div>
         
                <i class="fa-solid fa-bars" onClick={showMenu}></i>
            
            <div id="nav-links" class={`nav-div ${menu? "nav-links-menu" : ""}`}>
                {menu ? (
                    navData.map(({href, text}, index) => (
                        <a href={`#${href}`} class={`nav-link ${menu? "" : "nav-link-menu"}`} key={`href-${index}`} onClick={showMenu}>{text}</a>
                    ))

                ) : (
                    ""
                )
            }
            </div>
        </nav>
    );
}

const navSection = document.querySelector("#nav-section");
const navContainer = createRoot(navSection);
navContainer.render(<Nav/>)

