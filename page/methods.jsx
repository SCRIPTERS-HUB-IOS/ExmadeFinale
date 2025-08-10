import React from "react";
import NeonParticleBackground from "../components/NeonParticleBackground";
import OurDiscordButton from "../components/OurDiscordButton";
import BrightnessSlider from "../components/BrightnessSlider";
import ThemeToggle from "../components/ThemeToggle";
import NeonButton from "../components/NeonButton";
import { useRouter } from "next/router";

export default function Methods() {
  const router = useRouter();

  const links = [
    { name: "Splunk", url: "https://app.splunk.gg/u/exmadeGG" },
    { name: "Injuries", url: "https://www.logged.tg/auth/exmade" },
    { name: "Cookie Bypasser", url: "https://app.splunk.gg/u/exmadeGG" },
    { name: "Hyperlink Gen", url: "https://dsprs.vercel.app/hyperlink" },
  ];

  return (
    <>
      <NeonParticleBackground />
      <OurDiscordButton />
      <BrightnessSlider />
      <ThemeToggle />

      <div
        className="center-screen"
        style={{ flexDirection: "column", gap: "2rem", padding: "1rem" }}
      >
        <div
          className="neon-text"
          style={{ fontSize: "2.2rem", marginBottom: "2rem", userSelect: "none" }}
        >
          Methods
        </div>

        <div className="link-buttons" aria-label="Methods Links">
          {links.map(({ name, url }) => (
            <NeonButton
              key={name}
              onClick={() => window.open(url, "_blank", "noopener")}
              style={{ width: "100%", textAlign: "center" }}
              aria-label={`Open ${name}`}
            >
              {name}
            </NeonButton>
          ))}
        </div>

        <NeonButton
          onClick={() => router.push("/")}
          style={{ marginTop: "3rem", width: "180px" }}
          aria-label="Go back to Home"
        >
          Back
        </NeonButton>
      </div>
    </>
  );
}
