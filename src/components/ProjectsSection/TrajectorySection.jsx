import React, { useRef } from "react";
import useResponsiveScroll from "../../hooks/useResponsiveScroll";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectsData } from "./ProjectsData";
import styles from "./trajectorySection.module.css";

const ProjectsSection = () => {
  const scrollContainer = useRef(null);
  const scrollAmount = useResponsiveScroll();

  const scroll = (direction) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.projectsWrapper}>
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={() => scroll("left")}
      >
        ‹
      </button>

      <div className={styles.projectsContainer} ref={scrollContainer}>
        {ProjectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Flecha derecha */}
      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={() => scroll("right")}
      >
        ›
      </button>
    </div>
  );
};

export default ProjectsSection;
