import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';

const TAG_OPTIONS = [
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
  const [selectedTags, setSelectedTags] = useState(['Turmeric']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    msg: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const interestedIn = selectedTags.length > 0 ? selectedTags.join(', ') : 'General Inquiry';
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company & Country: ${formData.company || 'N/A'}
Interested in: ${interestedIn}

Project Requirements / Message:
${formData.msg || 'Interested in pricing and samples.'}`;

    const mailtoUrl = `mailto:info@indiorg.org?subject=${encodeURIComponent(
      `Enquiry from ${formData.name} (${formData.company || 'Indiorg Portal'})`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        background: 'var(--soft)',
        borderRadius: 'clamp(32px, 5vw, 56px) clamp(32px, 5vw, 56px) 0 0',
        borderTop: '1px solid var(--line)',
        paddingTop: 'clamp(60px, 8vw, 100px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
      }}
    >
      <div className="wrap">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: 'clamp(36px, 6vw, 80px)',
            alignItems: 'start',
          }}
          className="contact-layout"
        >
          {/* Left: Contact Info */}
          <div className="contact-info">
            <span
              className="chip"
              style={{
                background: '#ffffff',
                border: '1px solid var(--line)',
              }}
            >
              For Importers, Brands & Farms
            </span>

            <h2 style={{ marginTop: '16px', color: 'var(--ink)' }}>
              Let’s build
              <br />
              something.
            </h2>

            <p className="sub" style={{ fontSize: 'clamp(16px, 1.2vw, 18.5px)', marginTop: '16px' }}>
              Bulk shipments, private label packaging, certified lab samples, or customized livestock tech solutions. Tell us your requirements and our team will get back to you within 24 hours.
            </p>

            <div style={{ display: 'grid', gap: '22px', marginTop: '36px' }}>
              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    padding: '12px',
                    borderRadius: '16px',
                    background: '#ffffff',
                    border: '1px solid var(--line)',
                    color: 'var(--green)',
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--mut)' }}>
                    Email
                  </div>
                  <a
                    href="mailto:info@indiorg.org"
                    style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: 'var(--ink)',
                      textDecoration: 'underline',
                      textUnderlineOffset: '4px',
                    }}
                  >
                    info@indiorg.org
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    padding: '12px',
                    borderRadius: '16px',
                    background: '#ffffff',
                    border: '1px solid var(--line)',
                    color: 'var(--green)',
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--mut)' }}>
                    Phone / WhatsApp
                  </div>
                  <a
                    href="tel:+919597515164"
                    style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: 'var(--ink)',
                      textDecoration: 'underline',
                      textUnderlineOffset: '4px',
                    }}
                  >
                    +91 95975 15164
                  </a>
                </div>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    padding: '12px',
                    borderRadius: '16px',
                    background: '#ffffff',
                    border: '1px solid var(--line)',
                    color: 'var(--green)',
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--mut)' }}>
                    Registered Headquarters
                  </div>
                  <address
                    style={{
                      fontStyle: 'normal',
                      fontSize: '15px',
                      color: 'var(--ink)',
                      lineHeight: 1.5,
                      marginTop: '4px',
                    }}
                  >
                    <strong>Indiorg Agriculture Pvt. Ltd.</strong>
                    <br />
                    No 31 Eswaran Kovil Street, Opposite Madhurai Veedu Hotel,
                    <br />
                    Puducherry 605001, India
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '32px',
              border: '1.5px solid var(--ink)',
              padding: 'clamp(24px, 4vw, 40px)',
              boxShadow: '0 24px 48px -16px rgba(0, 0, 0, 0.12)',
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
              Request a Quote or Sample
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--mut)', marginBottom: '22px' }}>
              Select what interests you to tailor your inquiry:
            </p>

            {/* Interest Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {TAG_OPTIONS.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    style={{
                      border: '1.5px solid var(--ink)',
                      background: isSelected ? 'var(--lime)' : '#ffffff',
                      color: 'var(--ink)',
                      borderRadius: '999px',
                      padding: '8px 16px',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? '0 4px 12px -3px rgba(11, 61, 38, 0.25)' : 'none',
                    }}
                  >
                    {isSelected && <span style={{ marginRight: '6px' }}>✓</span>}
                    {tag}
                  </button>
                );
              })}
            </div>

            {/* Form Inputs */}
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '14px' }}>
              <div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name *"
                  required
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    border: '1.5px solid var(--line)',
                    background: 'var(--soft)',
                    fontSize: '15px',
                    color: 'var(--ink)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease, background 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--ink)';
                    e.target.style.background = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--line)';
                    e.target.style.background = 'var(--soft)';
                  }}
                />
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address *"
                  required
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    border: '1.5px solid var(--line)',
                    background: 'var(--soft)',
                    fontSize: '15px',
                    color: 'var(--ink)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease, background 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--ink)';
                    e.target.style.background = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--line)';
                    e.target.style.background = 'var(--soft)';
                  }}
                />
              </div>

              <div>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name & country"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    border: '1.5px solid var(--line)',
                    background: 'var(--soft)',
                    fontSize: '15px',
                    color: 'var(--ink)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease, background 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--ink)';
                    e.target.style.background = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--line)';
                    e.target.style.background = 'var(--soft)';
                  }}
                />
              </div>

              <div>
                <textarea
                  name="msg"
                  value={formData.msg}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Order volumes, specifications, private label, destination port..."
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    border: '1.5px solid var(--line)',
                    background: 'var(--soft)',
                    fontSize: '15px',
                    color: 'var(--ink)',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease, background 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--ink)';
                    e.target.style.background = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--line)';
                    e.target.style.background = 'var(--soft)';
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn lime"
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '16px',
                  fontWeight: 600,
                  marginTop: '8px',
                  gap: '8px',
                }}
              >
                <span>Submit Inquiry</span>
                <Send size={18} />
              </button>
            </form>

            {submitted && (
              <div
                style={{
                  marginTop: '16px',
                  padding: '14px 18px',
                  borderRadius: '14px',
                  background: 'var(--accent-lime-light)',
                  border: '1px solid var(--lime)',
                  color: 'var(--green)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                <CheckCircle2 size={20} />
                <span>
                  Thank you! Your email client has been prepared. If it did not open, you can send directly to <strong>info@indiorg.org</strong>.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

