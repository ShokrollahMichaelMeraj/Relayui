import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowLeft, Check, ChevronDown } from 'lucide-react';

export default function Contact() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    callVolume: '',
    telephonyStack: '',
    notes: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('relay-theme');
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('relay-theme', newTheme);
  };

  const colors = theme === 'light' ? {
    bg: '#ffffff',
    text: '#0a0a0f',
    text2: '#6b6b7b',
    text3: '#9a9aaa',
    blue: '#2B5BE8',
    blueH: '#1A3FCC',
    border: '#e5e5ea',
    border2: '#d0d0da',
    navBg: 'rgba(255,255,255,0.92)',
    navBorder: '#e5e5ea',
  } : {
    bg: '#0a0a0f',
    text: '#f0f0f4',
    text2: '#a0a0b0',
    text3: '#505060',
    blue: '#4a7aff',
    blueH: '#6b94ff',
    border: 'rgba(255,255,255,0.07)',
    border2: 'rgba(255,255,255,0.13)',
    navBg: 'rgba(10,10,15,0.9)',
    navBorder: 'rgba(255,255,255,0.07)',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create structured email body
    const emailBody = `
New Contact Form Submission

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company}
Job Title: ${formData.jobTitle}
Daily Call Volume: ${formData.callVolume || 'Not specified'}
Current Telephony Stack: ${formData.telephonyStack || 'Not specified'}

Additional Notes:
${formData.notes || 'None'}
    `.trim();

    const subject = `Contact Form: ${formData.firstName} ${formData.lastName} - ${formData.company}`;
    const mailtoLink = `mailto:michael@getrelay.now?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
    setFormSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ backgroundColor: colors.bg, minHeight: '100vh', transition: 'background 0.3s, color 0.3s' }}>
      <style>{`
        @media (max-width: 768px) {
          .contact-layout {
            flex-direction: column !important;
          }
          .contact-left {
            width: 100% !important;
            padding: 40px 24px !important;
            min-height: auto !important;
          }
          .contact-left .benefits-section {
            display: none !important;
          }
          .contact-left .contact-info-section {
            display: none !important;
          }
          .contact-right {
            padding: 40px 24px !important;
            border-left: none !important;
            border-top: 1px solid ${colors.border} !important;
          }
        }
      `}</style>
      {/* Navigation */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 300,
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
          background: colors.navBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${colors.navBorder}`,
          transition: 'background 0.3s, border-color 0.3s'
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'Geist, sans-serif',
            fontWeight: 700,
            fontSize: '17px',
            letterSpacing: '-0.4px',
            color: colors.text,
            textDecoration: 'none',
            flexShrink: 0
          }}
        >
          <div style={{ width: '28px', height: '28px', position: 'relative', flexShrink: 0 }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              border: '2.5px solid transparent',
              background: 'linear-gradient(135deg, #1A3FCC, #4a7aff, #7aa0ff, #1A3FCC) border-box',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'destination-out',
              maskComposite: 'exclude',
              position: 'absolute',
              inset: 0,
              transform: 'rotate(-20deg) scaleX(0.55)'
            }} />
            <div style={{
              width: '8px',
              height: '8px',
              background: colors.text3,
              borderRadius: '50%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)'
            }} />
          </div>
          RELAY
        </a>

        {/* Right Side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="/"
            style={{
              fontSize: '13px',
              color: colors.text2,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = colors.text}
            onMouseLeave={(e) => e.currentTarget.style.color = colors.text2}
          >
            <ArrowLeft size={14} />
            Back to Home
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              width: '36px',
              height: '36px',
              border: `1px solid ${colors.border2}`,
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '6px',
              transition: 'background 0.2s, border-color 0.2s',
              color: colors.text2
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = colors.bg;
              e.currentTarget.style.color = colors.text;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = colors.text2;
            }}
          >
            {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>

      {/* Main Content - Two Column Layout */}
      <div className="contact-layout" style={{ paddingTop: '60px', minHeight: 'calc(100vh - 60px)', display: 'flex' }}>
        {/* Left Column - Dark Context Panel */}
        <div
          className="contact-left"
          style={{
            width: '45%',
            background: '#080f1e',
            padding: '80px 60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-10%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '500px',
              height: '400px',
              background: 'radial-gradient(ellipse, rgba(74,122,255,0.15) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Top Section */}
            <div style={{ marginBottom: '60px' }}>
              <div
                style={{
                  fontFamily: 'Geist Mono, monospace',
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  color: '#4a7aff',
                  marginBottom: '24px'
                }}
              >
                — EARLY ACCESS
              </div>

              <h1
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontWeight: 800,
                  fontSize: '48px',
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  lineHeight: '1.1',
                  marginBottom: '20px'
                }}
              >
                Let&apos;s build this together.
              </h1>

              <p
                style={{
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: '1.7'
                }}
              >
                We&apos;re signing our first design partners now — contact centers willing to run Relay alongside their existing stack and measure the difference. No cost. Direct product input.
              </p>
            </div>

            {/* Benefits */}
            <div className="benefits-section" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                'White-glove onboarding — we configure Relay for your stack',
                'Zero cost during the pilot period',
                'Direct line to the product team — your feedback shapes the roadmap',
                'AHT before/after measurement — we will show you the data',
                'Preferential pricing at commercial launch'
              ].map((benefit, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '16px 0',
                    borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none'
                  }}
                >
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: '#4a7aff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <Check size={11} color="#fff" strokeWidth={3} />
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.65)',
                      lineHeight: '1.6'
                    }}
                  >
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom - Contact Info */}
          <div className="contact-info-section" style={{ position: 'relative', zIndex: 2 }}>
            <div
              style={{
                fontFamily: 'Geist Mono, monospace',
                fontSize: '9px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '12px'
              }}
            >
              CONTACT
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href="mailto:michael@getrelay.now"
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#ffffff',
                  textDecoration: 'none'
                }}
              >
                michael@getrelay.now
              </a>
              <div
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.4)'
                }}
              >
                Vancouver, BC
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div
          className="contact-right"
          style={{
            flex: 1,
            background: colors.bg,
            padding: '80px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderLeft: `1px solid ${colors.border}`
          }}
        >
          {!formSubmitted ? (
            <div style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
              {/* Form Header */}
              <div style={{ marginBottom: '40px' }}>
                <div
                  style={{
                    fontFamily: 'Geist Mono, monospace',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    color: colors.blue,
                    marginBottom: '16px'
                  }}
                >
                  — REQUEST ACCESS
                </div>
                <h2
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontWeight: 700,
                    fontSize: '28px',
                    color: colors.text,
                    marginBottom: '8px'
                  }}
                >
                  Tell us about your operation.
                </h2>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.text2
                  }}
                >
                  We&apos;ll follow up within one business day to set up a call.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* First and Last Name */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    style={{
                      fontFamily: 'Geist, sans-serif',
                      fontSize: '14px',
                      padding: '12px 16px',
                      border: `1px solid ${colors.border}`,
                      borderRadius: '0',
                      background: colors.bg,
                      color: colors.text,
                      transition: 'border-color 0.2s',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = colors.blue}
                    onBlur={(e) => e.currentTarget.style.borderColor = colors.border}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    style={{
                      fontFamily: 'Geist, sans-serif',
                      fontSize: '14px',
                      padding: '12px 16px',
                      border: `1px solid ${colors.border}`,
                      borderRadius: '0',
                      background: colors.bg,
                      color: colors.text,
                      transition: 'border-color 0.2s',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = colors.blue}
                    onBlur={(e) => e.currentTarget.style.borderColor = colors.border}
                  />
                </div>

                {/* Work Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontSize: '14px',
                    padding: '12px 16px',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '0',
                    background: colors.bg,
                    color: colors.text,
                    transition: 'border-color 0.2s',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = colors.blue}
                  onBlur={(e) => e.currentTarget.style.borderColor = colors.border}
                />

                {/* Company */}
                <input
                  type="text"
                  name="company"
                  placeholder="Company / Organization"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontSize: '14px',
                    padding: '12px 16px',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '0',
                    background: colors.bg,
                    color: colors.text,
                    transition: 'border-color 0.2s',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = colors.blue}
                  onBlur={(e) => e.currentTarget.style.borderColor = colors.border}
                />

                {/* Job Title */}
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title"
                  required
                  value={formData.jobTitle}
                  onChange={handleChange}
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontSize: '14px',
                    padding: '12px 16px',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '0',
                    background: colors.bg,
                    color: colors.text,
                    transition: 'border-color 0.2s',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = colors.blue}
                  onBlur={(e) => e.currentTarget.style.borderColor = colors.border}
                />

                {/* Daily Call Volume */}
                <div style={{ position: 'relative' }}>
                  <select
                    name="callVolume"
                    required
                    value={formData.callVolume}
                    onChange={handleChange}
                    style={{
                      fontFamily: 'Geist, sans-serif',
                      fontSize: '14px',
                      padding: '12px 16px',
                      paddingRight: '40px',
                      border: `1px solid ${colors.border}`,
                      borderRadius: '0',
                      background: colors.bg,
                      color: formData.callVolume ? colors.text : colors.text2,
                      transition: 'border-color 0.2s',
                      outline: 'none',
                      width: '100%',
                      appearance: 'none',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = colors.blue}
                    onBlur={(e) => e.currentTarget.style.borderColor = colors.border}
                  >
                    <option value="">Daily Call Volume</option>
                    <option value="under-500">Under 500</option>
                    <option value="500-2000">500–2,000</option>
                    <option value="2000-10000">2,000–10,000</option>
                    <option value="over-10000">Over 10,000</option>
                  </select>
                  <ChevronDown
                    size={16}
                    style={{
                      position: 'absolute',
                      right: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none',
                      color: colors.text2
                    }}
                  />
                </div>

                {/* Telephony Stack */}
                <div style={{ position: 'relative' }}>
                  <select
                    name="telephonyStack"
                    required
                    value={formData.telephonyStack}
                    onChange={handleChange}
                    style={{
                      fontFamily: 'Geist, sans-serif',
                      fontSize: '14px',
                      padding: '12px 16px',
                      paddingRight: '40px',
                      border: `1px solid ${colors.border}`,
                      borderRadius: '0',
                      background: colors.bg,
                      color: formData.telephonyStack ? colors.text : colors.text2,
                      transition: 'border-color 0.2s',
                      outline: 'none',
                      width: '100%',
                      appearance: 'none',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = colors.blue}
                    onBlur={(e) => e.currentTarget.style.borderColor = colors.border}
                  >
                    <option value="">Current Telephony Stack</option>
                    <option value="twilio">Twilio</option>
                    <option value="genesys">Genesys</option>
                    <option value="avaya">Avaya</option>
                    <option value="cisco">Cisco</option>
                    <option value="amazon-connect">Amazon Connect</option>
                    <option value="five9">Five9</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown
                    size={16}
                    style={{
                      position: 'absolute',
                      right: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none',
                      color: colors.text2
                    }}
                  />
                </div>

                {/* Notes */}
                <textarea
                  name="notes"
                  placeholder="Current AHT, main pain point, specific use case..."
                  value={formData.notes}
                  onChange={handleChange}
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontSize: '14px',
                    padding: '12px 16px',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '0',
                    background: colors.bg,
                    color: colors.text,
                    transition: 'border-color 0.2s',
                    outline: 'none',
                    minHeight: '100px',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = colors.blue}
                  onBlur={(e) => e.currentTarget.style.borderColor = colors.border}
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#fff',
                    background: colors.blue,
                    padding: '14px 0',
                    border: 'none',
                    borderRadius: '0',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.blueH;
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(43,91,232,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = colors.blue;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Send Request →
                </button>

                {/* Note */}
                <div
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Geist Mono, monospace',
                    fontSize: '10px',
                    color: colors.text3,
                    letterSpacing: '0.04em'
                  }}
                >
                  No commitment required · Design partner slots limited · Built in Vancouver, BC
                </div>
              </form>
            </div>
          ) : (
            // Success State
            <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: colors.blue,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}
              >
                <Check size={24} color="#fff" strokeWidth={3} />
              </div>
              <h2
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: colors.text,
                  marginBottom: '12px'
                }}
              >
                Request received.
              </h2>
              <p
                style={{
                  fontSize: '14px',
                  color: colors.text2,
                  lineHeight: '1.6'
                }}
              >
                We&apos;ll be in touch within one business day. In the meantime, explore the{' '}
                <a
                  href="/#roadmap"
                  style={{
                    color: colors.blue,
                    textDecoration: 'none'
                  }}
                >
                  roadmap
                </a>
                {' '}or{' '}
                <a
                  href="/#features"
                  style={{
                    color: colors.blue,
                    textDecoration: 'none'
                  }}
                >
                  feature list
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: `1px solid ${colors.border}`,
          padding: '28px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          background: colors.bg
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: 'Geist, sans-serif',
            fontWeight: 700,
            fontSize: '15px',
            letterSpacing: '-0.3px',
            color: colors.text,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none'
          }}
        >
          <div style={{ width: '20px', height: '20px', position: 'relative' }}>
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: '2px solid transparent',
                background: 'linear-gradient(135deg, #1A3FCC, #4a7aff, #7aa0ff, #1A3FCC) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'destination-out',
                maskComposite: 'exclude',
                position: 'absolute',
                inset: 0,
                transform: 'rotate(-20deg) scaleX(0.55)'
              }}
            />
            <div
              style={{
                width: '6px',
                height: '6px',
                background: colors.text3,
                borderRadius: '50%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
              }}
            />
          </div>
          RELAY
        </a>

        <div
          style={{
            fontFamily: 'Geist Mono, monospace',
            fontSize: '10px',
            color: colors.text3,
            letterSpacing: '0.04em'
          }}
        >
          © 2025 Relay Technologies Inc. · Vancouver, BC
        </div>

        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
          {[
            { href: '/contact', label: 'Contact' },
            { href: '/#roadmap', label: 'Roadmap' },
            { href: '/', label: 'Home' }
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: 'Geist Mono, monospace',
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: colors.text3,
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.blue)}
                onMouseLeave={(e) => (e.currentTarget.style.color = colors.text3)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
