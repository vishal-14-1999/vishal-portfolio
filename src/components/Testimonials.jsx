import { motion } from 'framer-motion';
import { testimonials } from '../data/portfolio';
import { SectionLabel } from './About';

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      padding: '7rem 2rem',
      background: 'linear-gradient(180deg, transparent, rgba(124,58,237,0.06) 50%, transparent)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3.5rem' }}
        >
          <SectionLabel color="#7c3aed">Testimonials</SectionLabel>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900,
            letterSpacing: '-2px', lineHeight: 1.1,
          }}>
            What Clients{' '}
            <span style={{
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Say
            </span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glow-card"
              style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
            >
              {/* Large quote mark */}
              <div style={{
                position: 'absolute', top: '1rem', right: '1.25rem',
                fontSize: '80px', lineHeight: 1, color: 'rgba(124,58,237,0.08)',
                fontFamily: 'Georgia, serif', fontWeight: 900, pointerEvents: 'none',
                userSelect: 'none',
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '1.25rem' }}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <motion.span
                    key={si}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + si * 0.08, type: 'spring', stiffness: 300 }}
                    style={{ color: '#f59e0b', fontSize: '16px' }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              <p style={{
                color: '#6b7280', fontSize: '14px', lineHeight: 1.85,
                marginBottom: '1.75rem', fontStyle: 'italic',
                position: 'relative', zIndex: 1,
              }}>
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7c3aed, #00d4ff)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px', fontWeight: 800, color: '#fff',
                  flexShrink: 0,
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#e8e8f0' }}>{t.name}</div>
                  <div style={{
                    fontSize: '11px', fontWeight: 600,
                    background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    {t.project}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
