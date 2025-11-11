import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="logo">PixelBox 🎮</h1>
      <p className="subtitle">Seu arcade retrô digital</p>
      <div className="buttons">
        <a href="/login" className="btn">Login</a>
        <a href="/register" className="btn">Cadastro</a>
        <a href="/hub" className="btn">Entrar no Arcade</a>
      </div>
    </div>
  );
}

export default Home;
