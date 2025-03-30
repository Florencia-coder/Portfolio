import React from "react";
import useMouseMovement from "../../hooks/useMouseMovement";
import AboutText from "../AboutText/AboutText";
import styles from "./About.module.css";

const About = () => {
  const { handleMouseMove, offsetX, offsetY } = useMouseMovement();
  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      <div className={styles.left}>
        <div
          className={styles.containerTitle}
          style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
        >
          <span className={styles.title}>
            DESARROLLADORA<h1 className={styles.titleRol}>FULLSTACK</h1>
          </span>

          <h1 className={styles.title}>FRONTEND</h1>
        </div>
        <AboutText />
        <p
          className={styles.typingEffect}
        >{`<> Solucionando la vida de manera digital. </>`}</p>
      </div>
      <div className={styles.rigth}>
        <img className={styles.img} src="/ilustracion.jpg" alt="Ilustración" />
      </div>
    </div>
  );
};

export default About;
