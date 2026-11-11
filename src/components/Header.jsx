import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <a href="#top" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/images/logo.png" alt="Indiorg – Our earth our home" />
        </a>
        <nav className="links">
          <a href="#shop">What we do</a>
          <a href="#origin">Origin</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="btn">Say hi</a>
      </div>
    </header>
  );
}
