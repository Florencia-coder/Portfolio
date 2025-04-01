import { useState, useEffect, useRef } from "react";

const useActiveSection = (threshold = 0.5) => {
  const [activeSection, setActiveSection] = useState("");
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));

    if (!sections.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { threshold }
    );

    sections.forEach((section) => observerRef.current.observe(section));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold]);

  return activeSection;
};

export default useActiveSection;
