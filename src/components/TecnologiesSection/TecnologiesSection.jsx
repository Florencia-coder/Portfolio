import { technologies } from "./technologiesData";
import TechnologiesRow from "../TechnologiesRow/TechnologiesRow";
import styles from "./tecnologiesSection.module.css";

const TecnologiesSection = () => {
  return (
    <section className={styles.container} id="technologies">
      {technologies.map(({ category, items }) => (
        <TechnologiesRow key={category} category={category} items={items} />
      ))}
    </section>
  );
};

export default TecnologiesSection;
