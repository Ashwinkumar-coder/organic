import React, { useState } from 'react';
import { Plus, X, ArrowUpRight, Cpu, Laptop, Sprout, Headphones, Sparkles, CheckCircle2 } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'turmeric',
    type: 'produce',
    title: 'High-curcumin turmeric',
    desc: '7%+ curcumin. Bold colour.',
    detailLabel: 'Great for:',
    detail: 'Cooking, golden lattes, blends and ingredient makers. Retail, bulk and private label.',
    tags: ['7%+ Curcumin', 'Wild Forest', 'Pure Organic'],
    image: '/images/turmeric.jpg',
  },
  {
    id: 'wild-tea',
    type: 'produce',
    title: 'Wild tea',
    desc: 'Harvested from untouched forests.',
    detailLabel: 'Taste profile:',
    detail: 'Refreshing and invigorating, naturally rich in antioxidants and ancient minerals.',
    tags: ['Forest Foraged', 'Antioxidants', 'Pure Leaf'],
    image: '/images/wild-tea.jpg',
  },
  {
    id: 'roselle',
    type: 'produce',
    title: 'Roselle tea',
    desc: 'Tangy, ruby-red, Vitamin C.',
    detailLabel: 'Sip it:',
    detail: 'Hot or iced. A caffeine-free herbal infusion that is deeply hydrating and refreshing.',
    tags: ['High Vitamin C', 'Caffeine-Free', 'Ruby Calyces'],
    image: '/images/roselle.jpg',
  },
  {
    id: 'king-chili',
    type: 'produce',
    title: 'King chili',
    desc: 'Ghost pepper. Seriously hot.',
    detailLabel: 'Use cases:',
    detail: 'Sauces, artisanal seasonings, and spice blends that demand authentic fiery heat.',
    tags: ['Ghost Pepper', '1,000,000+ SHU', 'Manipur Origin'],
    image: '/images/king-chili.jpg',
  },
  {
    id: 'animal-id',
    type: 'tech',
    title: 'Animal identification',
    desc: 'ICAR-certified microchips and RF ear tags.',
    detailLabel: 'Key Value:',
    detail: 'Permanent tamper-proof identification, verifiable ownership records, and national traceability compliance.',
    tags: ['ICAR Certified', 'ISO 11784/85', 'RFID / NFC'],
    techStyle: 't1', // lime accent
    icon: <Cpu size={36} strokeWidth={1.8} />,
  },
  {
    id: 'software',
    type: 'tech',
    title: 'Animal management software',
    desc: 'Custom-built around your operation.',
    detailLabel: 'Covers:',
    detail: 'Comprehensive animal records, veterinary health logs, lineage breeding, custom reporting, and cloud dashboards.',
    tags: ['Custom ERP', 'Health & Breeding', 'Analytics'],
    techStyle: 't2', // soft grey
    icon: <Laptop size={36} strokeWidth={1.8} />,
  },
  {
    id: 'farm-tech',
    type: 'tech',
    title: 'Farm and livestock tech',
    desc: 'Modern tools for agriculture.',
    detailLabel: 'Capabilities:',
    detail: 'Automated data capture, real-time herd monitoring, environmental telemetry, and predictive decision support.',
    tags: ['Sensors', 'Data Capture', 'Telemetry'],
    techStyle: 't3', // dark ink
    icon: <Sprout size={36} strokeWidth={1.8} />,
  },
  {
    id: 'support',
    type: 'tech',
    title: 'Setup and support',
    desc: 'We help you roll it out.',
    detailLabel: 'Includes:',
    detail: 'Full project scoping, hardware configuration, field onboarding, staff training, and ongoing 24/7 technical support.',
    tags: ['Turnkey Deployment', 'Training', 'Dedicated SLA'],
    techStyle: 't4', // white with border
    icon: <Headphones size={36} strokeWidth={1.8} />,
  },
];

