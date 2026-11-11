import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Layers, CheckCircle } from 'lucide-react';

export default function Stats() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [val3, setVal3] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate val1 to 7
          let c1 = 0;
          const i1 = setInterval(() => {
            c1++;
            setVal1(c1);
            if (c1 >= 7) clearInterval(i1);
          }, 120);

          // Animate val2 to 4
          let c2 = 0;
          const i2 = setInterval(() => {
            c2++;
            setVal2(c2);
            if (c2 >= 4) clearInterval(i2);
          }, 180);

          // Animate val3 to 2
          let c3 = 0;
          const i3 = setInterval(() => {
            c3++;
            setVal3(c3);
            if (c3 >= 2) clearInterval(i3);
          }, 240);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    {
      num: `${val1}`,
      suffix: '%+',
      label: 'Curcumin concentration in our wild turmeric',
      subtext: 'More than double the typical 2-3% commercial retail standard.',
      icon: <TrendingUp size={22} color="var(--green)" />,
    },
    {
      num: `${val2}`,
      suffix: '',
      label: 'Pure heritage crops wild-harvested in Manipur',
      subtext: 'High-curcumin turmeric, ancient wild forest tea, tangy roselle & fiery king chili.',
      icon: <Layers size={22} color="var(--green)" />,
    },
    {
      num: `${val3}`,
      suffix: '',
      label: 'Integrated pillars: Clean Produce & Agri-Tech',
      subtext: 'Uniting tribal agricultural wisdom with ICAR-certified identification systems.',
      icon: <CheckCircle size={22} color="var(--green)" />,
    },
  ];

  return (
    <section id="impact" ref={sectionRef} style={{ paddingTop: '10px', paddingBottom: 'clamp(60px, 7vw, 100px)' }}>
      <div className="wrap">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1.5px solid var(--ink)',
            borderBottom: '1px solid var(--line)',
            padding: '30px 0 10px',
          }}
          className="stats-container"
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '24px 32px 24px 0',
                borderRight: idx < 2 ? '1px solid var(--line)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              className="stat-card"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--mut)',
                    }}
                  >
                    Metric 0{idx + 1}
                  </span>
                  <div style={{ padding: '6px', borderRadius: '8px', background: 'var(--soft)' }}>
                    {item.icon}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: 'clamp(56px, 6.5vw, 92px)',
                    fontWeight: 600,
                    letterSpacing: '-0.05em',
                    lineHeight: 1,
                    color: 'var(--ink)',
                  }}
                >
                  {item.num}
                  {item.suffix && <em style={{ fontStyle: 'normal', color: 'var(--green)' }}>{item.suffix}</em>}
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <p
                  style={{
                    fontSize: '15.5px',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {item.label}
                </p>
                <p style={{ fontSize: '13.5px', color: 'var(--mut)', marginTop: '6px', lineHeight: 1.5 }}>
                  {item.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-container {
            grid-template-columns: 1fr !important;
            border-top: 1px solid var(--ink) !important;
          }
          .stat-card {
            border-right: none !important;
            border-bottom: 1px solid var(--line) !important;
            padding: 24px 0 !important;
          }
          .stat-card:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}

