import React, { useState, useEffect, useRef } from 'react';

const WORDS = ['Smart tech.', 'Animal ID.', 'Clean food.', 'Real farmers.'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animatingOut, setAnimatingOut] = useState(false);
  const tiltRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatingOut(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setAnimatingOut(false);
      }, 260);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  const handlePointerMove = (e) => {
    if (!tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltRef.current.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  };

  const handlePointerLeave = () => {
    if (!tiltRef.current) return;
    tiltRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  };

  return (
    <div className="wrap">
      <div className="hero-split">
        {/* Left Column: Typography & CTAs */}
        <div>
          <span className="chip">Organic · Smart · Sustainable</span>
          <h1>
            Organic roots.
            <br />
            <span
              className={`rot ${animatingOut ? 'out' : ''}`}
              id="rot"
            >
              {WORDS[wordIndex]}
            </span>
          </h1>
          <p className="lead">
            Chemical-free produce from tribal farmers, plus animal ID and software that make farms smarter. One brand, built for a better planet.
          </p>
          <div className="row">
            <a href="#shop" className="btn lime">Explore ↓</a>
            <a href="#contact" className="btn out">Get a quote</a>
          </div>
        </div>

        {/* Right Column: 3D Visual Stage with Floating Badges */}
        <div
          className="stage-split"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <div className="sticker">ICAR-certified microchips</div>
          <div className="tilt" id="tilt" ref={tiltRef}>
            <img src="/images/hero-farmers.jpg" alt="Women farmers of Manipur in a turmeric field" />
          </div>
          <div className="sticker sticker2">RF ear tags</div>
        </div>
      </div>
    </div>
  );
}
