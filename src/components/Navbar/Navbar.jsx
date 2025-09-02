import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import profilePic from "../../assets/ProfilePic.jpg";
import Resume from "../../assets/Corazon_Halstead_Resume_Portfolio.pdf";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        {/* Logo on the left */}
        <div className={styles.logoContainer}>
          <a href="/" className={styles.profilePic}>
            <img src={profilePic} alt="Profile" />
            <span className={styles.brandName}>Corazon Halstead</span>
          </a>
        </div>

        <button className={styles.menuToggle} onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation links */}
        <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
          <li className={styles.navItem}>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li className={styles.navItem}>
            <a href={Resume} download target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
