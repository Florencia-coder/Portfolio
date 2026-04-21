import React from "react";
import styles from "./About.module.css";
import Avatar3D from "../About/Avatar3D";

const About = () => {
  return (
    <div className={styles.content}>
      {/* Columna Izquierda */}
      <div className={styles.left}>
        {/* <div className={styles.circle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="none"
            stroke="#e63946"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className={styles.icon}
          >
            <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
            <path d="M2 20h20l-2-4H4l-2 4z" /> */}
        <Avatar3D />
        {/* </svg>
        </div> */}
      </div>

      {/* Columna Derecha */}
      <div className={styles.right}>
        <h2 className={styles.title}>Sobre mí</h2>
        <p className={styles.text}>
          Soy <span className={styles.highlight}>desarrolladora frontend</span> con pasión por el
          <span className={styles.highlight}> diseño moderno</span> y las
          <span className={styles.highlight}> experiencias interactivas</span>.
          Me motiva aprender nuevas tecnologías y crear interfaces que sean
          <span className={styles.highlight}> intuitivas y atractivas</span>.
        </p>
        <a href="/cv.pdf" download className={styles.cvButton}>
          Descargar CV
        </a>
      </div>
    </div>
  );
};

export default About;
