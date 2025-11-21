import { useEffect, useRef } from "react";

export default function DarkVeilBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animated gradient orbs
    const animate = () => {
      time += 0.005;

      // Clear canvas
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create multiple animated gradient orbs
      const orbs = [
        {
          x: canvas.width * (0.5 + Math.sin(time * 0.5) * 0.3),
          y: canvas.height * (0.3 + Math.cos(time * 0.7) * 0.2),
          radius: 450,
          color: "rgba(147, 51, 234, 0.35)", // purple
        },
        {
          x: canvas.width * (0.7 + Math.cos(time * 0.6) * 0.2),
          y: canvas.height * (0.6 + Math.sin(time * 0.4) * 0.25),
          radius: 500,
          color: "rgba(168, 85, 247, 0.28)", // lighter purple
        },
        {
          x: canvas.width * (0.3 + Math.sin(time * 0.4) * 0.25),
          y: canvas.height * (0.7 + Math.cos(time * 0.5) * 0.2),
          radius: 400,
          color: "rgba(126, 34, 206, 0.25)", // darker purple
        },
      ];

      // Draw orbs with radial gradients
      orbs.forEach((orb) => {
        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius,
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ filter: "blur(60px)" }}
    />
  );
}
