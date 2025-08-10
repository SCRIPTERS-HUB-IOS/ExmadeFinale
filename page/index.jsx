import React from "react";
import { useRouter } from "next/router";
import NeonParticleBackground from "../components/NeonParticleBackground";
import OurDiscordButton from "../components/OurDiscordButton";
import BrightnessSlider from "../components/BrightnessSlider";
import ThemeToggle from "../components/ThemeToggle";
import NeonButton from "../components/NeonButton";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <NeonParticleBackground />
      <OurDiscordButton />
      <BrightnessSlider />
      <ThemeToggle />

      <div
        className="center-screen"
        style={{ flexDirection: "column", gap: "3rem" }}
      >
        <div
          className="neon-text"
          style={{ fontSize: "2.5rem", userSelect: "none", marginBottom: "1rem" }}
        >
          exmadeW
        </div>

        <NeonButton
          onClick={() => router.push("/methods")}
          style={{ fontSize: "2.2rem", padding: "1.5rem 3rem", width: "220px", textAlign: "center" }}
          aria-label="Go to Methods"
        >
          Methods
        </NeonButton>
      </div>
    </>
  );
}
