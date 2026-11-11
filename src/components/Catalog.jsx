import React, { useState } from 'react';
import { Cpu, Laptop, Sprout, Headphones, Plus } from 'lucide-react';

const CARDS = [
  {
    id: 'turmeric',
    type: 'p',
    theme: '',
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
    theme: '',
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
    theme: '',
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
    theme: '',
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
    theme: 'theme-lime', // Lime card from Figma!
    icon: <Cpu size={36} strokeWidth={1.8} />,
    title: 'Animal identification',
    desc: 'ICAR-certified microchips and RF ear tags.',
    bold: 'Why:',
    more: 'permanent identification, ownership records and traceability.',
  },
  {
    id: 'software',
    type: 't',
    theme: 'theme-soft',
    icon: <Laptop size={36} strokeWidth={1.8} />,
    title: 'Animal management software',
    desc: 'Custom-built around your operation.',
    bold: 'Covers:',
    more: 'animal records, health, breeding, reports and dashboards.',
  },
  {
    id: 'farm-tech',
    type: 't',
    theme: 'theme-green', // Deep green card from Figma!
    icon: <Sprout size={36} strokeWidth={1.8} color="var(--lime)" />,
    title: 'Farm and livestock tech',
    desc: 'Modern tools for agriculture.',
    bold: 'From:',
    more: 'data capture to monitoring and decision support.',
  },
  {
    id: 'support',
    type: 't',
    theme: 'theme-soft',
    icon: <Headphones size={36} strokeWidth={1.8} />,
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
    <section id="shop" style={{ padding: '20px 0 0' }}>
      <div className="wrap">
        <div className="what-we-do-container">
          {/* Header */}
          <div className="chip-figma">
            <span className="chip-dot" />
            <span>WHAT WE DO</span>
          </div>

          <h2 className="catalog-title">
            Two worlds.
            <br />
            One standard.
          </h2>

          <p className="catalog-sub">
            Pick a lane, or browse it all. Tap any card to peek inside.
          </p>

          {/* Segmented Filter */}
          <div className="seg-pill-figma">
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

          {/* 4-Column Card Grid */}
          <div className="cards-grid-figma">
            {CARDS.map((card) => {
              const isHidden = filter !== 'all' && card.type !== filter;
              if (isHidden) return null;
              const isOpen = !!openCards[card.id];

              return (
                <article
                  key={card.id}
                  className={`figma-card ${card.theme} ${isOpen ? 'open' : ''}`}
                  onClick={() => toggleCard(card.id)}
                >
                  <span className="figma-plus-btn">+</span>

                  {card.type === 'p' ? (
                    <div className="figma-card-thumb">
                      <img src={card.img} alt={card.alt} loading="lazy" />
                    </div>
                  ) : (
                    <div className="figma-card-thumb" style={{ background: 'transparent' }}>
                      <div className="figma-card-icon-box">{card.icon}</div>
                    </div>
                  )}

                  <div className="figma-card-body">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                    <div className="figma-card-more">
                      <b>{card.bold}</b> {card.more}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Fine text */}
          <p style={{ fontSize: '12.5px', color: 'var(--mut)', marginTop: '32px' }}>
            Descriptions are informational and make no medical claims. Specifications and certificates available on request.
          </p>
        </div>
      </div>
    </section>
  );
}
