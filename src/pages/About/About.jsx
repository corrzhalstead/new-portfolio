import React, { useState } from "react";
import styles from "./About.module.css";
import Card from "../../components/Card/Card";

function About() {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Storybook",
    "Figma",
    "HTML5",
    "CSS Modules",
    "Responsive Design",
    "REST APIs",
    "Vite",
    "Postman",
    "Git",
  ];

  return (
    <>
      <section id="about" className={styles.container}>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <Card
              header={"About Me"}
              description={
                <>
                  I’m a frontend developer with years of experience building
                  responsive web applications using modern technologies. I
                  specialize in React and enjoy transforming Figma designs into
                  scalable, maintainable code with tools like{" "}
                  <strong>Storybook</strong> and <strong>CSS Modules</strong>.
                  <br />
                  <br />I thrive in Agile environments and love collaborating
                  with cross-functional teams to bring ideas to life. My work
                  focuses on creating clean, reusable components, integrating
                  REST APIs, and delivering smooth, performant user experiences.
                  <br />
                  <br />
                  I’m always open to job opportunities where I can contribute,
                  learn, and grow. If you have a role that matches my
                  experience, feel free to{" "}
                  <a href="#contact" className={styles.link}>
                    get in touch
                  </a>
                  .
                </>
              }
              isButtonVisible={true}
              buttonText={"Download Resume"}
            />
          </div>

          <div className={styles.card}>
            <Card
              header={"Skills"}
              description={
                <div className={styles.skillsGrid}>
                  {skills.map((skill, index) => (
                    <span key={index} className={styles.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              }
            />
          </div>
        </div>

        {/* <div className={styles.imageContainer}>
          <img src={aboutMe} alt="About Me" />
        </div> */}
      </section>
    </>
  );
}

export default About;
