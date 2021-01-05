import "./App.css";
import React from "react";
import NavBarWithLib from "./components/NavBar/NavBarWithLib";
import Footer from "./components/Footer/Footer";
import AboutMeSection from "./sections/AboutMeSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
// import ContactMeSection from "./sections/ContactMeSection";
import Home from "./sections/Home";
import ProjectsSection from "./sections/ProjectsSection";

function App() {
  return (
    <div className="App">
      <NavBarWithLib />
      <Home />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      {/* <ContactMeSection /> */}
      <Footer />
    </div>
  );
}

export default App;
