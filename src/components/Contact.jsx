import React, { useState } from 'react';

const TAGS = [
  'Turmeric',
  'Wild tea',
  'Roselle',
  'King chili',
  'Microchips',
  'RF ear tags',
  'Software',
  'Agri-tech',
];

export default function Contact() {
  const [activeTags, setActiveTags] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    msg: '',
  });

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const p = activeTags.join(', ') || 'General';
    const body = `Name: ${formData.name}\nCompany: ${formData.company}\nInterested in: ${p}\n\n${formData.msg}`;
    window.location.href = `mailto:info@indiorg.org?subject=${encodeURIComponent(
      'Enquiry from ' + formData.name
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" style={{ background: 'var(--soft)', borderRadius: '48px 48px 0 0' }}>
      <div className="wrap two" style={{ alignItems: 'start' }}>
        <div className="info">
          <span className="chip" style={{ background: '#fff' }}>
            For importers, brands and farms
          </span>
          <h2>
            Let’s build
            <br />
            something.
          </h2>
          <p className="sub">
            Bulk, private label, samples or custom tech. Tell us what you need and we’ll get back with availability and pricing.
          </p>

          <p style={{ marginTop: '26px' }}>
            <b>Email</b>
            <br />
            <a href="mailto:info@indiorg.org">info@indiorg.org</a>
          </p>

          <p>
            <b>Phone</b>
            <br />
            <a href="tel:+919597515164">+91 95975 15164</a>
          </p>

          <p>
            <b>Visit</b>
            <br />
            Indiorg Agriculture Pvt. Ltd.
            <br />
            No 31 Eswaran Kovil Street, Opposite Madhurai Veedu Hotel, Puducherry 605001, India
          </p>
        </div>

        <form id="f" onSubmit={handleSubmit}>
          <div className="tags" id="tags">
            {TAGS.map((tag) => {
              const isOn = activeTags.includes(tag);
              return (
                <span
                  key={tag}
                  className={`tg ${isOn ? 'on' : ''}`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company and country"
          />

          <textarea
            name="msg"
            rows="4"
            value={formData.msg}
            onChange={handleChange}
            placeholder="Volumes, packaging, destination market…"
          />

          <button
            className="btn lime"
            type="submit"
            style={{ justifyContent: 'center', padding: '16px' }}
          >
            Send it →
          </button>
        </form>
      </div>
    </section>
  );
}
