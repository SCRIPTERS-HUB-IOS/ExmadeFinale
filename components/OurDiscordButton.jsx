import React from "react";

export default function OurDiscordButton() {
  return (
    <a
      href="https://discord.gg/skDSzwCScu"
      target="_blank"
      rel="noopener noreferrer"
      className="glass neon-text top-left"
      style={{
        padding: "0.4rem 0.8rem",
        fontSize: "0.9rem",
        border: "1px solid var(--discord-border)",
        backgroundColor: "var(--discord-bg)",
        boxShadow:
          "0 0 10px var(--discord-glow), inset 0 0 5px var(--discord-glow)",
        borderRadius: "6px",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.3rem",
        userSelect: "none",
        textDecoration: "none",
        color: "var(--discord-glow)",
        fontWeight: 700,
      }}
      aria-label="Join Our Discord"
    >
      <svg
        fill="var(--discord-glow)"
        height="20"
        width="20"
        viewBox="0 0 245 240"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M104.4 104.4c-5.7 0-10.3 5-10.3 11.2s4.6 11.2 10.3 11.2c5.7 0 10.3-5 10.3-11.2 0-6.2-4.6-11.2-10.3-11.2zM140.6 104.4c-5.7 0-10.3 5-10.3 11.2s4.6 11.2 10.3 11.2c5.7 0 10.3-5 10.3-11.2 0-6.2-4.6-11.2-10.3-11.2z" />
        <path d="M189.5 20H55.5C31.2 20 12 39.7 12 65.4v109.3c0 25.7 19.2 45.4 43.5 45.4h99.1l-4.7-16.5 11.4 10.7 10.8 9.9 19.1 16.6V65.4c0-25.7-19.2-45.4-43.6-45.4zm-48 153.7s-4.5-5.4-8.3-10.2c16.4-4.7 22.7-15.1 22.7-15.1-5.1 3.4-10 5.9-14.3 7.6-6.2 3.1-12.2 5.2-18 6.4-11.6 2.7-22.2 1.9-31.1-0.2-6-1.3-11.1-3-15.1-5.2-0.7-0.3-1.4-0.5-2.1-0.8-0.1-0.1-0.2-0.1-0.3-0.2-0.2-0.1-0.3-0.2-0.4-0.3-2.2-1.1-3.3-1.8-3.3-1.8s6.1 10.3 22.2 14.9c-3.8 4.8-8.4 10.6-8.4 10.6-27.7-0.9-38.2-19-38.2-19 0-40.1 17.9-72.7 17.9-72.7 17.9-13.4 34.9-13 34.9-13l1.2 1.4c-22.5 6.5-32.9 16.3-32.9 16.3s2.7-1.5 7.2-3.6c13-6 23.3-7.6 27.5-8 0.7-0.1 1.3-0.2 2-0.2 7.5-1 16.1-0.1 25 6 0 0-9.6-9.3-31.3-15.8l1.7-1.9s17-0.4 35 13.1c0 0 17.9 32.6 17.9 72.7 0.2 0-10.6 18.1-38.3 19z" />
      </svg>
      Our Discord
    </a>
  );
}
