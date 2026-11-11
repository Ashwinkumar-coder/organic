import React, { useState } from 'react';

const CARDS = [
  {
    id: 'turmeric',
    type: 'p',
    cls: '',
    img: '/images/turmeric.jpg',
    alt: 'Organic turmeric powder and roots',
    title: 'High-curcumin turmeric',
    desc: '7%+ curcumin. Bold colour.',
    bold: 'Great for:',
    more: 'cooking, golden lattes, blends and ingredient makers. Retail, bulk and private label.',
  },
  {
    id: 'wild-tea',
    type: 'p',
    cls: '',
    img: '/images/wild-tea.jpg',
    alt: 'Wild tea leaves',
    title: 'Wild tea',
    desc: 'Harvested from untouched forests.',
    bold: 'Taste:',
    more: 'refreshing and invigorating, rich in antioxidants and minerals.',
  },
  {
    id: 'roselle',
    type: 'p',
    cls: '',
    img: '/images/roselle.jpg',
    alt: 'Dried roselle',
    title: 'Roselle tea',
    desc: 'Tangy, ruby-red, Vitamin C.',
    bold: 'Sip it:',
    more: 'hot or iced. A caffeine-free herbal infusion that is hydrating and refreshing.',
  },
  {
    id: 'king-chili',
    type: 'p',
    cls: '',
    img: '/images/king-chili.jpg',
    alt: 'King chili ghost pepper',
    title: 'King chili',
    desc: 'Ghost pepper. Seriously hot.',
    bold: 'Use it:',
    more: 'sauces, seasonings and spice blends that need a fiery kick.',
  },
  {
    id: 'animal-id',
    type: 't',
    cls: 't1',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="4" />
        <circle cx="12" cy="9" r="2" />
        <path d="M9 15h6" />
      </svg>
    ),
    title: 'Animal identification',
    desc: 'ICAR-certified microchips and RF ear tags.',
    bold: 'Why:',
    more: 'permanent identification, ownership records and traceability.',
  },
  {
    id: 'software',
    type: 't',
    cls: 't2',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4M7 10l2 2-2 2M12 14h4" />
      </svg>
    ),
    title: 'Animal management software',
    desc: 'Custom-built around your operation.',
    bold: 'Covers:',
    more: 'animal records, health, breeding, reports and dashboards.',
  },
  {
    id: 'farm-tech',
    type: 't',
    cls: 't3',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21v-9" />
        <path d="M12 12c0-4 3-6 7-6 0 4-3 6-7 6z" />
        <path d="M12 15c0-3-2-5-6-5 0 3 2 5 6 5z" />
      </svg>
    ),
    title: 'Farm and livestock tech',
    desc: 'Modern tools for agriculture.',
    bold: 'From:',
    more: 'data capture to monitoring and decision support.',
  },
  {
    id: 'support',
    type: 't',
    cls: 't4',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 14v-2a8 8 0 0116 0v2" />
        <rect x="3" y="14" width="4" height="6" rx="2" />
        <rect x="17" y="14" width="4" height="6" rx="2" />
      </svg>
    ),
    title: 'Setup and support',
    desc: 'We help you roll it out.',
    bold: 'Includes:',
    more: 'scoping, configuration, onboarding and ongoing support.',
  },
];

export default function Catalog() {
  const [filter, setFilter] = useState('all');
  const [openCards, setOpenCards] = useState({});

  const toggleCard = (id) => {
    setOpenCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="shop">
      <div className="wrap">
        <span className="chip">What we do</span>
        <h2>
          Two worlds.
          <br />
          One standard.
        </h2>
        <p className="sub">Pick a lane, or browse it all. Tap any card to peek inside.</p>

        {/* Filter Segmented Control */}
        <div className="seg" id="seg">
          <button
            type="button"
            className={filter === 'all' ? 'on' : ''}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            type="button"
            className={filter === 'p' ? 'on' : ''}
            onClick={() => setFilter('p')}
          >
            Produce
          </button>
          <button
            type="button"
            className={filter === 't' ? 'on' : ''}
            onClick={() => setFilter('t')}
          >
            Tech
          </button>
        </div>

        {/* Card Grid */}
        <div className="grid" id="grid">
          {CARDS.map((card) => {
            const isHidden = filter !== 'all' && card.type !== filter;
            if (isHidden) return null;
            const isOpen = !!openCards[card.id];

            return (
              <article
                key={card.id}
                className={`card ${card.cls} ${isOpen ? 'open' : ''}`}
                onClick={() => toggleCard(card.id)}
              >
                <span className="plus">+</span>

                {card.type === 'p' ? (
                  <img src={card.img} alt={card.alt} loading="lazy" />
                ) : (
                  <div className="ph">{card.svg}</div>
                )}

                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <div className="more">
                  <b>{card.bold}</b> {card.more}
                </div>
              </article>
            );
          })}
        </div>

        <p className="fine">
          Descriptions are informational and make no medical claims. Specifications and certificates available on request.
        </p>
      </div>
    </section>
  );
}
