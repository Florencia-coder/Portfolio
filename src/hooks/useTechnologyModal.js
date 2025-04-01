import { useState, useCallback } from "react";

const useTechnologyModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModal = useCallback((event) => {
    // Cerrar cualquier modal abierto antes de abrir uno nuevo
    setIsOpen(false);
    
    // Pequeño delay para asegurar que el cierre se complete
    setTimeout(() => {
      setIsOpen(true);
      setPosition({ x: event.clientX, y: event.clientY });
    }, 50);
  }, []);

  return { isOpen, closeModal, openModal, position };
};

export default useTechnologyModal;
