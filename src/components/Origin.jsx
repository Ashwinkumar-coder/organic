import React from 'react';

export default function Origin() {
  return (
    <section id="origin" style={{ padding: '40px 0 60px' }}>
      <div className="wrap">
        <div className="origin-layout">
          {/* Left: Origin Farmers Frame */}
          <div className="origin-photo-frame">
            <img
              src="/images/origin-farmers.jpg"
              alt="Farmers harvesting in Manipur"
              loading="lazy"
            />
          </div>

          {/* Right: Story & 4 Value Cards */}
          <div>
            <div className="chip-figma">
              <span className="chip-dot" />
              <span>BEHIND THE HARVEST</span>
            </div>

            <h2 style={{ fontSize: 'clamp(34px, 4.5vw, 56px)', fontWeight: 700, margin: '14px 0 0', color: 'var(--ink)' }}>
              Grown by people,
              <br />
              not factories.
            </h2>

            <p style={{ color: 'var(--mut)', fontSize: '15px', lineHeight: 1.65, marginTop: '14px', maxWidth: '52ch' }}>
              Our story is shaped by farmers and the care they put into every crop. We blend traditional methods with modern innovation to protect the land and build long-term prosperity for rural communities.
            </p>

            {/* 4 Value Cards (2x2 Grid) */}
            <div className="origin-values-grid">
              <div className="origin-val-card">
                <h4>Premium quality</h4>
                <p>Carefully grown and selected.</p>
              </div>

              <div className="origin-val-card">
                <h4>Sustainable</h4>
                <p>Respect for land and water.</p>
              </div>

              <div className="origin-val-card">
                <h4>Farmer-first</h4>
                <p>Direct, fair partnerships.</p>
              </div>

              <div className="origin-val-card">
                <h4>Transparent</h4>
                <p>Clear sourcing, honest talk.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
