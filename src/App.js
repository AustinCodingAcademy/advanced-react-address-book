import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Header() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
  );
}

function Intro() {
  return (
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  );
}

function Main() {
  return (
    <div className="Main-container">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Section1() {
  return (
    <div className="Section-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse v
        estibulum nisi nec est iaculis, ut tristique arcu hendrerit.
        Cras velit nibh, mollis sit amet odio ut, dapibus convallis nisi.
        Donec id egestas ipsum. Duis id egestas justo, ac porta diam.
      </p>
    </div>
  );
}

function Section2() {
  return (
    <div className="Section-content">
      <p>
        Suspendisse maximus, odio vel tincidunt viverra, sem dui feugiat mauris,
        eu ultricies lorem dui vitae est. Proin ac vehicula velit.
        Vestibulum eget diam ullamcorper, consectetur est at, imperdiet turpis.
      </p>
    </div>
  );
}

function Section3() {
  return (
    <div className="Section-content">
      <p>
      Duis dictum fringilla nulla et tincidunt. Praesent rutrum ac nisi ut tempor.
      Curabitur non velit eget arcu semper suscipit.
      Vestibulum scelerisque laoreet metus quis dapibus.
      Proin ultricies velit eget nisl elementum sollicitudin sed eget tortor.
      Vivamus aliquam placerat ante sed posuere. Sed finibus vestibulum augue id interdum.
      Suspendisse potenti.
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="Footer-container">
      <p className="Footer-text">
        THE END
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
