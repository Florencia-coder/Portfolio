import React from "react";
import { useIntl } from "react-intl";
import styles from "./projectDetails.module.css";

const ProjectDetails = ({
  category,
  startDate,
  finalDate,
  typeOfProject,
  isResponsive,
}) => {
  const intl = useIntl();
  const details = [
    {
      label: intl.formatMessage({ id: "app.projects.category" }),
      value: category,
    },
    {
      label: intl.formatMessage({ id: "app.projects.time.spend" }),
      value: `${startDate} - ${finalDate}`,
    },
    {
      label: intl.formatMessage({ id: "app.projects.rol.assigned" }),
      value: typeOfProject,
    },
    {
      label: intl.formatMessage({ id: "app.projects.title.responsive" }),
      value: isResponsive,
    },
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
