import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GMAIL_COMPOSE } from '../data/links';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Services', 'Testimonials', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '0 2rem', height: '64px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(5,5,13,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div style={{
            width: 38, height: 38, borderRadius: '12px',
            background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: '17px', color: '#fff',
            boxShadow: '0 0 20px rgba(0,212,255,0.3)',
          }}>V</div>
          <span style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '-0.5px' }}>
            Vishal<span style={{ color: '#00d4ff' }}>.</span>
          </span>
        </motion.div>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
          {links.map((l) => (
            <motion.button
              key={l}
              onClick={() => scrollTo(l)}
              whileHover={{ color: '#00d4ff' }}
              style={{
                background: 'none', border: 'none',
                color: active === l ? '#00d4ff' : '#6b7280',
                fontSize: '13.5px', fontWeight: 500,
                padding: '6px 14px', borderRadius: '8px',
                transition: 'all 0.2s',
                position: 'relative',
              }}
            >
              {l}
              {active === l && (
                <motion.div
                  layoutId="nav-indicator"
                  style={{
                    position: 'absolute', bottom: 0, left: '50%',
                    transform: 'translateX(-50%)',
                    width: 4, height: 4, borderRadius: '50%',
                    background: '#00d4ff',
                    boxShadow: '0 0 8px #00d4ff',
                  }}
                />
              )}
            </motion.button>
          ))}
          <motion.a
            href={GMAIL_COMPOSE}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,212,255,0.35)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              marginLeft: '0.75rem',
              padding: '9px 22px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
              color: '#fff', fontWeight: 700, fontSize: '13.5px',
              boxShadow: '0 0 15px rgba(0,212,255,0.2)',
            }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-menu-btn"
          style={{ background: 'none', border: 'none', color: '#fff', display: 'none' }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
              background: 'rgba(5,5,13,0.97)', backdropFilter: 'blur(24px)',
              padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                style={{
                  background: 'none', border: 'none', color: '#e8e8f0',
                  fontSize: '16px', fontWeight: 500, textAlign: 'left',
                  padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