export default function Catalog() {
  const [filter, setFilter] = useState('all');
  const [openCardId, setOpenCardId] = useState(null);

  const toggleCard = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  const filteredProducts = PRODUCTS.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section id="shop" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="chip">
            <span>What We Do</span>
          </div>
          <h2>
            Two worlds.
            <br />
            One standard.
          </h2>
          <p className="sub">
            Pick a lane, or browse our full ecosystem. Tap any card to peek inside specifications and applications.
          </p>
        </div>

        {/* Filter Segmented Buttons */}
        <div
          style={{
            display: 'inline-flex',
            background: 'var(--accent-soft)',
            padding: '5px',
            borderRadius: '999px',
            margin: '34px 0 38px',
            border: '1px solid var(--line)',
            gap: '4px',
          }}
        >
          <button
            type="button"
            onClick={() => setFilter('all')}
            style={{
              padding: '10px 24px',
              borderRadius: '999px',
              border: 'none',
              background: filter === 'all' ? '#ffffff' : 'transparent',
              color: filter === 'all' ? 'var(--ink)' : 'var(--mut)',
              boxShadow: filter === 'all' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
              fontWeight: filter === 'all' ? 600 : 500,
              fontSize: '14.5px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            All Offerings (8)
          </button>
          <button
            type="button"
            onClick={() => setFilter('produce')}
            style={{
              padding: '10px 24px',
              borderRadius: '999px',
              border: 'none',
              background: filter === 'produce' ? '#ffffff' : 'transparent',
              color: filter === 'produce' ? 'var(--ink)' : 'var(--mut)',
              boxShadow: filter === 'produce' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
              fontWeight: filter === 'produce' ? 600 : 500,
              fontSize: '14.5px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Organic Produce (4)
          </button>
          <button
            type="button"
            onClick={() => setFilter('tech')}
            style={{
              padding: '10px 24px',
              borderRadius: '999px',
              border: 'none',
              background: filter === 'tech' ? '#ffffff' : 'transparent',
              color: filter === 'tech' ? 'var(--ink)' : 'var(--mut)',
              boxShadow: filter === 'tech' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
              fontWeight: filter === 'tech' ? 600 : 500,
              fontSize: '14.5px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Agri-Technology (4)
          </button>
        </div>

        {/* Expansive 4-Column Product Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '24px',
          }}
          className="catalog-grid"
        >
          {filteredProducts.map((p) => {
            const isOpen = openCardId === p.id;
            return (
              <article
                key={p.id}
                onClick={() => toggleCard(p.id)}
                style={{
                  background: '#ffffff',
                  border: isOpen ? '1.5px solid var(--ink)' : '1px solid var(--line)',
                  borderRadius: '26px',
                  padding: '16px',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isOpen 
                    ? '0 20px 40px -16px rgba(11, 61, 38, 0.2)' 
                    : '0 4px 16px -8px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                className="catalog-card"
              >
                {/* Plus / Expand Button */}
                <button
                  type="button"
                  aria-label="Toggle details"
                  style={{
                    position: 'absolute',
                    right: '26px',
                    top: '26px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: isOpen ? 'var(--lime)' : '#ffffff',
                    border: '1.5px solid var(--ink)',
                    display: 'grid',
                    placeItems: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'transform 0.25s ease, background 0.2s ease',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                    boxShadow: '0 4px 12px -4px rgba(0,0,0,0.2)',
                  }}
                >
                  <Plus size={18} strokeWidth={2.5} color="var(--ink)" />
                </button>

                {/* Card Media Header */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', borderRadius: '18px', overflow: 'hidden' }}>
                  {p.type === 'produce' ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.35s ease',
                      }}
                      className="card-img"
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'grid',
                        placeItems: 'center',
                        background:
                          p.techStyle === 't1'
                            ? 'var(--accent-lime-light)'
                            : p.techStyle === 't2'
                            ? 'var(--soft)'
                            : p.techStyle === 't3'
                            ? 'var(--ink)'
                            : '#ffffff',
                        color: p.techStyle === 't3' ? '#ffffff' : 'var(--green)',
                        border: p.techStyle === 't4' ? '1.5px solid var(--line)' : 'none',
                        borderRadius: '18px',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        {p.icon}
                        <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.8 }}>
                          {p.tags[0]}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Type Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '10px',
                      background: 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(8px)',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: p.type === 'produce' ? 'var(--green)' : 'var(--ink)',
                      border: '1px solid rgba(0,0,0,0.06)',
                    }}
                  >
                    {p.type === 'produce' ? 'Pure Organic' : 'Smart Tech'}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '16px 8px 4px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '18.5px', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--mut)', margin: '6px 0 10px' }}>
                    {p.desc}
                  </p>

                  {/* Pills / Tags */}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', margin: '4px 0' }}>
                    {p.tags.map((t, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '11px',
                          fontWeight: 500,
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: 'var(--soft)',
                          color: 'var(--mut)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Drawer */}
                  <div
                    style={{
                      maxHeight: isOpen ? '260px' : '0px',
                      opacity: isOpen ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
                      borderTop: isOpen ? '1px dashed var(--line)' : 'none',
                      marginTop: isOpen ? '14px' : '0px',
                      paddingTop: isOpen ? '14px' : '0px',
                    }}
                  >
                    <div style={{ fontSize: '13.5px', color: 'var(--ink)', lineHeight: 1.55 }}>
                      <strong style={{ fontWeight: 600, color: 'var(--green)', display: 'block', marginBottom: '4px' }}>
                        {p.detailLabel}
                      </strong>
                      {p.detail}
                    </div>

                    <a
                      href="#contact"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--green)',
                        marginTop: '12px',
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Inquire about {p.title}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Disclaimer / Notice */}
        <p style={{ fontSize: '13px', color: 'var(--mut)', marginTop: '36px', maxWidth: '780px' }}>
          * Descriptions are informational and make no medical claims. Batch laboratory analyses, certificates of origin, and ICAR compliance documentation are provided with every order upon request.
        </p>
      </div>

      <style>{`
        .catalog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 24px 44px -20px rgba(11, 61, 38, 0.25);
          border-color: #cfd3c6;
        }
        .catalog-card:hover .card-img {
          transform: scale(1.04);
        }
        @media (max-width: 680px) {
          .catalog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

