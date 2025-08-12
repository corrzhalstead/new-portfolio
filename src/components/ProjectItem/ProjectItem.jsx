import React from "react";
import styles from "./ProjectItem.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import frameSrc from "../../assets/laptop_image.png";

function ProjectItem({
  source,
  header,
  description,

  slug,
}) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        <div className={styles.itemLeft}>
          <img className={styles.laptopImage} src={frameSrc} alt={header} />
          <img className={styles.screenImage} src={source} alt={header} />
        </div>
        <div className={styles.itemRight}>
          <h2 className={styles.header}>{header}</h2>
          <div className={styles.description}>{description}</div>

          <div className={styles.buttonContainer}>
            {/* <Button text={buttonText} onClick={onClick} /> */}
            <Button
              text="View Project"
              onClick={() => navigate(`/projects/${slug}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
