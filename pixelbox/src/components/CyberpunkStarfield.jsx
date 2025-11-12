import { useEffect, useRef } from "react";

export default function CyberpunkStarfield() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = [];
    const numStars = 220;
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * canvas.width,
        s: Math.random() * 1.5 + 0.5,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.z -= 1.2;
        if (star.z <= 1) {
          star.x = Math.random() * canvas.width - canvas.width / 2;
          star.y = Math.random() * canvas.height - canvas.height / 2;
          star.z = canvas.width;
        }

        const k = 128 / star.z;
        const sx = star.x * k + canvas.width / 2;
        const sy = star.y * k + canvas.height / 2;
        const size = Math.max(0.6, (1 - star.z / canvas.width) * star.s * 2);
        const isPink = i % 2 === 0;
        ctx.fillStyle = isPink ? "rgba(255,0,127,0.75)" : "rgba(0,255,224,0.75)";
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={ref} className="cyberpunk-starfield" />;
}
