import TerminalBash from "../Terminal/TerminalBash";
import styles from "./TechInfo.module.css";

const TechInfo = ({ currentTech }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        <currentTech.logo size="80px" className={styles.logo} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{`${currentTech.name}.`}</h2>
        <div className={styles.separator} />
        <TerminalBash text={currentTech.description} />
      </div>
    </div>
  );
};

export default TechInfo;
