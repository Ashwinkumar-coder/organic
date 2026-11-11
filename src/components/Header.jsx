import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'What We Do', href: '#shop' },
    { name: 'Origin & Story', href: '#origin' },
    { name: 'Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="header-wrapper">
      <nav 
        className="nav-bar"
        style={{
          boxShadow: scrolled 
            ? '0 16px 36px -12px rgba(11, 61, 38, 0.2)' 
            : '0 8px 24px -12px rgba(0, 0, 0, 0.08)',
          borderColor: scrolled ? 'var(--ink)' : 'var(--line)'
        }}
        aria-label="Main Navigation"
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '10px' }} aria-label="Indiorg Home">
          <img 
            src="/images/logo.png" 
            alt="Indiorg – Our earth our home" 
            style={{ height: '36px', width: 'auto', display: 'block', objectFit: 'contain' }} 
          />
        </a>

        {/* Desktop Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="desktop-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                padding: '9px 18px',
                borderRadius: '999px',
                fontSize: '14.5px',
                fontWeight: 500,
                color: 'var(--ink)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--soft)';
                e.currentTarget.style.color = 'var(--ink)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--ink)';
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="#contact" className="btn green" style={{ padding: '10px 22px', fontSize: '14px' }}>
            <span>Say hi</span>
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              color: 'var(--ink)'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Flyout */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 'clamp(20px, 4vw, 44px)',
            right: 'clamp(20px, 4vw, 44px)',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1.5px solid var(--ink)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            boxShadow: '0 24px 48px -12px rgba(0,0,0,0.18)',
            zIndex: 60,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '17px',
                fontWeight: 600,
                padding: '12px 16px',
                borderRadius: '14px',
                background: 'var(--soft)',
                color: 'var(--ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>{link.name}</span>
              <ArrowUpRight size={18} color="var(--green)" />
            </a>
          ))}
          <a
            href="#contact"
            className="btn lime"
            onClick={() => setMobileMenuOpen(false)}
            style={{ marginTop: '8px', padding: '14px', width: '100%' }}
          >
            Get a Quote
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-links {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}

