import React from "react";
import styles from "./redirectButton.module.css";

const RedirectButton = ({ title, link, disabled, variant = "primary" }) => {
  return (
    <button
      className={`${styles.button} ${
        variant === "secondary" ? styles.secondary : styles.primary
      } ${disabled ? styles.buttonDisabled : ""}`}
      disabled={disabled}
    >
      <a href={link || "#"} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </button>
  );
};

export default RedirectButton;
