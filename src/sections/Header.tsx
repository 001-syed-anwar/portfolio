import { useState, useEffect } from "react";

const sections = ["home", "project", "about", "contact"];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Find the section currently in viewport
      const scrollPosition = window.scrollY + window.innerHeight  // a bit offset for earlier trigger

      let current = activeSection;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = section;
            break;
          }
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Run once on mount in case user reloads mid-page
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="flex justify-center items-center w-full ">
      <div className="fixed top-3 z-10">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`nav-item ${
                activeSection === section
                  ? "text-gray-900 bg-white hover:bg-white/70 hover:text-gray-900"
                  : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
