import { useState } from "react";
import "../styles/login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValid = formData.email && formData.password;

  return (
    <main className="login-layout">
      <div className="login-overlay" />

      <section className="login-card" aria-labelledby="login-title">
        <div className="login-card-inner">
          <h1 id="login-title" className="login-title">PixelBox</h1>
          <p id="login-subtitle" className="login-subtitle">
            Faça login para continuar
          </p>

          <form className="login-form" action="/api/login" method="post">
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="voce@exemplo.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="password">Senha</label>
              <div className="password-wrap">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                type="button"
                className={`toggle-password ${showPassword ? "is-on" : ""}`}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                onClick={() => setShowPassword(v => !v)}
                >
                {showPassword ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
                            fill="none" stroke="#fff" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="3" fill="#fff"/>
                    <line x1="4" y1="4" x2="20" y2="20"
                            stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
                            fill="none" stroke="#fff" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="3" fill="#fff"/>
                    </svg>
                )}
                </button>

              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary" disabled={!isValid}>
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Entrar</span>
              </button>
              <a className="btn-link" href="/register">Criar conta</a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
