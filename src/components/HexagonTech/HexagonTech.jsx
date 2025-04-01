import React from "react";
import Hexagon from "../../atoms/Hexagon/Hexagon";
import PositionedModal from "../positionedModal/PositionedModal";
import TerminalBash from "../TerminalBash/TerminalBash";
import useTechnologyModal from "../../hooks/useTechnologyModal";
import styles from "./hexagonTech.module.css";

const HexagonTech = ({ name, children, descriptionId }) => {
  const { isOpen, closeModal, openModal, position } = useTechnologyModal();
  return (
    <>
      <Hexagon
        key={name}
        isClicked={isOpen}
        onClick={(event) => openModal(event)}
      >
        {children}
        <p className={styles.itemName}>{name}</p>
      </Hexagon>
      <PositionedModal
        isOpen={isOpen}
        closeModal={closeModal}
        position={position}
      >
        <TerminalBash name={name} descriptionId={descriptionId} />
      </PositionedModal>
    </>
  );
};

export default HexagonTech;
