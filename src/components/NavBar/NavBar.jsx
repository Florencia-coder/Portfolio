import React from "react";
import styles from "./NavBar.module.css";

const SECTIONS = [
  { id: "about", label: "Sobre mí" },
  { id: "trajectory", label: "Trayectoria" },
  { id: "technologies", label: "Tecnologías" },
  { id: "contact", label: "Contacto" },
];

const NavBar = ({ activeSection }) => (
  <nav className={styles.nav}>
    <ul>
      {SECTIONS.map(({ id, label }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className={activeSection === id ? styles.active : ""}
          >
            {label}
          </a>
          {id !== "contact" && <div className={styles.separator}></div>}
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
