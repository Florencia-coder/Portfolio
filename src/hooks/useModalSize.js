import { useState, useEffect } from "react";

const useModalSize = () => {
  const [modalSize, setModalSize] = useState({
    width: "600px",
    height: "500px",
  });

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth <= 480) {
        setModalSize({ width: "300px", height: "350px" });
      } else if (window.innerWidth <= 1024) {
        setModalSize({ width: "400px", height: "300px" });
      } else {
        setModalSize({ width: "600px", height: "500px" });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return modalSize;
};

export default useModalSize;
