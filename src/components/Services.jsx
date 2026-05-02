import { motion } from 'framer-motion';
import { services } from '../data/portfolio';
import { SectionLabel } from './About';

export default function Services() {
  return (
    <section id="services" style={{
      padding: '7rem 2rem',
      background: 'linear-gradient(180deg, transparent, rgba(16,185,129,0.04) 50%, transparent)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative left circle */}
      <div style={{
        position: 'absolute', top: '50%', left: '-200px',
        width: 500, height: 500, borderRadius: '50%',
        border: '1px solid rgba(16,185,129,0.07)',
        transform: 'translateY(-50%)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3.5rem' }}
        >
          <SectionLabel color="#10b981">Services</SectionLabel>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900,
            letterSpacing: '-2px', lineHeight: 1.1,
          }}>
            What I{' '}
            <span style={{
              background: 'linear-gradient(135deg, #10b981, #00d4ff)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Offer
            </span>
          </h2>
          <p style={{ color: '#4b5563', fontSize: '15px', maxWidth: 500, marginTop: '0.75rem' }}>
            End-to-end development services — from idea to deployment.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glow-card"
              style={{
                padding: '2.25rem',
                borderColor: `${s.color}18`,
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Background glow */}
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 120, height: 120, borderRadius: '50%',
                background: `radial-gradient(circle, ${s.color}15, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <div style={{
                width: 60, height: 60, borderRadius: '18px',
                background: `linear-gradient(135deg, ${s.color}20, ${s.color}08)`,
                border: `1px solid ${s.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '28px', marginBottom: '1.5rem',
                boxShadow: `0 0 20px ${s.color}15`,
              }}>
                {s.icon}
              </div>

              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#f0f0f8', marginBottom: '0.75rem', letterSpacing: '-0.3px' }}>
                {s.title}
              </h3>
              <p style={{ color: '#4b5563', fontSize: '13.5px', lineHeight: 1.75 }}>
                {s.desc}
              </p>

              {/* Bottom accent */}
              <div style={{
                marginTop: '1.75rem', height: 2, borderRadius: '100px',
                background: `linear-gradient(90deg, ${s.color}, transparent)`,
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
