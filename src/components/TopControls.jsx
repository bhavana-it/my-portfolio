import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const TopControls = ({ isDarkMode, toggleTheme }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch {
      // ignore
    }
  };

  return (
    <div className="top-controls" aria-label="Page controls">
      <button
        type="button"
        className="top-control-btn"
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
      >
        {isFullscreen ? "⤢" : "⛶"}
      </button>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} variant="inline" />
    </div>
  );
};

export default TopControls;
