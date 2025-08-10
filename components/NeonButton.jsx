import React from "react";

export default function NeonButton({ children, onClick, style, className }) {
  return (
    <button
      onClick={onClick}
      style={{ ...style, userSelect: "none" }}
      className={`glass neon-text ${className || ""}`}
      aria-label={typeof children === "string" ? children : "Neon Button"}
    >
      {children}
    </button>
  );
}
