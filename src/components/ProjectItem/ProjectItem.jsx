import React from "react";
import styles from "./ProjectItem.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import frameSrc from "../../assets/laptop_image.png";

function ProjectItem({ source, header, description, keyId }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.laptopImage} src={frameSrc} alt={header} />
        <img className={styles.screenImage} src={source} alt={header} />
      </div>
      <div className={styles.descriptionWrapper}>
        <h2 className={styles.header}>{header}</h2>
        <div className={styles.description}>{description}</div>

        <div className={styles.buttonContainer}>
          <Button
            text="View Project"
            onClick={() => navigate(`/projects/${keyId}`)}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
