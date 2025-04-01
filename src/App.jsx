import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import About from "./components/About/About";
import TecnologiesSection from "./components/TecnologiesSection/TecnologiesSection";
import ContactSection from "./components/ContactSection/ContactSection";
import ProjectsSection from "./components/ProjectsSection/TrajectorySection";
import { LanguageProvider } from "./i18n/LanguageProvider";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";

const App = () => {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <LanguageSwitcher />
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
    </LanguageProvider>
  );
};

export default App;
