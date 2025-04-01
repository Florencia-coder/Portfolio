import React from "react";
import { TbPointFilled } from "react-icons/tb";
import styles from "./TerminalBash.module.css";
import { FormattedMessage } from "react-intl";

const TerminalBash = ({ name, descriptionId }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon1}>●</div>
        <div className={styles.icon2}>●</div>
        <div className={styles.icon3}>●</div>
      </div>
      <div className={styles.containerText}>
        <span className={styles.detailName}>
          <p className={styles.name}>
            Desarrolladora FullStack@{name.toUpperCase()}:
          </p>
          <p className={styles.icon}> ~</p>
        </span>
        <div className={styles.description}>
          <FormattedMessage id={descriptionId} />
          <span className={styles.cursor}></span>
        </div>
      </div>
    </div>
  );
};

export default TerminalBash;
