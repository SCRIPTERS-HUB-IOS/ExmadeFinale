import React, { useState, useEffect } from "react";

export default function BrightnessSlider() {
  const [brightness, setBrightness] = useState(1);

  useEffect(() => {
    document.documentElement.style.filter = `brightness(${brightness})`;
  }, [brightness]);

  return (
    <input
      type="range"
      min="0.5"
      max="1.5"
      step="0.01"
      value={brightness}
      aria-label="Brightness slider"
      onChange={(e) => setBrightness(e.target.value)}
      className="top-right"
      style={{
        width: "150px",
        cursor: "pointer",
        accentColor: "red",
        backgroundColor: "transparent",
        marginTop: 0,
      }}
    />
  );
}
