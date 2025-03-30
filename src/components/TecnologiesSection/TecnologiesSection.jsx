// TecnologiesSection.js
import { technologies } from "./technologiesData";
import TechnologySection from "./TechnologySection/TechnologySection";
import styles from "./TecnologiesSection.module.css";

const TecnologiesSection = () => {
  return (
    <section className={styles.container} id="technologies">
      {technologies.map(({ category, items }) => (
        <TechnologySection key={category} category={category} items={items} />
      ))}
    </section>
  );
};

export default TecnologiesSection;
