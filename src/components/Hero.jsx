import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight, ShieldCheck, Cpu, Leaf } from 'lucide-react';

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
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const handlePointerMove = (e) => {
    if (!tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltRef.current.style.transform = `perspective(1200px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handlePointerLeave = () => {
    if (!tiltRef.current) return;
    tiltRef.current.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section className="hero-section" style={{ paddingTop: 'clamp(40px, 6vw, 72px)', paddingBottom: '30px' }}>
      <div className="wrap">
        {/* Header content */}
        <div style={{ maxWidth: '850px' }}>
          <div className="chip">
            <span>Organic · Smart · Sustainable</span>
          </div>

          <h1 style={{ color: 'var(--ink)' }}>
            Organic roots.
            <br />
            <span
              style={{
                display: 'inline-block',
                background: 'var(--lime)',
                borderRadius: '0.18em',
                padding: '0 0.16em',
                color: 'var(--ink)',
                transition: 'opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                opacity: animatingOut ? 0 : 1,
                transform: animatingOut ? 'translateY(0.24em)' : 'translateY(0)',
              }}
            >
              {WORDS[wordIndex]}
            </span>
          </h1>

          <p className="sub" style={{ fontSize: 'clamp(17px, 1.4vw, 21px)', maxWidth: '54ch' }}>
            Chemical-free produce from tribal farmers, plus animal ID and software that make farms smarter. One brand, built for a better planet.
          </p>

          {/* Action Row */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '36px' }}>
            <a href="#shop" className="btn lime" style={{ fontSize: '15px' }}>
              <span>Explore Catalog</span>
              <ArrowDown size={16} strokeWidth={2.2} />
            </a>
            <a href="#contact" className="btn out" style={{ fontSize: '15px' }}>
              <span>Get a Quote</span>
              <ArrowRight size={16} strokeWidth={2.2} />
            </a>
          </div>
        </div>

        {/* 3D Tilt Visual Stage */}
        <div 
          style={{ 
            position: 'relative', 
            marginTop: 'clamp(48px, 6vw, 72px)',
            perspective: '1200px'
          }}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          {/* Top-Right Floating Badge */}
          <div
            className="hero-badge hero-badge-top"
            style={{
              position: 'absolute',
              right: '3%',
              top: '-32px',
              zIndex: 10,
              background: '#ffffff',
              border: '1.5px solid var(--ink)',
              borderRadius: '999px',
              padding: '12px 22px 12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 18px 36px -12px rgba(0, 0, 0, 0.18)',
              animation: 'floatBob 5s ease-in-out infinite',
              fontWeight: 600,
              fontSize: '13.5px',
              color: 'var(--ink)',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'var(--lime)',
                display: 'grid',
                placeItems: 'center',
                color: 'var(--green)',
              }}
            >
              <Cpu size={18} strokeWidth={2.4} />
            </div>
            <div>
              <div style={{ lineHeight: 1.2 }}>ICAR-Certified</div>
              <div style={{ fontSize: '11px', color: 'var(--mut)', fontWeight: 400 }}>ISO microchips & tags</div>
            </div>
          </div>

          {/* Interactive Tilt Container */}
          <div
            ref={tiltRef}
            style={{
              borderRadius: 'clamp(28px, 4vw, 44px)',
              overflow: 'hidden',
              aspectRatio: '16 / 8',
              minHeight: '340px',
              background: 'var(--soft)',
              border: '1.5px solid var(--line)',
              boxShadow: '0 30px 60px -20px rgba(11, 61, 38, 0.16)',
              transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'transform',
              position: 'relative',
            }}
          >
            <img
              src="/images/hero-farmers.jpg"
              alt="Women farmers of Manipur in a turmeric field"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 32%',
                display: 'block',
              }}
            />
            {/* Subtle Gradient Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10, 10, 10, 0.35) 0%, transparent 40%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '28px',
                color: '#ffffff',
                pointerEvents: 'none',
                maxWidth: '480px',
              }}
            >
              <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(0,0,0,0.5)', padding: '4px 10px', borderRadius: '6px' }}>
                Field Harvest · Manipur, India
              </span>
              <p style={{ margin: '8px 0 0', fontSize: '14px', textShadow: '0 2px 8px rgba(0,0,0,0.4)', opacity: 0.9 }}>
                Direct partnerships with indigenous farming communities cultivating pure heritage crops.
              </p>
            </div>
          </div>

          {/* Bottom-Left Floating Badge */}
          <div
            className="hero-badge hero-badge-bottom"
            style={{
              position: 'absolute',
              left: '3%',
              bottom: '-24px',
              zIndex: 10,
              background: 'var(--lime)',
              border: '1.5px solid var(--ink)',
              borderRadius: '999px',
              padding: '12px 22px 12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 18px 36px -12px rgba(11, 61, 38, 0.28)',
              animation: 'floatBob 6s ease-in-out infinite -2.5s',
              fontWeight: 600,
              fontSize: '13.5px',
              color: 'var(--ink)',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#ffffff',
                display: 'grid',
                placeItems: 'center',
                color: 'var(--green)',
              }}
            >
              <ShieldCheck size={18} strokeWidth={2.4} />
            </div>
            <div>
              <div style={{ lineHeight: 1.2 }}>RF Ear Tags & Traceability</div>
              <div style={{ fontSize: '11px', color: 'var(--green)', fontWeight: 500 }}>Global agri-standard</div>
            </div>
          </div>
        </div>

        {/* Quick Highlights Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px',
            marginTop: 'clamp(44px, 5vw, 60px)',
            paddingTop: '28px',
            borderTop: '1px solid var(--line)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ padding: '8px', borderRadius: '12px', background: 'var(--soft)', color: 'var(--green)' }}>
              <Leaf size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '15px' }}>100% Chemical-Free</div>
              <div style={{ fontSize: '13.5px', color: 'var(--mut)', marginTop: '2px' }}>Grown in pristine northeastern soil with zero synthetic additives.</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ padding: '8px', borderRadius: '12px', background: 'var(--soft)', color: 'var(--green)' }}>
              <Cpu size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '15px' }}>ICAR-Certified Tech</div>
              <div style={{ fontSize: '13.5px', color: 'var(--mut)', marginTop: '2px' }}>Approved livestock identification and custom ERP management software.</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ padding: '8px', borderRadius: '12px', background: 'var(--soft)', color: 'var(--green)' }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '15px' }}>Direct Farmer Equity</div>
              <div style={{ fontSize: '13.5px', color: 'var(--mut)', marginTop: '2px' }}>Fair trade pricing and long-term security for rural communities.</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-badge-top {
            position: static !important;
            margin-bottom: 16px;
            display: inline-flex !important;
          }
          .hero-badge-bottom {
            position: static !important;
            margin-top: 16px;
            display: inline-flex !important;
          }
        }
      `}</style>
    </section>
  );
}

