import React, { useState } from "react";
import styles from "./ProjectShow.module.css";
import SlideShow from "../SlideShow/SlideShow";
import Button from "../Button/Button";

function ProjectShow({ videoSrc, slides }) {
  const [showSlides, setShowSlides] = useState(false);

  return (
    <section className={styles.wrap} aria-label="Project demo">
      {!showSlides ? (
        <div className={styles.videoBlock}>
          <video
            src={videoSrc}
            className={styles.video}
            controls
            playsInline
            onEnded={() => setShowSlides(true)}
          />
          <div className={styles.actions}>
            <Button
              onClick={() => setShowSlides(true)}
              // aria-label="Skip to screenshots"
              text={"Skip to screenshots →"}
            />
          </div>
        </div>
      ) : (
        <SlideShow slides={slides} autoPlay interval={3500} />
      )}
    </section>
  );
}

export default ProjectShow;
