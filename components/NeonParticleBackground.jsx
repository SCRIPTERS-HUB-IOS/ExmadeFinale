import React, { useEffect, useRef } from "react";

const PARTICLE_COUNT = 60;
const PARTICLE_COLOR = "rgba(255, 0, 0, 0.7)";

class Particle {
  constructor(canvasWidth, canvasHeight) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.radius = Math.random() * 1.5 + 0.5;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x <= 0 || this.x >= this.canvasWidth) this.vx = -this.vx;
    if (this.y <= 0 || this.y >= this.canvasHeight) this.vy = -this.vy;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.shadowColor = PARTICLE_COLOR;
    ctx.shadowBlur = 8;
    ctx.fillStyle = PARTICLE_COLOR;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function NeonParticleBackground() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();

    window.addEventListener("resize", resize);

    // Initialize particles
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
      new Particle(canvas.width, canvas.height)
    );

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particlesRef.current.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      // Draw lines between close particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          let p1 = particlesRef.current[i];
          let p2 = particlesRef.current[j];
          let dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,0,0,${1 - dist / 150})`;
            ctx.lineWidth = 1;
            ctx.shadowColor = "rgba(255, 0, 0, 0.5)";
            ctx.shadowBlur = 4;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="particle-canvas" ref={canvasRef} />;
}
