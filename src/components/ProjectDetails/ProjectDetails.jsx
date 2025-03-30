import React from "react";
import styles from "./ProjectDetails.module.css";

const ProjectDetails = ({
  category,
  startDate,
  finalDate,
  typeOfProject,
  isResponsive,
}) => {
  const details = [
    { label: "Categoria:", value: category },
    { label: "Tiempo dedicado:", value: `${startDate} - ${finalDate}` },
    { label: "Rol asignado:", value: typeOfProject },
    { label: "Proyecto responsivo:", value: isResponsive ? "Si" : "No" },
  ];

  return (
    <div className={styles.container}>
      {details.map(({ label, value }, index) => (
        <p className={styles.rowContainer} key={index}>
          <span className={styles.label}>{label}</span>
          <span className={styles.value}>{value}</span>
        </p>
      ))}
    </div>
  );
};

export default ProjectDetails;
