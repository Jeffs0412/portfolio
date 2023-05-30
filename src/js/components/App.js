const { createRoot } = ReactDOM;
const { useState, Fragment } = React;

function App() {
    return (
        <Fragment>
            <Home/>
            <About/>
            <Projects/>
            <Contacts/>
        </Fragment>
    );
}

const main = document.querySelector("body");
const mainDiv =  createRoot(root);