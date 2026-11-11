import React from 'react';

export default function Origin() {
  return (
    <section id="origin">
      <div className="wrap two">
        <div className="pic">
          <img
            src="/images/origin-farmers.jpg"
            alt="Farmers harvesting in Manipur"
            loading="lazy"
          />
        </div>
        <div>
          <span className="chip">Behind the harvest</span>
          <h2>Grown by people, not factories.</h2>
          <p className="sub">
            Our story is shaped by farmers and the care they put into every crop. We blend traditional methods with modern innovation to protect the land and build long-term prosperity for rural communities.
          </p>
          <div className="val">
            <div>
              Premium quality
              <span>Carefully grown and selected.</span>
            </div>
            <div>
              Sustainable
              <span>Respect for land and water.</span>
            </div>
            <div>
              Farmer-first
              <span>Direct, fair partnerships.</span>
            </div>
            <div>
              Transparent
              <span>Clear sourcing, honest talk.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
