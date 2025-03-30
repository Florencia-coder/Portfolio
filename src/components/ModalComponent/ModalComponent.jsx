import Modal from "react-modal";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "./ModalComponent.module.css"; // Importamos el archivo CSS module

Modal.setAppElement("#root");

const ModalComponent = ({
  isOpen,
  setIsOpen,
  children,
  width = "500px",
  height = "300px",
  shouldCloseOnOverlayClick = true,
}) => {
  const onClose = () => setIsOpen(false);
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      onRequestClose={onClose}
      overlayClassName={styles.modalOverlay}
      className={styles.modalWrapper}
    >
      <div className={styles.modalContent} style={{ width, height }}>
        <button
          aria-label="Cerrar modal"
          onClick={onClose}
          className={styles.closeModalBtn}
        >
          <MdOutlineKeyboardArrowDown size="30px" />
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ModalComponent;
