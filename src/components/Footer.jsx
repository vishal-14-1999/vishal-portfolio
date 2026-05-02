import { motion } from 'framer-motion';
import { Mail, Phone, Heart } from 'lucide-react';
import { GMAIL_COMPOSE, PHONE_HREF, EMAIL, PHONE } from '../data/links';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.04)',
      padding: '2.5rem 2rem',
      background: 'rgba(0,0,0,0.4)',
      backdropFilter: 'blur(10px)',
    }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1rem',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: 34, height: 34, borderRadius: '10px',
            background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: '15px', color: '#fff',
          }}>V</div>
          <span style={{ fontWeight: 800, fontSize: '16px' }}>
            Vishal<span style={{ color: '#00d4ff' }}>.</span>
          </span>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {[
            { icon: <Mail size={13} />, text: EMAIL, href: GMAIL_COMPOSE, external: true, hoverColor: '#00d4ff' },
            { icon: <Phone size={13} />, text: PHONE, href: PHONE_HREF, hoverColor: '#7c3aed' },
          ].map((item) => (
            <a key={item.href} href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#374151', fontSize: '13px', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = item.hoverColor}
              onMouseLeave={e => e.currentTarget.style.color = '#374151'}
            >
              {item.icon} {item.text}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ color: '#1f2937', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '5px' }}>
          © {new Date().getFullYear()} Vishal · Built with <Heart size={11} color="#7c3aed" fill="#7c3aed" /> React
        </p>
      </motion.div>
    </footer>
  );
}
