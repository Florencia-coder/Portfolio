import React from "react";
import { TbPointFilled } from "react-icons/tb";
import styles from "./TerminalBash.module.css";

const TerminalBash = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <TbPointFilled className={styles.icon1} />
        <TbPointFilled className={styles.icon2} />
        <TbPointFilled className={styles.icon3} />
      </div>
      <div>
        <p className={styles.description}>$ {text}</p>
      </div>
    </div>
  );
};

export default TerminalBash;
