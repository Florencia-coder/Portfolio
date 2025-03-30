// src/hooks/useResponsiveScroll.js
import { useState, useEffect } from "react";

const useResponsiveScroll = () => {
  const [scrollAmount, setScrollAmount] = useState(340); // Valor por defecto

  useEffect(() => {
    const updateScrollAmount = () => {
      if (window.innerWidth < 600) {
        setScrollAmount(220); // Ajuste para pantallas pequeñas
      } else if (window.innerWidth < 900) {
        setScrollAmount(280);
      } else {
        setScrollAmount(340); // Ajuste para pantallas grandes
      }
    };

    updateScrollAmount(); // Llamar la función al cargar
    window.addEventListener("resize", updateScrollAmount); // Escuchar cambios

    return () => window.removeEventListener("resize", updateScrollAmount); // Limpiar evento
  }, []);

  return scrollAmount;
};

export default useResponsiveScroll;
