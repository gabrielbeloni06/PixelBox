import { useEffect, useRef } from "react";

const RainCanvas = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const DROP_COUNT = Math.floor(width * 0.25);
    const WIND = 0.6;
    const GRAVITY = 1.2;
    const SPLASH_CHANCE = 0.25;
    const FLOOR_Y = height * 1.92;
    const drops = [];
    const splashes = [];

    for (let i = 0; i < DROP_COUNT; i++) {
      drops.push({
        x: Math.random() * width,
        y: Math.random() * -height,
        len: 8 + Math.random() * 14,
        vx: WIND + Math.random() * 0.4,
        vy: 4 + Math.random() * 3,
        opacity: 0.5 + Math.random() * 0.5,
        thickness: Math.random() * 1.2 + 0.6,
      });
    }
    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];
        d.vy += GRAVITY * 0.02;
        d.x += d.vx;
        d.y += d.vy;
        ctx.strokeStyle = `rgba(60, 60, 60, ${d.opacity})`;
        ctx.lineWidth = d.thickness;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - d.vx * d.len, d.y - d.vy * d.len);
        ctx.stroke();
        if (d.y > FLOOR_Y && Math.random() < SPLASH_CHANCE) {
          const count = 3 + Math.floor(Math.random() * 3);
          for (let s = 0; s < count; s++) {
            splashes.push({
              x: d.x,
              y: FLOOR_Y,
              vx: (Math.random() - 0.5) * 2.4,
              vy: -Math.random() * 2.2 - 0.8,
              life: 20 + Math.random() * 20,
            });
          }
          // reinicia gota acima
          d.x = Math.random() * width;
          d.y = Math.random() * -height;
          d.vx = WIND + Math.random() * 0.4;
          d.vy = 4 + Math.random() * 3;
        }
        if (d.x < -20 || d.x > width + 20 || d.y > height + 40) {
          d.x = Math.random() * width;
          d.y = Math.random() * -height;
          d.vx = WIND + Math.random() * 0.4;
          d.vy = 4 + Math.random() * 3;
        }
      }

      for (let i = splashes.length - 1; i >= 0; i--) {
        const p = splashes[i];
        p.vy += GRAVITY * 0.05;
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1;

        const alpha = Math.max(0, p.life / 30);
        ctx.fillStyle = `rgba(180, 220, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0 || p.y > height) splashes.splice(i, 1);
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="rain-canvas" aria-hidden="true" />;
};

export default RainCanvas;
