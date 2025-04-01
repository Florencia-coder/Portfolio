import React from "react";
import styles from "./titleMovement.module.css";

const TitleMovement = ({ offsetX, offsetY, title, bottomTitle = "" }) => {
  const titleArray = title.split(" ");
  const firstWord = titleArray[0];
  const secondWord = titleArray[1];
  return (
    <div
      className={styles.containerTitle}
      style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
    >
      <span className={styles.title}>
        {firstWord === "FULLSTACK" ? (
          <>
            <h1 className={styles.titleRol}>{firstWord}</h1> {secondWord}
          </>
        ) : (
          <>
            {firstWord} <h1 className={styles.titleRol}> {secondWord}</h1>
          </>
        )}
      </span>

      <h1 className={styles.title}>{bottomTitle}</h1>
    </div>
  );
};

export default TitleMovement;
