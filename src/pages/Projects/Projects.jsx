import React from "react";
import styles from "./Projects.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
// import frameSrc from "../../assets/laptop_image.png";
// import eventProjectImage from "../../assets/FilterSearch.png";
import projectData from "./projectData";

function Projects() {
  return (
    <div className={styles.container}>
      <section className={styles.projectSection} id="projects">
        <h2 className={styles.heading}>Projects</h2>
        <p className={styles.subheading}>
          A selection of projects I've built or contributed to, each with a
          unique challenge and solution.
        </p>

        <div className={styles.projectContainer}>
          {projectData.map((project) => (
            <ProjectItem
              keyId={project.key}
              source={project.source}
              header={project.header}
              description={project.description}
              // {...project}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
