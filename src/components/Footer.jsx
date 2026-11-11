import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'var(--soft)' }}>
      <div className="wrap">
        <div
          className="big"
          style={{ width: '100%' }}
          onClick={scrollToTop}
          title="Back to top"
        >
          indiorg
        </div>
      </div>
      <div className="wrap" style={{ marginTop: '34px' }}>
        <span>© 2026 Indiorg Agriculture Pvt. Ltd.</span>
        <span>Our earth, our home.</span>
      </div>
    </footer>
  );
}
