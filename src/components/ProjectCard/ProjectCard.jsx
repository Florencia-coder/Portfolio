import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FormattedMessage } from "react-intl";
import ModalComponent from "../ModalComponent/ModalComponent";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import LazyImage from "../LazyImage/LazyImage";
import styles from "./projectCard.module.css";

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${styles.container} ${
        project.isWorkExperience && styles.containerWork
      }`}
    >
      <LazyImage
        src={project.images[0]}
        alt={project.titleId}
        className={`${styles.img} ${
          project.isWorkExperience && styles.imgWork
        }`}
      />
      <div className={styles.content}>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>
            <FormattedMessage id={project.titleId} />
          </h1>
          <p className={styles.type}>
            {project.startDate} - {project.finalDate}
          </p>
        </div>
        <p className={styles.type}>
          <FormattedMessage id="app.projects.role" /> {project.typeOfProject}
        </p>
        <p className={`${styles.type} ${styles.categoryType}`}>
          <FormattedMessage id="app.projects.category" />{" "}
          <span className={styles.category}>
            <FormattedMessage id={project.categoryId} />
          </span>
        </p>
      </div>
      <div
        className={styles.buttonOpen}
        onClick={() => setIsOpen(true)}
        aria-label="Ver más detalles del proyecto"
      >
        <MdArrowOutward size="20" className={styles.btnLogo} />
      </div>
      <ModalComponent
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        width="90vw"
        height="80vh"
      >
        <ProjectInfo project={project} />
      </ModalComponent>
    </div>
  );
};

export default React.memo(ProjectCard);
