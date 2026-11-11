import React from 'react';

const ITEMS = [
  'Organic turmeric',
  'RF ear tags',
  'Wild tea',
  'ICAR-certified microchips',
  'Roselle',
  'Animal software',
  'King chili',
  'Agri-tech',
];

export default function Marquee() {
  const fullList = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      aria-hidden="true"
      style={{
        overflow: 'hidden',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        margin: 'clamp(36px, 5vw, 60px) 0 0',
        padding: '18px 0',
        backgroundColor: '#ffffff',
        position: 'relative',
        userSelect: 'none',
      }}
      className="marquee-container"
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marqueeScroll 36s linear infinite',
        }}
        className="marquee-track"
      >
        {fullList.map((item, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <span
              key={idx}
              style={{
                fontSize: 'clamp(20px, 2.4vw, 30px)',
                fontWeight: isEven ? 500 : 600,
                letterSpacing: '-0.03em',
                padding: '0 clamp(18px, 2.5vw, 34px)',
                whiteSpace: 'nowrap',
                color: isEven ? 'var(--green)' : 'var(--ink)',
                fontStyle: isEven ? 'italic' : 'normal',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <span>{item}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--lime)',
                  border: '1px solid var(--green)',
                  marginLeft: 'clamp(18px, 2.5vw, 34px)',
                }}
              />
            </span>
          );
        })}
      </div>

      <style>{`
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

