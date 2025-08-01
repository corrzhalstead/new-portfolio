import React, { useState } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import bgProfile from "../../assets/bg_image.jpg";
import Button from "../../components/Button/Button";
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.header}>HI, I'M CORAZON HALSTEAD</h1>
        <p className={styles.text}>
          A frontend developer building responsive React apps using modern tools
          like Storybook and React Query.”
        </p>

        <a href="#projects" className={styles.button}>
          <Button text={"View My Work"} onClick={() => {}} />
        </a>
      </div>

      <div className={styles.scrollDown}>
        <a href="#about">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="12"
              r="11"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M8 10l4 4 4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Home;
