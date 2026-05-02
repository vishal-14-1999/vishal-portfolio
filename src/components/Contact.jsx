import { motion } from 'framer-motion';
import { SectionLabel } from './About';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { GMAIL_COMPOSE, PHONE_HREF, EMAIL, PHONE } from '../data/links';

const contactItems = [
  { icon: <Mail size={20} />, label: 'Email', value: EMAIL, href: GMAIL_COMPOSE, external: true, color: '#00d4ff' },
  { icon: <Phone size={20} />, label: 'Phone', value: PHONE, href: PHONE_HREF, color: '#7c3aed' },
  { icon: <MapPin size={20} />, label: 'Location', value: 'India — Available Worldwide', href: null, color: '#f59e0b' },
];

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '7rem 2rem 9rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,212,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <SectionLabel>Contact</SectionLabel>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900,
            letterSpacing: '-2px', lineHeight: 1.1, marginBottom: '1rem',
          }}>
            Let's{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Work Together
            </span>
          </h2>
          <p style={{ color: '#4b5563', fontSize: '15px', maxWidth: 480, margin: '0 auto' }}>
            Have a project in mind? I'd love to hear about it. Let's build something great together.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glow-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  borderColor: `${item.color}18`,
                }}
              >
                <div style={{
                  width: 50, height: 50, borderRadius: '14px',
                  background: `linear-gradient(135deg, ${item.color}20, ${item.color}08)`,
                  border: `1px solid ${item.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: item.color, flexShrink: 0,
                  boxShadow: `0 0 20px ${item.color}15`,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: '#374151', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      style={{ fontSize: '14px', color: '#d1d5db', fontWeight: 500, transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = item.color}
                      onMouseLeave={e => e.currentTarget.style.color = '#d1d5db'}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: '14px', color: '#d1d5db', fontWeight: 500 }}>{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              padding: '3rem 2.5rem', borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(0,212,255,0.07), rgba(124,58,237,0.07))',
              border: '1px solid rgba(0,212,255,0.12)',
              textAlign: 'center', position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Glow */}
            <div style={{
              position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
              width: 200, height: 200, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,212,255,0.12), transparent 70%)',
              pointerEvents: 'none',
            }} />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ fontSize: '56px', marginBottom: '1.25rem' }}
            >
              🚀
            </motion.div>

            <h3 style={{ fontSize: '22px', fontWeight: 900, marginBottom: '0.75rem', letterSpacing: '-0.5px' }}>
              Ready to start?
            </h3>
            <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.75, marginBottom: '2rem' }}>
              Whether it's a Flutter app, backend API, or full-stack product — I ship it fast and right.
            </p>

            <motion.a
              href={GMAIL_COMPOSE}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0,212,255,0.35)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '15px 36px', borderRadius: '14px',
                background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                color: '#fff', fontWeight: 700, fontSize: '15px',
                boxShadow: '0 0 25px rgba(0,212,255,0.25)',
                marginBottom: '1.25rem',
              }}
            >
              <Send size={16} /> Send Me an Email
            </motion.a>

            <div>
              <a href={PHONE_HREF} style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                color: '#374151', fontSize: '13px', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#7c3aed'}
                onMouseLeave={e => e.currentTarget.style.color = '#374151'}
              >
                <Phone size={13} /> Or call {PHONE} <ArrowRight size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
