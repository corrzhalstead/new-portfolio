import React from "react";
import styles from "./ProjectDetails.module.css";
import arrowLeft from "../../assets/arrow_Left.svg";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import ProjectShow from "../../components/ProjectShow/ProjectShow";
import EventAdminVideo from "../../assets/Event_Admin.mp4";
import projects from "../Projects/projectData";

function ProjectDetails() {
  const navigate = useNavigate();
  const { key } = useParams();
  const { state } = useLocation();

  const projectFromState = state?.project;
  const project = projectFromState ?? projects.find((p) => p.key === key);

  return (
    <div className={styles.container}>
      <div className={styles.topContainer} onClick={() => navigate(-1)}>
        <img src={arrowLeft} alt="Back Arrow" />
        <p>Back</p>
      </div>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <ProjectShow videoSrc={project.videoSrc} slides={project.slides} />
        </div>

        <div>
          <h2 className={styles.overviewText}>Project Overview</h2>
          <h3 className={styles.projectHeader}>{project.header}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
          <div className={styles.projectSubContainer}>
            <h3 className={styles.projectSubHeader}>Role:</h3>
            <p className={styles.role}>{project.role}</p>
            <h3 className={styles.projectSubHeader}>Contributions:</h3>
            <ul className={styles.projectContributions}>
              {project.contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>
            <h3 className={styles.projectSubHeader}>Stacks:</h3>
            <p className={styles.projectTech}>{project.tech.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
