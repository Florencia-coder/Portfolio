// src/App.js
import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import About from "./components/About/About";
import TecnologiesSection from "./components/TecnologiesSection/TecnologiesSection";
import ContactSection from "./components/ContactSection/ContactSection";
import ProjectsSection from "./components/ProjectsSection/TrajectorySection";

const App = () => {
  return (
    <div className="App">
      <Header />
      <section id="about">
        <About />
      </section>
      <section id="trajectory">
        <ProjectsSection />
      </section>
      <section id="technologies">
        <TecnologiesSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default App;
