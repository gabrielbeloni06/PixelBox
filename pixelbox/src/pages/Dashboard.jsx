import "../styles/dashboard.css";
import { NavLink } from "react-router-dom";
import PixelRain from "../components/PixelRain";
import CyberpunkStarfield from "../components/CyberpunkStarfield";

export default function Dashboard({ onToggleTheme, theme }) {
  const user = {
    name: "ArcMage",
    level: 12,
    role: "Mage",
    avatar:
      "https://api.dicebear.com/9.x/pixel-art/svg?seed=ArcMage&backgroundColor=transparent",
  };

  const lastGame = {
    title: "Dungeon Neon",
    cover:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop",
    playedAt: "Ontem",
    timePlayed: "1h 42m",
  };

  const activities = [
    { type: "achievement", text: "Conquista desbloqueada: Shadow Runner", xp: 50 },
    { type: "friend", text: "Kael entrou em Neon Arena", xp: 10 },
    { type: "news", text: "Patch 1.2.4 — balanceamento de classes", xp: 0 },
  ];

  const recommendations = [
    { title: "Pixel Rift", cover: "https://picsum.photos/300/200?1", tag: "Rogue-like" },
    { title: "Cyber Lanes", cover: "https://picsum.photos/300/200?2", tag: "Race" },
    { title: "Arc Forge", cover: "https://picsum.photos/300/200?3", tag: "Craft" },
  ];

  const isCyberpunk = theme === "especial";

  return (
    <div className="dashboard-wrapper">
      {isCyberpunk ? <CyberpunkStarfield /> : <PixelRain />}
      <main className="dashboard">
        <aside className="sidebar">
          <div className="logo">
            <span className="logo-mark">👾</span>
            <span className="logo-text">PixelBox</span>
          </div>

          <nav className="nav">
            <NavLink to="/dashboard" className="nav-item">🏠 Home</NavLink>
            <NavLink to="/games" className="nav-item">🕹️ Games</NavLink>
            <NavLink to="/settings" className="nav-item">⚙️ Configurações</NavLink>
            <NavLink to="/about" className="nav-item">ℹ️ Sobre</NavLink>
            <NavLink to="/ranking" className="nav-item">🏆 Ranking</NavLink>
            <NavLink to="/friends" className="nav-item">👥 Amigos</NavLink>
            <NavLink to="/news" className="nav-item">📰 Notícias</NavLink>
            <NavLink to="/events" className="nav-item">🎉 Eventos</NavLink>
          </nav>

          <div className="sidebar-bottom">
            <button className="theme-toggle" onClick={onToggleTheme}>
              Tema: {theme}
            </button>
          </div>
        </aside>
        <section className="content">
          <header className="header">
            <div className="user">
              <img className="avatar" src={user.avatar} alt="avatar" />
              <div className="user-meta">
                <h1 className="user-name">{user.name}</h1>
                <p className="user-level">
                  Nível {user.level} — {user.role}
                </p>
              </div>
            </div>
            <div className="header-actions">
              <button className="btn-secondary">Editar perfil</button>
              <button className="btn-secondary">Configurações rápidas</button>
            </div>
          </header>
          <div className="feed-grid">
            <article className="card card-wide">
              <div className="card-cover">
                <img src={lastGame.cover} alt={lastGame.title} />
              </div>
              <div className="card-body">
                <h2 className="card-title">Último game jogado</h2>
                <p className="card-sub">
                  {lastGame.title} • {lastGame.playedAt} • {lastGame.timePlayed}
                </p>
                <div className="card-actions">
                  <button className="btn-primary">Jogar novamente</button>
                  <button className="btn-outline">Ver detalhes</button>
                </div>
              </div>
            </article>
            <article className="card">
              <h2 className="card-title">Atividades recentes</h2>
              <ul className="list">
                {activities.map((a, i) => (
                  <li key={i} className={`list-item item-${a.type}`}>
                    <span className="bullet" />
                    <span className="text">{a.text}</span>
                    {a.xp ? <span className="xp">+{a.xp} XP</span> : null}
                  </li>
                ))}
              </ul>
            </article>
            <article className="card">
              <h2 className="card-title">Notificações</h2>
              <div className="notif">
                <div className="badge">+50 XP</div>
                <div className="badge">Novo amigo online</div>
                <div className="badge">Convite para Arena</div>
              </div>
            </article>
            <article className="card card-wide">
              <h2 className="card-title">Recomendações para você</h2>
              <div className="rec-list">
                {recommendations.map((r, i) => (
                  <div key={i} className="rec-item">
                    <img src={r.cover} alt={r.title} />
                    <div className="rec-meta">
                      <h3 className="rec-title">{r.title}</h3>
                      <span className="rec-tag">{r.tag}</span>
                      <button className="btn-primary small">Jogar</button>
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <article className="card">
              <h2 className="card-title">Estatísticas</h2>
              <div className="stats">
                <div className="stat">
                  <span className="label">Horas na semana</span>
                  <span className="value">12.4h</span>
                </div>
                <div className="stat">
                  <span className="label">Conquistas</span>
                  <span className="value">34</span>
                </div>
                <div className="stat">
                  <span className="label">Ranking global</span>
                  <span className="value">#1289</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
