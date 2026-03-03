import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">🎓 DSA Master</div>
        <ul className="nav-links">
          <li><a href="#" onClick={() => alert('Home')}>Home</a></li>
          <li><a href="#" onClick={() => alert('Problems')}>Problems</a></li>
          <li><a href="#" onClick={() => alert('Login')}>Login</a></li>
        </ul>
      </nav>

      <section className="hero">
        <h1>Master DSA Like a Pro!</h1>
        <p>Practice coding problems • Visualize algorithms • Smart revision</p>
        <button className="cta-btn" onClick={() => alert('🚀 Welcome!')}>
          Start Learning
        </button>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="icon">📚</div>
          <h3>500+ Problems</h3>
          <p>All topics covered</p>
        </div>
        <div className="feature-card">
          <div className="icon">🎯</div>
          <h3>Track Progress</h3>
          <p>Know your strengths</p>
        </div>
        <div className="feature-card">
          <div className="icon">🧠</div>
          <h3>Smart Revision</h3>
          <p>Never forget</p>
        </div>
      </section>

      <footer>
        <p>© 2024 DSA Master</p>
      </footer>
    </div>
  );
}

export default App;