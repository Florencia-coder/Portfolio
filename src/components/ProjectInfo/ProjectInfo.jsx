import { FormattedMessage, useIntl } from "react-intl";
import RedirectButton from "../../atoms/Button/RedirectButton";
import ImageCarrousel from "../ImageCarrousel/ImageCarrousel";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import TechSlider from "../TechSlider/TechSlider";
import styles from "./projectInfo.module.css";

const ProjectInfo = ({ project }) => {
  const intl = useIntl();
  const {
    images,
    titleId,
    descriptionId,
    categoryId,
    technologies,
    typeOfProject,
    startDate,
    finalDate,
    isResponsiveId,
    link,
    repositoryLink,
  } = project;

  const title = intl.formatMessage({ id: titleId });
  const category = intl.formatMessage({ id: categoryId });
  const projectTitle = intl.formatMessage({ id: "app.projects.title" });
  const isResponsive = intl.formatMessage({ id: isResponsiveId });

  return (
    <div className={styles.container}>
      <ImageCarrousel images={images} />
      <div className={styles.section}>
        <h2 className={styles.title}>
          {projectTitle} {title}
        </h2>
        <TechSlider technologies={technologies} />
        <ProjectDetails
          category={category}
          typeOfProject={typeOfProject}
          startDate={startDate}
          finalDate={finalDate}
          isResponsive={isResponsive}
        />
        <p className={styles.description}>
          <FormattedMessage id={descriptionId} />
        </p>
        <div className={styles.buttonContainer}>
          <RedirectButton
            title={<FormattedMessage id="app.projects.viewProject" />}
            disabled={!Boolean(link)}
            link={link}
          />
          <RedirectButton
            title={<FormattedMessage id="app.projects.viewRepo" />}
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
