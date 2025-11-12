import RainCanvas from "../components/RainCanvas";
import "../styles/about.css";

function About() {
  return (
    <main className="about-layout">
      <div className="about-bg" aria-hidden="true" />
      <div className="lightning-layer" aria-hidden="true">
        <span className="flash" />
      </div>
      <RainCanvas />

      <header className="about-header">
        <h1 className="about-title">PixelBox Games</h1>
        <p className="about-sub">
          Onde cada partida é uma história e cada gamer faz parte da lenda.
        </p>
      </header>

      <section className="about-grid">
        <div className="about-card">
          <h2>🎮 Comunidade</h2>
          <p>
            Junte-se a milhares de jogadores, compartilhe conquistas e descubra
            novos amigos para jogar.
          </p>
        </div>

        <div className="about-card">
          <h2>🏆 Torneios</h2>
          <p>
            Competições semanais, rankings globais e prêmios exclusivos para os
            melhores jogadores.
          </p>
        </div>

        <div className="about-card">
          <h2>🕹️ Nostalgia</h2>
          <p>
            Reviva clássicos, explore retro games e sinta a magia dos arcades
            direto no navegador.
          </p>
        </div>
      </section>

      <section className="about-ctas">
        <a className="btn-start" href="/register">Press Start</a>
        <a className="btn-outline" href="/games">Ver Jogos</a>
      </section>
    </main>
  );
}

export default About;
