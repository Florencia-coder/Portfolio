import React from "react";
import useActiveSection from "../../hooks/useActiveSection";
import NavBar from "../NavBar/NavBar";
import styles from "./header.module.css";

const Header = () => {
  const activeSection = useActiveSection();

  return (
    <header className={styles.header}>
      <NavBar activeSection={activeSection} />
    </header>
  );
};

export default Header;
