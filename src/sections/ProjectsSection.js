import React from "react";
import "./ProjectsSection.css";
import CapgeminiProjects from "./CapgeminiProjects";
import OFSSProjects from "./OFSSProjects";
import AcademicProjects from "./AcademicProjects";

function ProjectsSection() {
  return (
    <div className="projects-section" id="projects">
      <p className="h1 bg-info heading">Projects</p>
      <p className="h3 heading1">Academic Projects</p>
      <AcademicProjects />
      <p className="h3 heading1">Professional Projects</p>
      <p className="h4 heading2">Capgemini</p>
      <CapgeminiProjects />
      <p className="h4 heading2">Oracle Financial Services</p>
      <OFSSProjects />
    </div>
  );
}

export default ProjectsSection;
