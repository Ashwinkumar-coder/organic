import React, { useState, useEffect, useRef } from 'react';

export default function Stats() {
  const [counts, setCounts] = useState({ n1: 0, n2: 0, n3: 0 });
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);

          let c1 = 0;
          const t1 = setInterval(() => {
            c1++;
            setCounts((prev) => ({ ...prev, n1: c1 }));
            if (c1 >= 7) clearInterval(t1);
          }, 140);

          let c2 = 0;
          const t2 = setInterval(() => {
            c2++;
            setCounts((prev) => ({ ...prev, n2: c2 }));
            if (c2 >= 4) clearInterval(t2);
          }, 180);

          let c3 = 0;
          const t3 = setInterval(() => {
            c3++;
            setCounts((prev) => ({ ...prev, n3: c3 }));
            if (c3 >= 2) clearInterval(t3);
          }, 240);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  return (
    <section style={{ padding: '0 0 20px' }} ref={ref}>
      <div className="wrap">
        <div className="stats-pill-container">
          <div className="stats-pill-grid">
            <div className="stats-col">
              <div className="stats-number">
                {counts.n1}%+
              </div>
              <div className="stats-label">Curcumin in our turmeric</div>
            </div>

            <div className="stats-col">
              <div className="stats-number">
                {counts.n2}
              </div>
              <div className="stats-label">Organic products from Manipur</div>
            </div>

            <div className="stats-col">
              <div className="stats-number">
                {counts.n3}
              </div>
              <div className="stats-label">Ways we back farms: produce and tech</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
