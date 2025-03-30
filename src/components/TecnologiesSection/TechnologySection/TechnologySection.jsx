import useTechnologyModal from "../../../hooks/useTechnologyModal";
import ModalComponent from "../../ModalComponent/ModalComponent";
import Hexagon from "../../Hexagon/Hexagon";
import TechInfo from "../../TechInfo/TechInfo";
import styles from "./TechnologySection.module.css";

const TechnologySection = ({ category, items }) => {
  const { isOpen, setIsOpen, currentTech, modalSize, openModal } =
    useTechnologyModal();
  return (
    <div className={styles.container}>
      <div className={styles.hexagonContainer}>
        <Hexagon>
          {category}
          <p className={styles.infoName}>
            Clickea sobre la tecnología para más Información
          </p>
        </Hexagon>
        {items.map((item) => (
          <Hexagon key={item.name} onClick={() => openModal(item)}>
            <item.logo
              className={item.name == "REACT NATIVE" ? "icon-rn" : "item-icon"}
              size="60px"
            />
            <p className={styles.itemName}>{item.name}</p>
          </Hexagon>
        ))}
      </div>
      <ModalComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        width={modalSize.width}
        height={modalSize.height}
      >
        <TechInfo currentTech={currentTech} />
      </ModalComponent>
    </div>
  );
};

export default TechnologySection;
