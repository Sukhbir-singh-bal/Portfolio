import React, { useEffect , useState } from "react";
const Header = () => {
    const navItems = [
        {
          title: "Experience",
          label: "Experience",
          url: "/#Experience",
        },
        {
          title: "Projects",
          label: "Projects",
          url: "/#Projects",
        },
        {
          title: "About Me",
          label: "AboutME",
          url: "/#AboutME",
        },
        {
          title: "Resume",
          label: "Resume",
          url: "/resume/Resume.pdf",
        }
      ];
      
      const [activeSection, setActiveSection] = useState("");
      
        useEffect(() => {
          const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const navLinks = document.querySelectorAll("nav a");
      
            const callback = (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  setActiveSection(entry.target.id);
                }
              });
            };
      
            const observer = new IntersectionObserver(callback, {
              root: null,
              rootMargin: "0px",
              threshold: 0.3,
            });
      
            sections.forEach((section) => observer.observe(section));
            return () => observer.disconnect();
          };
      
          handleScroll();
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        }, []);
        const handleNavClick = (id) => {
          const targetElement = document.getElementById(id);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        };
  return (
    <header className="fixed top-0 z-10 mx-auto py-2 flex w-full items-center backdrop-blur-sm justify-center">
      <nav className="flex items-center justify-center rounded-full px-3 text-sm font-medium text-gray-600 dark:text-gray-200">
        {navItems.map((link) => (
          <a
            key={link.label}
            onClick={(e) => {
              link.label !== "Resume" && e.preventDefault();
              handleNavClick(link.label);
            }}
            className={`relative block px-2 py-2 transition text-base ${
                activeSection === link.label ? "text-blue-500" : "text-gray-300"
              } hover:text-blue-500 dark:hover:text-blue-400`}
            aria-label={link.label}
            href={link.url}
          >
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
