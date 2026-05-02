import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personal, techStack } from '../data/portfolio';
import { ArrowDown, Mail, Phone, Sparkles } from 'lucide-react';
import { GMAIL_COMPOSE, PHONE_HREF, EMAIL, PHONE } from '../data/links';

const TITLES = [
  'Flutter Developer',
  'Full Stack Engineer',
  'Mobile App Architect',
  'Backend Developer',
  'Product Builder',
];

function TypeWriter() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[idx];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <span style={{ color: '#00d4ff' }}>
      {displayed}
      <span style={{
        display: 'inline-block', width: 2, height: '1em',
        background: '#00d4ff', marginLeft: 2, verticalAlign: 'text-bottom',
        animation: 'pulseDot 0.8s infinite',
      }} />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '6rem 2rem 4rem', textAlign: 'center',
    }}>
      {/* ── Background layers ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* Radial gradient base */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.18) 0%, transparent 60%)',
        }} />

        {/* Animated blobs */}
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '5%', left: '5%',
            width: 600, height: 600, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.10) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }}
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 70, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          style={{
            position: 'absolute', bottom: '5%', right: '5%',
            width: 700, height: 700, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }}
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          style={{
            position: 'absolute', top: '40%', right: '20%',
            width: 300, height: 300, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }} />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: `${5 + (i * 4.7) % 90}%`,
              top: `${10 + (i * 7.3) % 80}%`,
              width: i % 3 === 0 ? 3 : 2,
              height: i % 3 === 0 ? 3 : 2,
              borderRadius: '50%',
              background: i % 2 === 0 ? '#00d4ff' : '#7c3aed',
              boxShadow: `0 0 6px ${i % 2 === 0 ? '#00d4ff' : '#7c3aed'}`,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 860 }}>
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '7px 18px', borderRadius: '100px',
            border: '1px solid rgba(0,212,255,0.25)',
            background: 'rgba(0,212,255,0.06)',
            backdropFilter: 'blur(10px)',
            marginBottom: '2rem',
            fontSize: '13px', color: '#00d4ff', fontWeight: 500,
          }}
        >
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#00d4ff', boxShadow: '0 0 10px #00d4ff',
            animation: 'pulseDot 1.5s infinite',
          }} />
          <Sparkles size={13} />
          Available for freelance projects
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(3.5rem, 9vw, 7rem)',
            fontWeight: 900, lineHeight: 1.0,
            letterSpacing: '-4px', marginBottom: '1.25rem',
          }}
        >
          Hi, I'm{' '}
          <span className="grad-text">Vishal</span>
        </motion.h1>

        {/* Typewriter title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.75rem)',
            marginBottom: '1.5rem', fontWeight: 300,
            color: '#9ca3af', minHeight: '2.2rem',
          }}
        >
          <TypeWriter />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.1rem)',
            color: '#4b5563', maxWidth: 540,
            margin: '0 auto 2.5rem', lineHeight: 1.8,
          }}
        >
          {personal.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}
        >
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(0,212,255,0.45), 0 0 80px rgba(124,58,237,0.2)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '15px 36px', borderRadius: '14px',
              background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
              border: 'none', color: '#fff', fontWeight: 700, fontSize: '15px',
              letterSpacing: '0.3px', boxShadow: '0 0 20px rgba(0,212,255,0.25)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>View My Work →</span>
          </motion.button>

          <motion.a
            href={GMAIL_COMPOSE}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, borderColor: 'rgba(0,212,255,0.4)', background: 'rgba(0,212,255,0.06)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '15px 36px', borderRadius: '14px',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(10px)',
              color: '#e8e8f0', fontWeight: 600, fontSize: '15px',
              display: 'flex', alignItems: 'center', gap: '8px',
              transition: 'all 0.3s',
            }}
          >
            <Mail size={16} /> Get In Touch
          </motion.a>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {[
            { icon: <Mail size={13} />, text: EMAIL, href: GMAIL_COMPOSE, external: true },
            { icon: <Phone size={13} />, text: PHONE, href: PHONE_HREF },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                color: '#374151', fontSize: '13px', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#00d4ff'}
              onMouseLeave={e => e.currentTarget.style.color = '#374151'}
            >
              {item.icon} {item.text}
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── Marquee tech stack ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ position: 'relative', zIndex: 1, marginTop: '5rem', width: '100%', overflow: 'hidden' }}
      >
        <p style={{
          textAlign: 'center', color: '#2d3748', fontSize: '11px',
          marginBottom: '1.25rem', letterSpacing: '3px', textTransform: 'uppercase',
        }}>
          Tech Stack
        </p>
        {/* Fade edges */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, zIndex: 2,
            background: 'linear-gradient(90deg, var(--bg), transparent)',
          }} />
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, zIndex: 2,
            background: 'linear-gradient(-90deg, var(--bg), transparent)',
          }} />
          <div style={{ overflow: 'hidden' }}>
            <div className="marquee-track">
              {[...techStack, ...techStack].map((t, i) => (
                <div key={i} style={{
                  flexShrink: 0, margin: '0 0.5rem',
                  padding: '7px 16px', borderRadius: '100px',
                  border: `1px solid ${t.color}25`,
                  background: `${t.color}08`,
                  color: t.color, fontSize: '12px', fontWeight: 600,
                  display: 'flex', alignItems: 'center', gap: '6px',
                  whiteSpace: 'nowrap',
                }}>
                  <span>{t.icon}</span> {t.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          cursor: 'pointer', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        }}
      >
        <span style={{ color: '#2d3748', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(180deg, #00d4ff, transparent)',
        }} />
      </motion.div>
    </section>
  );
}
