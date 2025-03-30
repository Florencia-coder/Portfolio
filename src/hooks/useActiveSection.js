// src/hooks/useActiveSection.js
import { useState, useEffect } from "react";

const useActiveSection = (sections, threshold = 0.5) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { threshold }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sections, threshold]);

  return activeSection;
};

export default useActiveSection;
