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
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track-figma">
        {repeated.map((item, idx) => {
          const isAlt = idx % 2 === 1;
          return (
            <span key={idx} className={isAlt ? 'alt' : ''}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
