// src/components/ProjectsSection.jsx
import React from "react";
import projects from "../../data/projectData";
import "./index.css";

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="portifolio">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} />
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div></div>
              <ul className="tech-list">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
