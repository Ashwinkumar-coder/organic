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
    <section style={{ paddingTop: 0 }} ref={ref}>
      <div className="wrap">
        <div className="stats">
          <div className="stat">
            <div className="num">
              <span>{counts.n1}</span>
              <em>%+</em>
            </div>
            <p>Curcumin in our turmeric</p>
          </div>
          <div className="stat">
            <div className="num">
              <span>{counts.n2}</span>
            </div>
            <p>Organic products from Manipur</p>
          </div>
          <div className="stat">
            <div className="num">
              <span>{counts.n3}</span>
            </div>
            <p>Ways we back farms: produce and tech</p>
          </div>
        </div>
      </div>
    </section>
  );
}
