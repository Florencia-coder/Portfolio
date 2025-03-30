import { useState } from "react";
import useModalSize from "./useModalSize";

const useTechnologyModal = () => {
  const modalSize = useModalSize();
  const [isOpen, setIsOpen] = useState(false);
  const [currentTech, setCurrentTech] = useState(null);

  const openModal = (tech) => {
    setIsOpen(true);
    setCurrentTech(tech);
  };

  return { isOpen, setIsOpen, currentTech, openModal, modalSize };
};

export default useTechnologyModal;
