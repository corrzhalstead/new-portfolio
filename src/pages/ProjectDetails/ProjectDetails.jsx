import React from "react";
import styles from "./ProjectDetails.module.css";
import arrowLeft from "../../assets/arrow_Left.svg";
import { useNavigate } from "react-router-dom";
import ProjectShow from "../../components/ProjectShow/ProjectShow";
import EventAdminVideo from "../../assets/Event_Admin.mp4";

function ProjectDetails() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.topContainer} onClick={() => navigate(-1)}>
        <img src={arrowLeft} alt="Back Arrow" />
        <p>Back</p>
      </div>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <ProjectShow
            videoSrc={EventAdminVideo}
            slides={[
              {
                src: "/shots/home.png",
                title: "Homesite",
                caption: "Set location & view active events",
              },
              {
                src: "/shots/cart.png",
                title: "Cart",
                caption: "React Query + BFF workflow",
              },
              {
                src: "/shots/accessibility.png",
                title: "Accessibility",
                caption: "ADA accommodations flow",
              },
            ]}
          />
        </div>

        <div>
          <h2>Project Overview</h2>
          <p>
            This project showcases the use of React Query and a
            Backend-for-Frontend (BFF) architecture to create a seamless user
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
