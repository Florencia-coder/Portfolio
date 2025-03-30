import React from "react";
import useActiveSection from "../../hooks/useActiveSection";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.css";

const Header = () => {
  const sections = Array.from(document.querySelectorAll("section"));
  const activeSection = useActiveSection(sections);

  return (
    <header className={styles.header}>
      <NavBar activeSection={activeSection} />
    </header>
  );
};

export default Header;
