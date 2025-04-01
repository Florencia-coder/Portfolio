import { FormattedMessage } from "react-intl";
import Hexagon from "../../atoms/Hexagon/Hexagon";
import HexagonTech from "../HexagonTech/HexagonTech";
import styles from "./technologiesRow.module.css";

const TechnologiesRow = ({ category, items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.hexagonContainer}>
        <Hexagon>
          {category}
          <p className={styles.infoName}>
            <FormattedMessage id="app.tech.clickInfo" />
          </p>
        </Hexagon>
        {items.map((item) => (
          <HexagonTech
            name={item.name}
            descriptionId={item.descriptionId}
            key={item.name}
          >
            <item.logo
              className={name == "REACT NATIVE" ? "icon-rn" : "item-icon"}
              size="60px"
            />
          </HexagonTech>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesRow;
