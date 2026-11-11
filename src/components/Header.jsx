import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header-root">
      <div className="header-inner">
        {/* Left Pill: Brand Logo (Increased size) */}
        <a href="#top" className="nav-pill-logo" aria-label="Indiorg Home">
          <img src="/images/logo.png" alt="Indiorg – Our earth our home" />
        </a>

        {/* Center Pill: Desktop Navigation Links (Increased size) */}
        <nav className="nav-pill-links">
          <a href="#shop">What we do</a>
          <a href="#origin">Origin</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Right Action: Say hi + Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href="#contact" className="nav-btn-sayhi">
            Say hi
          </a>

          {/* Mobile Menu Button for small screens */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown for Tablets & Phones */}
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
