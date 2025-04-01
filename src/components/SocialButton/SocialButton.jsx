import React from "react";
import styles from "./socialButton.module.css";

const SocialButton = ({ href, icon: Icon, size }) => (
  <a
    className={styles.container}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className={styles.logo} size={size} />
  </a>
);

export default SocialButton;
