import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎓 DSA Master</div>
      <ul className="nav-links">
        <li><a href="#" onClick={() => alert('Home')}>Home</a></li>
        <li><a href="#" onClick={() => alert('Problems')}>Problems</a></li>
        <li><a href="#" onClick={() => alert('Login')}>Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;