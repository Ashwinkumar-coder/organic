import React, { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a href="#contact" className="btn">Say hi</a>
          <button
            type="button"
            className="mobile-burger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '20px',
              padding: '4px 8px',
              color: 'var(--ink)',
            }}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile drawer if opened */}
      {mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 'clamp(20px, 4vw, 48px)',
            right: 'clamp(20px, 4vw, 48px)',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(16px)',
            borderRadius: '24px',
            border: '1.5px solid var(--ink)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            boxShadow: '0 20px 40px -12px rgba(0,0,0,0.18)',
            zIndex: 60,
          }}
        >
          <a
            href="#shop"
            onClick={() => setMobileOpen(false)}
            style={{ padding: '12px 16px', borderRadius: '12px', background: 'var(--soft)', fontWeight: 500 }}
          >
            What we do
          </a>
          <a
            href="#origin"
            onClick={() => setMobileOpen(false)}
            style={{ padding: '12px 16px', borderRadius: '12px', background: 'var(--soft)', fontWeight: 500 }}
          >
            Origin
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            style={{ padding: '12px 16px', borderRadius: '12px', background: 'var(--soft)', fontWeight: 500 }}
          >
            Contact
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .mobile-burger {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
