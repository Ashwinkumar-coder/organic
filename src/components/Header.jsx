import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header-root">
      <div className="navbar-wide-white">
        {/* Left: Brand Logo */}
        <a href="#top" className="navbar-brand-logo" aria-label="Indiorg Home">
          <img src="/images/logo.png" alt="Indiorg – Our earth our home" />
        </a>

        {/* Center: Navigation Links */}
        <nav className="navbar-desktop-nav">
          <a href="#shop">What we do</a>
          <a href="#origin">Origin</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Right: CTA Button & Mobile Toggle */}
        <div className="navbar-right-actions">
          <a href="#contact" className="nav-btn-sayhi">
            Say hi
          </a>

          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <a
            href="#shop"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            <span>What we do</span>
            <ArrowUpRight size={18} />
          </a>
          <a
            href="#origin"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            <span>Origin</span>
            <ArrowUpRight size={18} />
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            <span>Contact</span>
            <ArrowUpRight size={18} />
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-sayhi-btn"
          >
            Say hi
          </a>
        </div>
      )}
    </header>
  );
}
