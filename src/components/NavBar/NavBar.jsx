import React from "react";
import styles from "./navBar.module.css";
import { FormattedMessage } from "react-intl";

const SECTIONS = [
  { id: "about", label: <FormattedMessage id={`app.nav.about`} /> },
  { id: "trajectory", label: <FormattedMessage id={`app.nav.trajectory`} /> },
  {
    id: "technologies",
    label: <FormattedMessage id={`app.nav.technologies`} />,
  },
  { id: "contact", label: <FormattedMessage id={`app.nav.contact`} /> },
];

const NavBar = ({ activeSection }) => {
  return (
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
};

export default NavBar;
