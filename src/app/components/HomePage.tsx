import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mic,
  MessageSquare,
  Clock,
  Mail,
  Lock,
  BarChart3,
  Maximize2,
  Smartphone,
  Sparkles,
  FileText,
  Sun,
  Moon,
  Check
} from 'lucide-react';

export default function HomePage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('relay-theme');
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['problem', 'how', 'features', 'roadmap', 'who', 'contact'];
      let current = '';

      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 90) {
          current = id;
        }
      });

      setActiveSection(current);

      // Reveal animations
      document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight + 100) {
          el.classList.add('visible');
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const phrases = [
      "Every hold,",
      "Every caller,",
      "Every intake,",
      "Every wait,",
      "Every handoff,",
      "Dead air,",
      "The hold window,"
    ];

    let i = 0;
    let chars = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const el = document.getElementById('typewriter');
      if (!el) return;

      const phrase = phrases[i];
      if (!deleting) {
        chars++;
        el.textContent = phrase.slice(0, chars);
        if (chars === phrase.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 2000);
          return;
        }
        timeoutId = setTimeout(tick, 60);
      } else {
        chars--;
        el.textContent = phrase.slice(0, chars);
        if (chars === 0) {
          deleting = false;
          i = (i + 1) % phrases.length;
          timeoutId = setTimeout(tick, 400);
          return;
        }
        timeoutId = setTimeout(tick, 35);
      }
    };

    // Start typewriter after hero fade-in completes (~1100ms)
    const startTimeout = setTimeout(tick, 1100);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('relay-theme', newTheme);
  };

  const colors = theme === 'light' ? {
    bg: '#ffffff',
    bg2: '#f5f5f5',
    bg3: '#efefef',
    surface: '#ffffff',
    text: '#0a0a0f',
    text2: '#6b6b7b',
    text3: '#9a9aaa',
    blue: '#2B5BE8',
    blueH: '#1A3FCC',
    bluePale: '#EEF2FD',
    blueMid: '#c7d4f9',
    border: '#e5e5ea',
    border2: '#d0d0da',
    navBg: 'rgba(255,255,255,0.92)',
    navBorder: '#e5e5ea',
    ctaBg: '#080f1e',
    ctaText: '#f0f0f4',
    ctaSub: 'rgba(255,255,255,0.45)',
  } : {
    bg: '#0a0a0f',
    bg2: '#111118',
    bg3: '#18181f',
    surface: '#0a0a0f',
    text: '#f0f0f4',
    text2: '#a0a0b0',
    text3: '#505060',
    blue: '#4a7aff',
    blueH: '#6b94ff',
    bluePale: '#0d1a3a',
    blueMid: '#1a2f5a',
    border: 'rgba(255,255,255,0.07)',
    border2: 'rgba(255,255,255,0.13)',
    navBg: 'rgba(10,10,15,0.9)',
    navBorder: 'rgba(255,255,255,0.07)',
    ctaBg: '#060810',
    ctaText: '#f0f0f4',
    ctaSub: 'rgba(255,255,255,0.38)',
  };

  return (
    <div style={{ backgroundColor: colors.bg, color: colors.text, transition: 'background 0.3s, color 0.3s' }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rmPulse {
          0%, 100% { box-shadow: 0 0 0 5px rgba(43,91,232,0.12); }
          50% { box-shadow: 0 0 0 9px rgba(43,91,232,0.05); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 {
          transition-delay: 0.1s;
        }
        .cursor {
          display: inline-block;
          width: 3px;
          height: 0.85em;
          background: ${colors.blue};
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 530ms step-end infinite;
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
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex" style={{ display: 'flex', gap: '28px', listStyle: 'none', alignItems: 'center' }}>
          {[
            { href: '#problem', label: 'Problem' },
            { href: '#how', label: 'How It Works' },
            { href: '#features', label: 'Features' },
            { href: '#roadmap', label: 'Roadmap' },
            { href: '#who', label: "Who It's For" }
          ].map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(link.href.slice(1));
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
                style={{
                  fontSize: '13px',
                  color: activeSection === link.href.slice(1) ? colors.blue : colors.text2,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                  fontWeight: activeSection === link.href.slice(1) ? 500 : 400,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.text}
                onMouseLeave={(e) => e.currentTarget.style.color = activeSection === link.href.slice(1) ? colors.blue : colors.text2}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
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
              e.currentTarget.style.background = colors.bg2;
              e.currentTarget.style.color = colors.text;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = colors.text2;
            }}
          >
            {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* CTA */}
          <a
            href="/contact"
            className="hidden md:inline-flex"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              color: '#fff',
              background: colors.blue,
              padding: '8px 18px',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.2s, transform 0.15s',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = colors.blueH;
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = colors.blue;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Request Access
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            style={{
              display: 'none',
              width: '36px',
              height: '36px',
              background: 'transparent',
              border: `1px solid ${colors.border2}`,
              cursor: 'pointer',
              borderRadius: '6px',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px'
            }}
          >
            <span style={{
              display: 'block',
              width: '18px',
              height: '1.5px',
              background: colors.text2,
              borderRadius: '2px',
              transition: 'all 0.25s ease',
              transform: mobileMenuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none'
            }} />
            <span style={{
              display: 'block',
              width: '18px',
              height: '1.5px',
              background: colors.text2,
              borderRadius: '2px',
              transition: 'all 0.25s ease',
              opacity: mobileMenuOpen ? 0 : 1,
              transform: mobileMenuOpen ? 'scaleX(0)' : 'none'
            }} />
            <span style={{
              display: 'block',
              width: '18px',
              height: '1.5px',
              background: colors.text2,
              borderRadius: '2px',
              transition: 'all 0.25s ease',
              transform: mobileMenuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none'
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          zIndex: 299,
          background: colors.navBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${colors.navBorder}`,
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}>
          {[
            { href: '#problem', label: 'Problem' },
            { href: '#how', label: 'How It Works' },
            { href: '#features', label: 'Features' },
            { href: '#roadmap', label: 'Roadmap' },
            { href: '#who', label: "Who It's For" }
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                const el = document.getElementById(link.href.slice(1));
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                fontSize: '15px',
                color: activeSection === link.href.slice(1) ? colors.blue : colors.text2,
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: `1px solid ${colors.border}`,
                transition: 'color 0.2s',
                cursor: 'pointer'
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              marginTop: '12px',
              display: 'block',
              textAlign: 'center',
              fontWeight: 500,
              fontSize: '14px',
              color: '#fff',
              background: colors.blue,
              padding: '12px',
              borderBottom: 'none',
              cursor: 'pointer'
            }}
          >
            Request Access
          </a>
        </div>
      )}

      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '100px 48px 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Dot Grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle, ${colors.border2} 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(0,0,0,0.5) 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(0,0,0,0.5) 0%, transparent 100%)',
          pointerEvents: 'none'
        }} />

        {/* Glow */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(43,91,232,0.07) 0%, transparent 65%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1080px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'Geist Mono, monospace',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: colors.blue,
            marginBottom: '28px',
            opacity: 0,
            animation: 'fadeUp 0.8s ease 0s forwards'
          }}>
            <div style={{ width: '20px', height: '1.5px', background: colors.blue }} />
            Early Access · AI Voice Infrastructure
          </div>

          <h1 style={{
            fontFamily: 'Geist, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(52px, 7vw, 96px)',
            lineHeight: '0.96',
            letterSpacing: '-0.04em',
            color: colors.text,
            marginBottom: '28px',
            opacity: 0,
            animation: 'fadeUp 0.9s ease 0.15s forwards',
            minHeight: 'calc(0.96 * 2 * clamp(52px, 7vw, 96px))'
          }}>
            <span id="typewriter"></span><span className="cursor"></span><br />
            <em style={{
              fontStyle: 'italic',
              fontFamily: 'Instrument Serif, serif',
              fontWeight: 400,
              color: colors.blue,
              letterSpacing: '-0.02em'
            }}>handled.</em>
          </h1>

          <p style={{
            fontSize: '17px',
            color: colors.text2,
            maxWidth: '500px',
            lineHeight: '1.7',
            marginBottom: '44px',
            opacity: 0,
            animation: 'fadeUp 0.9s ease 0.3s forwards'
          }}>
            Relay deploys an AI voice agent the moment a customer is placed on hold — collecting intake, answering questions, and delivering a structured handoff brief to your agent at connection.
          </p>

          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '72px',
            opacity: 0,
            animation: 'fadeUp 0.9s ease 0.45s forwards'
          }}>
            <a href="/contact"
              style={{
              fontFamily: 'Geist, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#fff',
              background: colors.blue,
              padding: '13px 28px',
              textDecoration: 'none',
              border: `1.5px solid ${colors.blue}`,
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'inline-block'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = colors.blueH;
                e.currentTarget.style.borderColor = colors.blueH;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(43,91,232,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = colors.blue;
                e.currentTarget.style.borderColor = colors.blue;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Request Early Access
            </a>
            <a href="#how"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('how');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
              fontFamily: 'Geist, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: colors.text2,
              background: 'transparent',
              padding: '13px 28px',
              textDecoration: 'none',
              border: `1.5px solid ${colors.border2}`,
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'inline-block'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.text2;
                e.currentTarget.style.color = colors.text;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.border2;
                e.currentTarget.style.color = colors.text2;
              }}
            >
              See How It Works
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex',
            borderTop: `1px solid ${colors.border}`,
            paddingTop: '40px',
            opacity: 0,
            animation: 'fadeUp 0.9s ease 0.6s forwards'
          }}>
            {[
              { num: '68', unit: '%', label: 'of customers hang up before an agent answers' },
              { num: '13', unit: ' min', label: 'average hold time across contact centers' },
              { num: '0', unit: ' sec', label: 'of hold time currently used to collect intake' }
            ].map((stat, i, arr) => (
              <div key={i} style={{
                flex: 1,
                paddingRight: i < arr.length - 1 ? '40px' : 0,
                borderRight: i < arr.length - 1 ? `1px solid ${colors.border}` : 'none',
                marginRight: i < arr.length - 1 ? '40px' : 0
              }}>
                <div style={{
                  fontFamily: 'Geist, sans-serif',
                  fontWeight: 800,
                  fontSize: '36px',
                  letterSpacing: '-0.04em',
                  color: colors.text,
                  lineHeight: '1',
                  marginBottom: '6px'
                }}>
                  <span style={{ color: colors.blue }}>{stat.num}</span>{stat.unit === '%' ? '%' : stat.unit}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: colors.text3,
                  lineHeight: '1.5',
                  maxWidth: '160px'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: '1px', background: colors.border }} />

      {/* Problem Section */}
      <section id="problem">
        <div style={{ padding: '112px 48px', maxWidth: '1080px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '64px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'Geist Mono, monospace',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: colors.blue,
              marginBottom: '28px'
            }}>
              <div style={{ width: '20px', height: '1.5px', background: colors.blue }} />
              The Problem
            </div>
            <h2 style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              letterSpacing: '-0.035em',
              color: colors.text,
              lineHeight: '1.05',
              marginBottom: '16px'
            }}>
              Hold time is dead air.<br />It does not have to be.
            </h2>
            <p style={{
              fontSize: '16px',
              color: colors.text2,
              lineHeight: '1.75',
              maxWidth: '480px'
            }}>
              Every minute on hold is unproductive for the customer and costly for your operation. When an agent finally connects, they start from zero.
            </p>
          </div>

          <div className="reveal reveal-delay-1" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: colors.border,
            border: `1px solid ${colors.border}`
          }}>
            {[
              {
                num: '01',
                title: 'The repeat explanation tax',
                text: 'Customers re-explain their issue to every touchpoint — IVR, agent, escalation. Each handoff erases context and burns time. Agents start cold on every call.'
              },
              {
                num: '02',
                title: 'Hold time is a black hole',
                text: '13 minutes of average hold time generates zero business value today. Customers disengage, abandonment climbs, and there is no mechanism to capture intent during the wait.'
              },
              {
                num: '03',
                title: 'Agents inherit chaos',
                text: 'When connection finally happens, agents scramble — account lookup, reason for call, urgency level. The first few minutes of every call are pure administrative overhead.'
              },
              {
                num: '04',
                title: 'AHT is a blunt lever',
                text: 'Average Handle Time is the core efficiency metric. Most reduction efforts focus on post-connection speed. Relay attacks the pre-connection window nobody else has touched.'
              }
            ].map((item, i) => (
              <div key={i} style={{
                background: colors.surface,
                padding: '44px 40px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.2s'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.bg2;
                  const bar = e.currentTarget.querySelector('.hover-bar') as HTMLElement;
                  if (bar) bar.style.transform = 'scaleY(1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.surface;
                  const bar = e.currentTarget.querySelector('.hover-bar') as HTMLElement;
                  if (bar) bar.style.transform = 'scaleY(0)';
                }}
              >
                <div className="hover-bar" style={{
                  content: '',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '3px',
                  background: colors.blue,
                  transform: 'scaleY(0)',
                  transformOrigin: 'bottom',
                  transition: 'transform 0.35s ease'
                }} />
                <div style={{
                  fontFamily: 'Geist Mono, monospace',
                  fontSize: '11px',
                  color: colors.text3,
                  letterSpacing: '0.1em',
                  marginBottom: '20px'
                }}>{item.num}</div>
                <div style={{
                  fontFamily: 'Geist, sans-serif',
                  fontWeight: 700,
                  fontSize: '17px',
                  color: colors.text,
                  marginBottom: '10px',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.3'
                }}>{item.title}</div>
                <div style={{
                  fontSize: '14px',
                  color: colors.text2,
                  lineHeight: '1.7'
                }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <div id="how" style={{
        background: colors.bg2,
        borderTop: `1px solid ${colors.border}`,
        borderBottom: `1px solid ${colors.border}`,
        transition: 'background 0.3s'
      }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '112px 48px' }}>
          <div className="reveal" style={{ marginBottom: '64px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'Geist Mono, monospace',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: colors.blue,
              marginBottom: '28px'
            }}>
              <div style={{ width: '20px', height: '1.5px', background: colors.blue }} />
              How It Works
            </div>
            <h2 style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              letterSpacing: '-0.035em',
              color: colors.text,
              lineHeight: '1.05',
              marginBottom: '16px'
            }}>
              Four steps. Zero friction.
            </h2>
            <p style={{
              fontSize: '16px',
              color: colors.text2,
              lineHeight: '1.75',
              maxWidth: '480px'
            }}>
              Relay intercepts hold time the moment it starts — no change to your existing call flow, no new hardware required.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '22px',
              left: '28px',
              right: '28px',
              height: '1px',
              background: colors.border2,
              zIndex: 0
            }} />

            <div className="reveal reveal-delay-1" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 0,
              position: 'relative',
              marginTop: '64px'
            }}>
              {[
                {
                  step: '01',
                  icon: Phone,
                  title: 'Customer calls in',
                  text: 'Your existing IVR routes the call as normal. When the customer enters a hold queue, Relay activates automatically via Twilio.'
                },
                {
                  step: '02',
                  icon: Mic,
                  title: 'Relay takes the hold',
                  text: 'Our AI voice agent greets the caller, confirms their reason for calling, and collects structured intake through natural conversation.'
                },
                {
                  step: '03',
                  icon: MessageSquare,
                  title: 'Brief is generated',
                  text: 'Relay compiles a structured handoff brief — issue category, urgency, account details, and sentiment — ready at connection.'
                },
                {
                  step: '04',
                  icon: Clock,
                  title: 'Agent connects, informed',
                  text: 'At connection, the brief surfaces instantly. The agent already knows who they are talking to and why. The call starts at resolution.'
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{
                    padding: i === 3 ? 0 : '0 28px 0 0',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: colors.blue,
                      marginBottom: '28px',
                      position: 'relative',
                      zIndex: 2,
                      boxShadow: `0 0 0 4px ${colors.bluePale}`
                    }} />
                    <div style={{
                      fontFamily: 'Geist Mono, monospace',
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      color: colors.blue,
                      marginBottom: '12px'
                    }}>{item.step}</div>
                    <div style={{ marginBottom: '14px', display: 'block', width: '22px', height: '22px' }}>
                      <Icon size={22} color={colors.text2} strokeWidth={1.5} />
                    </div>
                    <div style={{
                      fontFamily: 'Geist, sans-serif',
                      fontWeight: 700,
                      fontSize: '15px',
                      color: colors.text,
                      marginBottom: '8px',
                      letterSpacing: '-0.02em',
                      lineHeight: '1.3'
                    }}>{item.title}</div>
                    <div style={{
                      fontSize: '13px',
                      color: colors.text2,
                      lineHeight: '1.65'
                    }}>{item.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section id="features">
        <div style={{ padding: '112px 48px', maxWidth: '1080px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '64px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'Geist Mono, monospace',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: colors.blue,
              marginBottom: '28px'
            }}>
              <div style={{ width: '20px', height: '1.5px', background: colors.blue }} />
              Features
            </div>
            <h2 style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              letterSpacing: '-0.035em',
              color: colors.text,
              lineHeight: '1.05',
              marginBottom: '16px'
            }}>
              Built for production-grade<br />contact center environments.
            </h2>
          </div>

          <div className="reveal reveal-delay-1" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: colors.border,
            border: `1px solid ${colors.border}`,
            marginTop: '64px'
          }}>
            {[
              {
                icon: Mic,
                title: 'Realtime Voice AI',
                text: 'Powered by OpenAI\'s Realtime API with ultra-low latency. Natural, conversational — callers feel heard from the first second.',
                status: 'Live',
                statusType: 'live'
              },
              {
                icon: FileText,
                title: 'Structured Handoff Briefs',
                text: 'Every call produces a brief: intent, account info, issue category, urgency score, and summary — delivered at agent connection.',
                status: 'In Development',
                statusType: 'dev'
              },
              {
                icon: Phone,
                title: 'Twilio Integration',
                text: 'Built natively on Twilio\'s voice infrastructure. Plugs into existing call center stacks with no telephony changes required.',
                status: 'Live',
                statusType: 'live'
              },
              {
                icon: Mail,
                title: 'Brief Email Delivery',
                text: 'Briefs delivered to agent dashboards and supervisors via email at moment of connection — powered by Resend.',
                status: 'In Development',
                statusType: 'dev'
              },
              {
                icon: Lock,
                title: 'Opt-Out & Compliance',
                text: 'Callers can exit the AI session at any moment. Full disclosure framing and configurable recording policies built in.',
                status: 'In Development',
                statusType: 'dev'
              },
              {
                icon: BarChart3,
                title: 'AHT Analytics Dashboard',
                text: 'Track handle time reduction, call abandonment rates, intake accuracy, and agent ramp time across every session.',
                status: 'Roadmap Q3',
                statusType: 'road'
              },
              {
                icon: Maximize2,
                title: 'CRM Webhooks',
                text: 'Structured brief data pushed to Salesforce, Zendesk, ServiceNow, or any CRM via webhook. No manual data entry.',
                status: 'Roadmap Q4',
                statusType: 'road'
              },
              {
                icon: Smartphone,
                title: 'SMS Hold Confirmation',
                text: 'Send callers an SMS with estimated wait time and a link to continue intake on mobile — reducing abandonment further.',
                status: 'Roadmap Q4',
                statusType: 'road'
              },
              {
                icon: Sparkles,
                title: 'Pattern Intelligence',
                text: 'Relay learns from every brief — surfacing recurring issues, predicting caller intent, and resolving common queries autonomously.',
                status: 'Long-Term Vision',
                statusType: 'vision'
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              let statusStyle = {};

              if (feature.statusType === 'live') {
                statusStyle = {
                  color: colors.blue,
                  background: colors.bluePale,
                  border: `1px solid ${colors.blueMid}`,
                  borderRadius: '2px'
                };
              } else if (feature.statusType === 'dev') {
                statusStyle = {
                  color: colors.text2,
                  background: colors.bg2,
                  border: `1px solid ${colors.border2}`,
                  borderRadius: '2px'
                };
              } else if (feature.statusType === 'road') {
                statusStyle = {
                  color: colors.text3,
                  background: 'transparent',
                  border: `1px solid ${colors.border2}`,
                  borderRadius: '2px'
                };
              } else {
                statusStyle = {
                  color: colors.text3,
                  opacity: 0.7,
                  background: 'transparent',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '2px'
                };
              }

              return (
                <div key={i} style={{
                  background: colors.surface,
                  padding: '36px 32px',
                  transition: 'background 0.2s'
                }}
                  onMouseEnter={(e) => e.currentTarget.style.background = colors.bg2}
                  onMouseLeave={(e) => e.currentTarget.style.background = colors.surface}
                >
                  <div style={{ marginBottom: '20px', display: 'block', width: '20px', height: '20px' }}>
                    <Icon size={20} color={colors.text2} strokeWidth={1.5} />
                  </div>
                  <div style={{
                    fontFamily: 'Geist, sans-serif',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: colors.text,
                    marginBottom: '8px',
                    letterSpacing: '-0.02em'
                  }}>{feature.title}</div>
                  <div style={{
                    fontSize: '13px',
                    color: colors.text2,
                    lineHeight: '1.65',
                    marginBottom: '16px'
                  }}>{feature.text}</div>
                  <div style={{
                    display: 'inline-block',
                    fontFamily: 'Geist Mono, monospace',
                    fontSize: '9px',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '3px 8px',
                    ...statusStyle
                  }}>
                    {feature.status}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <div id="roadmap" style={{
        background: colors.bg2,
        borderTop: `1px solid ${colors.border}`,
        borderBottom: `1px solid ${colors.border}`,
        transition: 'background 0.3s'
      }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '112px 48px' }}>
          <div className="reveal" style={{ marginBottom: '64px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'Geist Mono, monospace',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: colors.blue,
              marginBottom: '28px'
            }}>
              <div style={{ width: '20px', height: '1.5px', background: colors.blue }} />
              Roadmap
            </div>
            <h2 style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              letterSpacing: '-0.035em',
              color: colors.text,
              lineHeight: '1.05',
              marginBottom: '16px'
            }}>
              Where we are.<br />Where we are going.
            </h2>
            <p style={{
              fontSize: '16px',
              color: colors.text2,
              lineHeight: '1.75',
              maxWidth: '480px'
            }}>
              Relay is in active development. Core pipeline is functional — hardening the product and signing first design partners now.
            </p>
          </div>

          <div className="reveal reveal-delay-1" style={{ marginTop: '72px', position: 'relative' }}>
            {/* Timeline Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              position: 'relative',
              marginBottom: '40px'
            }}>
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                right: '16px',
                height: '1px',
                background: colors.border2
              }} />
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                width: 'calc(20% + 16px)',
                height: '1px',
                background: colors.blue
              }} />

              {['done', 'active', 'future', 'future', 'future'].map((status, i) => (
                <div key={i} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    flexShrink: 0,
                    ...(status === 'done' ? {
                      background: colors.blue,
                      boxShadow: `0 0 0 3px ${colors.bluePale}`
                    } : status === 'active' ? {
                      background: colors.surface,
                      border: `2px solid ${colors.blue}`,
                      boxShadow: `0 0 0 5px ${colors.bluePale}`,
                      animation: 'rmPulse 2s ease-in-out infinite'
                    } : {
                      background: colors.surface,
                      border: `1.5px solid ${colors.text3}`
                    })
                  }} />
                </div>
              ))}
            </div>

            {/* Roadmap Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '1px',
              background: colors.border,
              border: `1px solid ${colors.border}`
            }}>
              {[
                {
                  phase: 'PHASE 1 · Complete',
                  phaseStatus: 'done',
                  title: 'Core Infrastructure',
                  titleMuted: false,
                  items: [
                    { text: 'Twilio voice pipeline', done: true },
                    { text: 'OpenAI Realtime API', done: true },
                    { text: 'Redis session management', done: true },
                    { text: 'Marketing site live', done: true },
                    { text: 'NVBC application submitted', done: true }
                  ],
                  badge: null,
                  activeCard: false
                },
                {
                  phase: 'PHASE 2 · Now',
                  phaseStatus: 'active',
                  title: 'Product Completion',
                  titleMuted: false,
                  items: [
                    { text: 'Session state handling', done: false },
                    { text: 'Handoff brief generation', done: false },
                    { text: 'Email delivery via Resend', done: false },
                    { text: 'VAD & echo tuning', done: false },
                    { text: 'Opt-out flows', done: false }
                  ],
                  badge: { text: 'In Progress', type: 'now' },
                  activeCard: true
                },
                {
                  phase: 'PHASE 3 · Q3 2025',
                  phaseStatus: 'future',
                  title: 'Design Partner Pilots',
                  titleMuted: true,
                  items: [
                    { text: '2–3 pilot deployments', done: false },
                    { text: 'AHT measurement baseline', done: false },
                    { text: 'Agent dashboard v1', done: false },
                    { text: 'Feedback loop integration', done: false }
                  ],
                  badge: { text: 'Upcoming', type: 'soon' },
                  activeCard: false
                },
                {
                  phase: 'PHASE 4 · Q4 2025',
                  phaseStatus: 'future',
                  title: 'Commercial Launch',
                  titleMuted: true,
                  items: [
                    { text: 'CRM webhook connectors', done: false },
                    { text: 'Analytics dashboard', done: false },
                    { text: 'Pricing tiers live', done: false },
                    { text: 'SMS hold UX', done: false }
                  ],
                  badge: { text: 'Upcoming', type: 'soon' },
                  activeCard: false
                },
                {
                  phase: 'PHASE 5 · 2026',
                  phaseStatus: 'future',
                  title: 'Intelligent Resolution',
                  titleMuted: true,
                  items: [
                    { text: 'Pattern recognition engine', done: false },
                    { text: 'Intent prediction from caller ID', done: false },
                    { text: 'Autonomous resolution layer', done: false },
                    { text: 'Enterprise integrations', done: false }
                  ],
                  badge: { text: 'Vision', type: 'soon' },
                  activeCard: false
                }
              ].map((phase, i) => (
                <div key={i} style={{
                  background: phase.activeCard ? colors.bluePale : colors.surface,
                  padding: '28px 24px',
                  transition: 'background 0.3s'
                }}>
                  <div style={{
                    fontFamily: 'Geist Mono, monospace',
                    fontSize: '9px',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                    color: phase.phaseStatus === 'future' ? colors.text3 : colors.blue
                  }}>{phase.phase}</div>
                  <div style={{
                    fontFamily: 'Geist, sans-serif',
                    fontWeight: 700,
                    fontSize: '13px',
                    color: phase.titleMuted ? colors.text3 : colors.text,
                    marginBottom: '14px',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.3'
                  }}>{phase.title}</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {phase.items.map((item, j) => (
                      <li key={j} style={{
                        fontSize: '11px',
                        color: item.done ? colors.text3 : colors.text2,
                        lineHeight: '1.5',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6px'
                      }}>
                        {item.done ? (
                          <span style={{ color: colors.blue, fontSize: '9px', marginTop: '2px' }}>✓</span>
                        ) : (
                          <span style={{ color: colors.text3 }}>·</span>
                        )}
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  {phase.badge && (
                    <div style={{
                      display: 'inline-block',
                      marginTop: '14px',
                      fontFamily: 'Geist Mono, monospace',
                      fontSize: '8px',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '3px 8px',
                      borderRadius: '2px',
                      ...(phase.badge.type === 'now' ? {
                        color: colors.blue,
                        background: colors.bluePale,
                        border: `1px solid ${colors.blueMid}`
                      } : {
                        color: colors.text3,
                        background: 'transparent',
                        border: `1px solid ${colors.border2}`
                      })
                    }}>
                      {phase.badge.text}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Who It's For */}
      <section id="who">
        <div style={{ padding: '112px 48px', maxWidth: '1080px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '64px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'Geist Mono, monospace',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: colors.blue,
              marginBottom: '28px'
            }}>
              <div style={{ width: '20px', height: '1.5px', background: colors.blue }} />
              Who It&apos;s For
            </div>
            <h2 style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              letterSpacing: '-0.035em',
              color: colors.text,
              lineHeight: '1.05',
              marginBottom: '16px'
            }}>
              One platform.<br />Three stakeholders win.
            </h2>
            <p style={{
              fontSize: '16px',
              color: colors.text2,
              lineHeight: '1.75',
              maxWidth: '480px'
            }}>
              Relay creates measurable value at every layer of the contact center ecosystem.
            </p>
          </div>

          <div className="reveal reveal-delay-1" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            marginTop: '64px',
            borderTop: `1px solid ${colors.border}`,
            borderBottom: `1px solid ${colors.border}`
          }}>
            {[
              {
                audience: 'Telecoms & Call Centers',
                title: 'Cut handle time. Increase throughput.',
                benefits: [
                  'Eliminate the intake phase from agent handle time',
                  'Lower call abandonment with an engaged hold experience',
                  'Agents connect fully briefed — resolution starts at second one',
                  'No infrastructure changes required',
                  'Measurable ROI from day one of deployment'
                ]
              },
              {
                audience: 'Callers',
                title: 'Hold time that actually helps.',
                benefits: [
                  'Speak to someone from the moment hold begins',
                  'No repeating yourself when the agent connects',
                  'Faster resolution — agent already knows your issue',
                  'Opt out at any moment — always in control',
                  'A hold experience that respects your time'
                ]
              },
              {
                audience: 'Supervisors & Ops',
                title: 'Visibility before the call begins.',
                benefits: [
                  'Structured briefs surface issue patterns across call volume',
                  'Identify recurring contact reasons — fix them upstream',
                  'Sentiment scoring flags at-risk calls before connection',
                  'Every session logged, exportable, and CRM-ready',
                  'Reduce agent training burden with richer pre-call context'
                ]
              }
            ].map((col, i, arr) => (
              <div key={i} style={{
                padding: i === 0 ? '48px 40px 48px 0' : i === arr.length - 1 ? '48px 0 48px 40px' : '48px 40px',
                borderRight: i < arr.length - 1 ? `1px solid ${colors.border}` : 'none'
              }}>
                <div style={{
                  fontFamily: 'Geist Mono, monospace',
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: colors.blue,
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{ width: '14px', height: '1.5px', background: colors.blue }} />
                  {col.audience}
                </div>
                <div style={{
                  fontFamily: 'Geist, sans-serif',
                  fontWeight: 800,
                  fontSize: '20px',
                  letterSpacing: '-0.03em',
                  color: colors.text,
                  marginBottom: '20px',
                  lineHeight: '1.2'
                }}>{col.title}</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {col.benefits.map((benefit, j) => (
                    <li key={j} style={{
                      fontSize: '13px',
                      color: colors.text2,
                      lineHeight: '1.6',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px'
                    }}>
                      <span style={{ color: colors.blue, fontSize: '11px', flexShrink: 0, marginTop: '2px' }}>→</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{
        background: colors.ctaBg,
        padding: '140px 48px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderTop: `1px solid ${colors.border}`
      }}>
        <div style={{
          position: 'absolute',
          top: '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(74,122,255,0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            fontFamily: 'Geist Mono, monospace',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: colors.blue,
            marginBottom: '28px'
          }}>
            <div style={{ width: '20px', height: '1.5px', background: colors.blue }} />
            Early Access
          </div>

          <h2 style={{
            fontFamily: 'Geist, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 64px)',
            letterSpacing: '-0.04em',
            color: colors.ctaText,
            lineHeight: '1.0',
            marginBottom: '20px'
          }}>
            Ready to reclaim<br />the hold window?
          </h2>

          <p style={{
            fontSize: '16px',
            color: colors.ctaSub,
            marginBottom: '44px',
            lineHeight: '1.7'
          }}>
            We are signing our first design partners now.<br />If you run a contact center — let us talk.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <a href="/contact" style={{
              fontFamily: 'Geist, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#fff',
              background: colors.blue,
              padding: '13px 28px',
              textDecoration: 'none',
              border: `1.5px solid ${colors.blue}`,
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'inline-block'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = colors.blueH;
                e.currentTarget.style.borderColor = colors.blueH;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(43,91,232,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = colors.blue;
                e.currentTarget.style.borderColor = colors.blue;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get in Touch
            </a>
          </div>

          <p style={{
            marginTop: '28px',
            fontFamily: 'Geist Mono, monospace',
            fontSize: '10px',
            letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.25)'
          }}>
            No commitment required · Design partner slots limited · Built in Vancouver, BC
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: `1px solid ${colors.border}`,
        padding: '28px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{
          fontFamily: 'Geist, sans-serif',
          fontWeight: 700,
          fontSize: '15px',
          letterSpacing: '-0.3px',
          color: colors.text,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none'
        }}>
          <div style={{ width: '20px', height: '20px', position: 'relative' }}>
            <div style={{
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
            }} />
            <div style={{
              width: '6px',
              height: '6px',
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

        <div style={{
          fontFamily: 'Geist Mono, monospace',
          fontSize: '10px',
          color: colors.text3,
          letterSpacing: '0.04em'
        }}>
          © 2025 Relay Technologies Inc. · Vancouver, BC
        </div>

        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
          {[
            { href: 'mailto:michael@getrelay.now', label: 'Contact', isEmail: true },
            { href: '#roadmap', label: 'Roadmap', isEmail: false }
          ].map(link => (
            <li key={link.href}>
              <a href={link.href}
                onClick={(e) => {
                  if (!link.isEmail) {
                    e.preventDefault();
                    const el = document.getElementById(link.href.slice(1));
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                style={{
                fontFamily: 'Geist Mono, monospace',
                fontSize: '10px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: colors.text3,
                textDecoration: 'none',
                transition: 'color 0.2s',
                cursor: 'pointer'
              }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.blue}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.text3}
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
