import React from 'react';
import { Award, Compass, HeartHandshake, Eye, MapPin } from 'lucide-react';

export default function Origin() {
  const values = [
    {
      title: 'Premium quality',
      desc: 'Carefully grown, hand-harvested, and laboratory tested for bioactive potency.',
      icon: <Award size={20} color="var(--green)" />,
    },
    {
      title: 'Sustainable by nature',
      desc: 'Zero chemical pesticides or chemical fertilizers. Respect for indigenous soil & streams.',
      icon: <Compass size={20} color="var(--green)" />,
    },
    {
      title: 'Farmer-first equity',
      desc: 'Direct, fair-value partnerships empowering tribal women harvesting collectives.',
      icon: <HeartHandshake size={20} color="var(--green)" />,
    },
    {
      title: 'Radical transparency',
      desc: 'Verifiable sourcing, transparent supply chain, and honest, open collaboration.',
      icon: <Eye size={20} color="var(--green)" />,
    },
  ];

  return (
    <section id="origin" style={{ borderTop: '1px solid var(--line)', background: '#ffffff' }}>
      <div className="wrap">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(340px, 1fr) 1.25fr',
            gap: 'clamp(36px, 6vw, 80px)',
            alignItems: 'center',
          }}
          className="origin-grid"
        >
          {/* Photo Column */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'clamp(28px, 4vw, 44px)',
                overflow: 'hidden',
                aspectRatio: '4 / 5',
                border: '1.5px solid var(--ink)',
                boxShadow: '0 24px 50px -16px rgba(11, 61, 38, 0.22)',
                position: 'relative',
              }}
              className="origin-pic"
            >
              <img
                src="/images/origin-farmers.jpg"
                alt="Farmers harvesting in Manipur"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 10, 10, 0.4) 0%, transparent 40%)',
                }}
              />
            </div>

            {/* Float badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '16px',
                background: '#ffffff',
                border: '1.5px solid var(--ink)',
                borderRadius: '999px',
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 12px 28px -8px rgba(0,0,0,0.18)',
                fontSize: '13.5px',
                fontWeight: 600,
              }}
            >
              <MapPin size={16} color="var(--green)" />
              <span>Manipur Hill Tracts, Northeast India</span>
            </div>
          </div>

          {/* Narrative Column */}
          <div>
            <div className="chip">
              <span>Behind the Harvest</span>
            </div>

            <h2 style={{ marginTop: '16px', color: 'var(--ink)' }}>
              Grown by people,
              <br />
              not factories.
            </h2>

            <p className="sub" style={{ fontSize: 'clamp(16.5px, 1.25vw, 19px)', marginTop: '20px' }}>
              Our story is shaped by farmers and the generational care they pour into every hill slope crop. We blend timeless indigenous practices with modern agri-traceability to protect the soil, safeguard forest canopies, and build long-term generational prosperity for rural farming communities.
            </p>

            {/* Values Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
                marginTop: '36px',
              }}
            >
              {values.map((v, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: '1.5px solid var(--ink)',
                    paddingTop: '16px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    {v.icon}
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ink)' }}>
                      {v.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--mut)', lineHeight: 1.55 }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Callout quote */}
            <div
              style={{
                marginTop: '36px',
                padding: '18px 24px',
                borderRadius: '18px',
                background: 'var(--soft)',
                borderLeft: '4px solid var(--green)',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              <span style={{ fontSize: '14.5px', fontStyle: 'italic', color: 'var(--ink)' }}>
                "We don't simply source produce — we cultivate lasting trust between tribal farming families and global markets."
              </span>
              <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--mut)' }}>
                — Indiorg Agriculture Foundation & Tech Team
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .origin-pic:hover img {
          transform: scale(1.03);
        }
        @media (max-width: 900px) {
          .origin-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

