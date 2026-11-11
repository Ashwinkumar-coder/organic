import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--soft)',
        paddingTop: '20px',
        paddingBottom: '50px',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div className="wrap">
        {/* Giant Typographic Wordmark */}
        <div
          className="footer-big-brand"
          style={{
            fontSize: 'clamp(60px, 17vw, 240px)',
            fontWeight: 700,
            letterSpacing: '-0.07em',
            lineHeight: 0.88,
            textAlign: 'center',
            margin: '40px 0 30px',
            color: 'var(--ink)',
            userSelect: 'none',
            cursor: 'pointer',
            transition: 'color 0.4s ease, -webkit-text-stroke 0.4s ease',
          }}
          onClick={scrollToTop}
          title="Back to top"
        >
          indiorg
        </div>

        {/* Footer Navigation & Social Links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            paddingTop: '30px',
            borderTop: '1px solid var(--line)',
          }}
        >
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <a href="#shop" style={{ fontSize: '14.5px', color: 'var(--mut)', fontWeight: 500 }}>
              What We Do
            </a>
            <a href="#origin" style={{ fontSize: '14.5px', color: 'var(--mut)', fontWeight: 500 }}>
              Origin Story
            </a>
            <a href="#impact" style={{ fontSize: '14.5px', color: 'var(--mut)', fontWeight: 500 }}>
              Traceability & Stats
            </a>
            <a href="#contact" style={{ fontSize: '14.5px', color: 'var(--mut)', fontWeight: 500 }}>
              Contact & Inquiries
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 18px',
              borderRadius: '999px',
              background: '#ffffff',
              border: '1.5px solid var(--line)',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--ink)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            className="back-to-top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>

        {/* Copyright & Tagline Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            marginTop: '24px',
            fontSize: '13.5px',
            color: 'var(--mut)',
          }}
        >
          <span>© 2026 Indiorg Agriculture Pvt. Ltd. All rights reserved.</span>
          <span style={{ fontWeight: 500, color: 'var(--green)' }}>Our earth, our home.</span>
        </div>
      </div>

      <style>{`
        .footer-big-brand:hover {
          color: var(--lime);
          -webkit-text-stroke: 2.5px var(--ink);
        }
        .back-to-top:hover {
          background: var(--ink);
          color: #ffffff;
          border-color: var(--ink);
        }
      `}</style>
    </footer>
  );
}

