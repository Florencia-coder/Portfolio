import React from "react";
import styles from "./TechSlider.module.css";

const TechSlider = ({ technologies }) => {
  return (
    <div className={styles.techSlider}>
      {technologies.map((tech, index) => (
        <div key={index} className={styles.techItem}>
          {tech}
        </div>
      ))}
    </div>
  );
};

export default TechSlider;
