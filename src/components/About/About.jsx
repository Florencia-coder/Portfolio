import React from "react";
import { useIntl, FormattedMessage } from "react-intl";
import useMouseMovement from "../../hooks/useMouseMovement";
import AboutText from "../AboutText/AboutText";
import styles from "./about.module.css";
import TitleMovement from "../TitleMovement/TitleMovement";

const About = () => {
  const { handleMouseMove, offsetX, offsetY } = useMouseMovement();
  const intl = useIntl();
  const title = intl.formatMessage({ id: "app.about.title" });
  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      <article className={styles.left}>
        <TitleMovement
          offsetX={offsetX}
          offsetY={offsetY}
          title={title}
          bottomTitle="FRONTEND"
        />
        <AboutText />
        <p className={styles.typingEffect}>
          {<FormattedMessage id="app.about.typingText" />}
        </p>
      </article>
      <article className={styles.rigth} />
    </div>
  );
};

export default About;
