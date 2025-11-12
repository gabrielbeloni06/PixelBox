import { useEffect, useRef } from "react";
const EMOTE = "👾";
const COLORS = ["#ff4d6d", "#00ff99", "#66aaff", "#ffd966", "#b566ff", "#ff8844"];

export default function PixelRain() {
  const ref = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = document.documentElement.scrollHeight); 

    const DROPS = [];
    const COUNT = Math.floor(w * 0.03);

    for (let i = 0; i < COUNT; i++) {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      DROPS.push({
        x: Math.random() * w,
        y: Math.random() * -h,
        vy: 1 + Math.random() * 2.5,
        vx: (Math.random() - 0.5) * 0.3,
        trail: [],
        trailLen: 12 + Math.floor(Math.random() * 8),
        color,
        size: 20 + Math.random() * 10,
      });
    }

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = document.documentElement.scrollHeight;
    };
    window.addEventListener("resize", resize);

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      for (const d of DROPS) {
        d.x += d.vx;
        d.y += d.vy;

        d.trail.unshift({ x: d.x, y: d.y });
        if (d.trail.length > d.trailLen) d.trail.pop();

        for (let i = 0; i < d.trail.length; i++) {
          const t = d.trail[i];
          const alpha = 1 - i / d.trail.length;
          ctx.fillStyle = hexToRgba(d.color, alpha * 0.5);
          ctx.beginPath();
          ctx.arc(t.x, t.y, d.size * 0.15, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.font = `${d.size}px monospace`;
        ctx.fillStyle = d.color;
        ctx.textAlign = "center";
        ctx.fillText(EMOTE, d.x, d.y);

        if (d.y > h * 1.2) {
          d.y = Math.random() * -h * 0.5;
          d.x = Math.random() * w;
          d.vy = 1 + Math.random() * 2.5;
          d.vx = (Math.random() - 0.5) * 0.3;
          d.trail = [];
        }
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas className="pixel-rain" ref={ref} aria-hidden="true" />;
}

function hexToRgba(hex, alpha = 1) {
  const h = hex.replace("#", "");
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
