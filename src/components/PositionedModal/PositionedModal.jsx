import { useEffect } from "react";
import styles from "./positionedModal.module.css";

const MODAL_DIMENSIONS = {
  width: 600,
  height: 150,
};

const PositionedModal = ({ isOpen, closeModal, position, children }) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.modal}`)) {
        closeModal();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const padding = 20;
  let x = position.x;
  let y = position.y;

  // Obtener dimensiones de la ventana
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Ajustar posición horizontal si se sale de la pantalla
  if (x + MODAL_DIMENSIONS.width > windowWidth - padding) {
    x = x - MODAL_DIMENSIONS.width;
  }

  // Ajustar posición vertical si se sale de la pantalla
  if (y + MODAL_DIMENSIONS.height > windowHeight - padding) {
    y = y - MODAL_DIMENSIONS.height;
  }

  // Asegurar que no se salga por la izquierda o arriba
  x = Math.max(padding, Math.min(x, windowWidth - MODAL_DIMENSIONS.width - padding));
  y = Math.max(padding, Math.min(y, windowHeight - MODAL_DIMENSIONS.height - padding));

  return (
    <div
      className={styles.modal}
      onMouseLeave={closeModal}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${MODAL_DIMENSIONS.width}px`,
        minHeight: `${MODAL_DIMENSIONS.height}px`,
      }}
    >
      {children}
    </div>
  );
};

export default PositionedModal;
