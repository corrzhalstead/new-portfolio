import React, { useState } from "react";
import styles from "./ProjectItem.module.css";

import Button from "../Button/Button";
import Resume from "../../assets/Corazon_Halstead_Resume.pdf";

function ProjectItem({
  source,
  frameSrc,
  header,
  description,
  buttonText,
  onClick,
}) {
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
            <Button text={buttonText} onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
