import React, { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

const WORDS = ['Smart tech.', 'Animal ID.', 'Clean food.', 'Real farmers.'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatingOut(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setAnimatingOut(false);
      }, 260);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-wrapper">
      {/* Soft Green Glow */}
      <div className="hero-glow" aria-hidden="true" />

      <div className="wrap hero-content">
        {/* Chip */}
        <div className="chip-figma">
          <span className="chip-dot" />
          <span>ORGANIC · SMART · SUSTAINABLE</span>
        </div>

        {/* Headline */}
        <h1 className="hero-title-main">Organic roots.</h1>
        <div
          className="hero-smart-capsule"
          style={{
            opacity: animatingOut ? 0 : 1,
            transform: animatingOut ? 'scale(0.96)' : 'scale(1)',
            transition: 'all 0.25s ease',
          }}
        >
          {WORDS[wordIndex]}
        </div>

        {/* Lead */}
        <p className="hero-lead-text">
          Chemical-free produce from tribal farmers, plus animal ID and software that make farms smarter. One brand, built for a better planet.
        </p>

        {/* Buttons */}
        <div className="hero-actions">
          <a href="#shop" className="btn-figma-lime">
            Explore ↓
          </a>
          <a href="#contact" className="btn-figma-out">
            Get a quote
          </a>
        </div>

        {/* Bento Grid from Figma Section 1 */}
        <div className="hero-bento-grid">
          {/* Card 1: Wide Photo with Location Pill */}
          <div className="bento-photo-card">
            <img src="/images/hero-farmers.jpg" alt="Women farmers of Manipur in a turmeric field" />
            {/* <div className="bento-location-pill">
              <span style={{ color: '#e53e3e' }}>📍</span>
              <span>Manipur, India</span>
            </div> */}
          </div>

          {/* Card 2: Lime Curcumin Card */}
          <div className="bento-lime-card">
            <div className="bento-num">7%+</div>
            <div className="bento-label">Curcumin in our turmeric</div>
          </div>

          {/* Card 3: Deep Green ICAR Microchips Card */}
          <div className="bento-green-card">
            <div className="bento-icon">
              <Cpu size={32} strokeWidth={1.8} />
            </div>
            <div className="bento-label">ICAR-certified microchips</div>
          </div>

          {/* Card 4: White RF Ear Tags Card */}
          <div className="bento-white-card-left">
            <div
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: 'var(--lime)',
                boxShadow: '0 0 0 3px var(--green)',
              }}
            />
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>
              RF ear tags and animal software
            </div>
          </div>

          {/* Card 5: White Our Story Card */}
          <div className="bento-white-card-right">
            <p style={{ fontSize: '13.5px', color: 'var(--ink)', fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
              Direct from tribal farmers. Fair, transparent, chemical-free.
            </p>
            <a
              href="#origin"
              style={{
                fontSize: '13.5px',
                fontWeight: 600,
                color: 'var(--ink)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '12px',
              }}
            >
              Our story →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
