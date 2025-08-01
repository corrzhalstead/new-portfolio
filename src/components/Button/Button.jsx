import React, { useState } from "react";
import styles from "./Button.module.css";

function Button({ text, onClick }) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
