import Modal from "react-modal";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "./modalComponent.module.css"; // Importamos el archivo CSS module

Modal.setAppElement("#root");

const ModalComponent = ({
  isOpen,
  onClose,
  children,
  width = "500px",
  height = "300px",
  shouldCloseOnOverlayClick = true,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      onRequestClose={onClose}
      overlayClassName={styles.modalOverlay}
      className={styles.modalWrapper}
      shouldFocusAfterRender={false}
    >
      <div className={styles.modalContent} style={{ width, height }}>
        <button
          aria-label="Cerrar modal"
          onClick={onClose}
          className={styles.closeModalBtn}
        >
          <MdOutlineKeyboardArrowDown className={styles.icon} size="30px" />
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ModalComponent;
