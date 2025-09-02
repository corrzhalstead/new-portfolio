import React, { useState } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import aboutMe from "../../assets/aboutMe_image.png";
import Button from "../Button/Button";
import Resume from "../../assets/Corazon_Halstead_Resume_Portfolio.pdf";

function Card({ header, description, isButtonVisible, buttonText, onClick }) {
  return (
    <div className={styles.container}>
      {/* <div className={styles.cardsWrapper}> */}
      <div className={styles.card}>
        <h2 className={styles.header}>{header}</h2>
        <div className={styles.description}>{description}</div>

        {isButtonVisible && (
          <div className={styles.buttonContainer}>
            {onClick ? (
              <Button text={buttonText} onClick={onClick} />
            ) : (
              <a
                href={Resume}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text={buttonText} />
              </a>
            )}
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Card;
