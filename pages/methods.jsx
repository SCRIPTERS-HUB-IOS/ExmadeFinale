import React from "react";

const methods = [
  { name: "Splunk", link: "https://app.splunk.gg/u/exmadeGG" },
  { name: "Injuries", link: "https://www.logged.tg/auth/exmade" },
  { name: "Cookie Bypasser", link: "https://app.splunk.gg/u/exmadeGG" },
  { name: "Hyperlink Gen", link: "https://dsprs.vercel.app/hyperlink" },
];

export default function Methods() {
  return (
    <>
      <div className="center-screen column" style={{ gap: "1.8rem", maxWidth: 350 }}>
        <h1 className="neon-text" style={{ fontSize: "2rem", marginBottom: "2rem" }}>
          Methods
        </h1>
        {methods.map(({ name, link }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button"
            style={{ width: "100%", textAlign: "center", padding: "1rem 0" }}
          >
            {name}
          </a>
        ))}
      </div>
    </>
  );
}
