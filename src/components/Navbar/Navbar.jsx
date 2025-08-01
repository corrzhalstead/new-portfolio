import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import profilePic from "../../assets/ProfilePic.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // return (
  //   <div className={styles.container}>
  //     <button className={styles.menuToggle} onClick={toggleMenu}>
  //       ☰
  //     </button>
  //     <div className={styles.navbar}>
  //       <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
  //         <li className={styles.navItem}>
  //           <Link to="/" onClick={() => setIsOpen(false)}>
  //             Home
  //           </Link>
  //         </li>
  //         <li className={styles.navItem}>
  //           <Link to="/about" onClick={() => setIsOpen(false)}>
  //             About
  //           </Link>
  //         </li>
  //         <li className={styles.navItem}>
  //           <Link to="/projects" onClick={() => setIsOpen(false)}>
  //             Projects
  //           </Link>
  //         </li>
  //         <li className={styles.navItem}>
  //           <Link to="/resume" onClick={() => setIsOpen(false)}>
  //             Resume
  //           </Link>
  //         </li>
  //         <li className={styles.navItem}>
  //           <Link to="/contact" onClick={() => setIsOpen(false)}>
  //             Contact
  //           </Link>{" "}
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // );

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

        {/* Hamburger toggle for mobile */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation links */}
        <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
          {/* <li className={styles.navItem}>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li> */}
          <li className={styles.navItem}>
            {/* <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link> */}
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
            <a href="#resume" onClick={() => setIsOpen(false)}>
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
