import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/home.css";

function Home() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15; 
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setOffset({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="home-container"
      style={{
        backgroundPosition: `${50 + offset.x}% ${50 + offset.y}%`
      }}
    >
      <motion.h1
        className="logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        PixelBox
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Somewhere ahead lies the truth...
      </motion.p>

      <motion.div
        className="buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a href="/login" className="btn">Login</a>
        <a href="/register" className="btn">Cadastro</a>
        <a href="/hub" className="btn">Sobre</a>
      </motion.div>
    </div>
  );
}

export default Home;
