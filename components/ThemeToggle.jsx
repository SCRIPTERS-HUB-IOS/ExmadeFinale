import React, { useEffect, useState } from "react";

const themes = ["glass", "dark"];

export default function ThemeToggle() {
  const [theme, setTheme] = useState("glass");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "glass" ? "dark" : "glass"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="top-right glass neon-text"
      style={{ marginTop: "2.5rem", fontSize: "0.9rem", padding: "0.5rem" }}
      aria-label="Toggle theme"
    >
      Theme: {theme}
    </button>
  );
}
