import { useState } from "react";
import "../styles/register.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    birthdate: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValid =
    formData.username &&
    formData.email &&
    formData.birthdate &&
    formData.password;

  return (
    <main className="register-layout">
      <div className="register-overlay" />

      <section className="register-card" aria-labelledby="register-title">
        <div className="register-card-inner">
          <h1 id="register-title" className="register-title">Criar Conta</h1>

          <form className="register-form" action="/api/register" method="post">
            <div className="form-row">
              <label htmlFor="username">Usuário</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                placeholder="Seu usuário"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="voce@exemplo.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="birthdate">Data de Nascimento</label>
              <input
                id="birthdate"
                name="birthdate"
                type="date"
                required
                value={formData.birthdate}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary" disabled={!isValid}>
                Registrar
              </button>
              <a className="btn-link" href="/login">Já tenho conta</a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Register;
