import { useState, useCallback } from "react";

const useMouseMovement = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseMove = useCallback((e) => {
    setOffsetX((window.innerWidth / 2 - e.pageX) / 25);
    setOffsetY((window.innerHeight / 2 - e.pageY) / 25);
  }, []);

  return { offsetX, offsetY, handleMouseMove };
};

export default useMouseMovement;
