import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import ModalComponent from "../ModalComponent/ModalComponent";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${styles.container} ${
        project.isWorkExperience && styles.containerWork
      }`}
    >
      <img className={styles.img} src={project.images[0]} alt={project.title} />
      <div className={styles.content}>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.type}>
            {project.startDate} - {project.finalDate}
          </p>
        </div>
        <p className={styles.type}>ROL: {project.typeOfProject}</p>
        <p className={styles.type}>
          Categoria :
          <span className={styles.category}> {project.category}</span>
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
        setIsOpen={setIsOpen}
        width="90vw"
        height="80vh"
      >
        <ProjectInfo project={project} />
      </ModalComponent>
    </div>
  );
};

export default React.memo(ProjectCard);
