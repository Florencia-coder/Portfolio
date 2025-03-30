import RedirectButton from "../Button/RedirectButton";
import ImageCarrousel from "../ImageCarrousel/ImageCarrousel";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import TechSlider from "../TechSlider/TechSlider";
import styles from "./ProjectInfo.module.css";

const ProjectInfo = ({ project }) => {
  const {
    images,
    title,
    description,
    category,
    technologies,
    typeOfProject,
    startDate,
    finalDate,
    isResponsive,
    link,
    repositoryLink,
  } = project;

  return (
    <div className={styles.container}>
      <ImageCarrousel images={images} />
      <div className={styles.section}>
        <h2 className={styles.title}>Proyecto {title}</h2>
        <TechSlider technologies={technologies} />
        <ProjectDetails
          category={category}
          typeOfProject={typeOfProject}
          startDate={startDate}
          finalDate={finalDate}
          isResponsive={isResponsive}
        />
        <p className={styles.description}>{description}</p>
        <div className={styles.buttonContainer}>
          <RedirectButton
            title="IR AL PROYECTO"
            disabled={!Boolean(link)}
            link={link}
          />
          <RedirectButton
            title="IR AL REPOSITORIO"
            link={repositoryLink}
            disabled={!Boolean(repositoryLink)}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
