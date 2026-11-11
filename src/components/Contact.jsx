import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

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
    <div id="contact" className="wrap">
      <div className="contact-split-figma">
        {/* Left Column: Info & Contact Cards */}
        <div className="contact-info-col">
          <div className="chip-figma" style={{ background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.2)', color: '#ffffff' }}>
            <span className="chip-dot" />
            <span>FOR IMPORTERS, BRANDS AND FARMS</span>
          </div>

          <h2>
            Let’s build
            <br />
            something.
          </h2>

          <p className="contact-sub">
            Bulk, private label, samples or custom tech. Tell us what you need and we’ll get back with availability and pricing.
          </p>

          <div className="contact-pills-list">
            {/* Email Card */}
            <a href="mailto:info@indiorg.org" className="contact-glass-pill">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div className="contact-icon-bubble">
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
                    Email
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', marginTop: '2px' }}>
                    info@indiorg.org
                  </div>
                </div>
              </div>
              <ArrowUpRight size={18} color="rgba(255,255,255,0.6)" />
            </a>

            {/* Phone Card */}
            <a href="tel:+919597515164" className="contact-glass-pill">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div className="contact-icon-bubble">
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
                    Phone
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', marginTop: '2px' }}>
                    +91 95975 15164
                  </div>
                </div>
              </div>
              <ArrowUpRight size={18} color="rgba(255,255,255,0.6)" />
            </a>

            {/* Visit Card */}
            <div className="contact-glass-pill" style={{ cursor: 'default' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div className="contact-icon-bubble">
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
                    Visit
                  </div>
                  <div style={{ fontSize: '14.5px', fontWeight: 600, color: '#ffffff', marginTop: '2px' }}>
                    Indiorg Agriculture Pvt. Ltd.
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '2px', lineHeight: 1.45 }}>
                    No 31 Eswaran Kovil Street, Opposite Madhurai Veedu Hotel, Puducherry 605001, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Figma White Form Card */}
        <div className="contact-form-card">
          <h3 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 6px', color: 'var(--ink)' }}>
            Send an enquiry
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--mut)', margin: '0 0 20px' }}>
            Pick what you’re interested in, then tell us more.
          </p>

          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--mut)' }}>
            I'M INTERESTED IN
          </div>

          {/* Tags */}
          <div className="form-tag-cloud">
            {TAGS.map((tag) => {
              const isOn = activeTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  className={`form-tag-btn ${isOn ? 'on' : ''}`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div className="figma-form-field">
                <label>YOUR NAME</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div className="figma-form-field">
                <label>EMAIL</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            <div className="figma-form-field">
              <label>COMPANY AND COUNTRY</label>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company, Country"
              />
            </div>

            <div className="figma-form-field">
              <label>MESSAGE</label>
              <textarea
                name="msg"
                rows={3}
                value={formData.msg}
                onChange={handleChange}
                placeholder="Volumes, packaging, destination market…"
              />
            </div>

            <button type="submit" className="btn-submit-figma">
              Send it →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
