import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

function AppRoutes() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((t) =>
      t === "dark" ? "neon" :
      t === "neon" ? "retro" :
      t === "retro" ? "especial" :
      "dark"
    );
  };

  return (
    <div className="app-root" data-theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home onToggleTheme={toggleTheme} theme={theme} />} />
          <Route path="/login" element={<Login onToggleTheme={toggleTheme} theme={theme} />} />
          <Route path="/register" element={<Register onToggleTheme={toggleTheme} theme={theme} />} />
          <Route path="/about" element={<About onToggleTheme={toggleTheme} theme={theme} />} />
          <Route path="/dashboard" element={<Dashboard onToggleTheme={toggleTheme} theme={theme} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutes;
