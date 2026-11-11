import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="wrap">
      {/* Giant Outline Wordmark */}
      <div
        className="big-outline-indiorg"
        onClick={scrollToTop}
        title="Back to top"
      >
        indiorg
      </div>

      {/* Bottom Legal & Tagline */}
      <div className="footer-bottom-line">
        <span>© 2026 Indiorg Agriculture Pvt. Ltd.</span>
        <span>Our earth, our home.</span>
      </div>
    </div>
  );
}
