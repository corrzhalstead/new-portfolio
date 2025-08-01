import React, { useState } from "react";
import styles from "./Projects.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import frameSrc from "../../assets/laptop_image.png";
import eventProjectImage from "../../assets/FilterSearch.png";
import projectData from "./projectData";

function Projects() {
  return (
    <div className={styles.container}>
      <section className={styles.projectsSection} id="projects">
        <h2 className={styles.heading}>Projects</h2>
        <p className={styles.subheading}>
          A selection of projects I've built or contributed to, each with a
          unique challenge and solution.
        </p>

        <div className={styles.projectItem}>
          {/* <ProjectItem
            source={eventProjectImage}
            frameSrc={frameSrc}
            header="Event Management Platform"
            description="A full-stack web app for managing multi-user events, allowing admins to create sessions, track registrations, and generate analytics dashboards. Built with React, Knex.js, and Express."
            buttonText="Project Overview"
            onClick={() => {}}
          /> */}

          {projectData.map((project, index) => (
            <div key={index} className={styles.projectItem}>
              <ProjectItem {...project} />
            </div>
          ))}
        </div>

        {/* Add more project items similarly */}
      </section>
    </div>
  );
}

export default Projects;
