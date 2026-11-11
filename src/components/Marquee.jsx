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
    <div className="mq" aria-hidden="true">
      <div>
        {repeated.map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </div>
    </div>
  );
}
