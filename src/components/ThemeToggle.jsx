import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <span className="theme-icon">
        {isDark ? "☀️" : "🌙"}
      </span>
      <span className="tooltip">
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
