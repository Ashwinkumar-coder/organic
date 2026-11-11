import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        {/* Left Pill: Brand Logo */}
        <a href="#top" className="nav-pill-logo" aria-label="Indiorg Home">
          <img src="/images/logo.png" alt="Indiorg – Our earth our home" />
        </a>

        {/* Center Pill: Navigation Links */}
        <nav className="nav-pill-links">
          <a href="#shop">What we do</a>
          <a href="#origin">Origin</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Right Pill: Say hi Button */}
        <a href="#contact" className="nav-btn-sayhi">
          Say hi
        </a>
      </div>
    </header>
  );
}
