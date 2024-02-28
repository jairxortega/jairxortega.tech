import React from "react";
import "./App.css";
import NavBar from "./components/nav";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <section id="about">
          <h2>About</h2>
          <p>This section contains information about me.</p>
        </section>
        <section id="experience">
          <h2>Experience</h2>
          <p>This section highlights my work experience.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>This section provides my contact information.</p>
        </section>
      </div>
    </div>
  );
}

export default App;
