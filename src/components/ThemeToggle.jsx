import React, { useEffect, useState } from "react";
import SunIcon from "../assets/icons/Sun.svg"; 
import MoonIcon from "../assets/icons/Moon.svg";
import SystemIcon from "../assets/icons/System.svg";

const THEMES = ["Light", "Dark", "System"];

const ThemeToggle = () => {
  const [themePreference, setThemePreference] = useState("system");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const themesMenu = document.getElementById("themes-menu");

    const getThemePreference = () => {
      if (typeof localStorage !== "undefined") {
        return localStorage.getItem("theme") ?? "system";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };

    const updateIcon = (themePreference) => {
      document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
        element.style.scale = element.id === themePreference ? "1" : "0";
      });
    };

    const updateTheme = () => {
      const themePreference = getThemePreference();
      const isDark =
        themePreference === "dark" ||
        (themePreference === "system" && matchMedia.matches);

      updateIcon(themePreference);
      document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    };

    updateTheme();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        matchMedia.removeEventListener("change", updateTheme);
      } else {
        matchMedia.addEventListener("change", updateTheme);
        updateTheme();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    document.addEventListener("click", () => themesMenu.classList.remove("open"));

    document.getElementById("theme-toggle-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      setIsMenuOpen(!isMenuOpen);
    });

    document.querySelectorAll(".themes-menu-option").forEach((element) => {
      element.addEventListener("click", (e) => {
        const newTheme = e.target.innerText.toLowerCase().trim();
        localStorage.setItem("theme", newTheme);
        setThemePreference(newTheme);
        updateTheme();
      });
    });

    return () => {
      matchMedia.removeEventListener("change", updateTheme);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative ml-1 mr-1">
      <button
        id="theme-toggle-btn"
        className="appearance-none border-none flex hover:scale-125 transition"
      >
        <span className="sr-only">Elige el tema</span>
        <img src={SystemIcon} id="system" className="theme-toggle-icon absolute size-5 transition-all" />
        <img src={SunIcon} id="light" className="theme-toggle-icon size-5 transition-all" />
        <img src={MoonIcon} id="dark" className="theme-toggle-icon absolute size-5 transition-all" />
      </button>
      <div
        id="themes-menu"
        className={`absolute ${isMenuOpen ? "inline" : "hidden"} scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md`}
      >
        <ul>
          {THEMES.map((theme) => (
            <li
              key={theme}
              className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
            >
              {theme}
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        #themes-menu.open {
          display: inline;
          animation: scale-up-center 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }

        @keyframes scale-up-center {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ThemeToggle;
