import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { SectionLabel } from './About';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.03), transparent)',
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem' }}
        >
          <SectionLabel>Experience</SectionLabel>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-1px' }}>
            My <span style={{ color: '#00d4ff' }}>Journey</span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 20, top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(180deg, #00d4ff, #7c3aed, transparent)',
            borderRadius: '2px',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ display: 'flex', gap: '2rem', paddingLeft: '1rem' }}
              >
                {/* Dot */}
                <div style={{
                  width: 42, height: 42, borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(0,212,255,0.3)',
                  marginLeft: -1,
                }}>
                  <Briefcase size={16} color="#fff" />
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 4 }}
                  style={{
                    flex: 1, padding: '1.5rem', borderRadius: '16px',
                    background: 'var(--card)', border: '1px solid var(--border)',
                    marginBottom: '0.5rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#e8e8f0' }}>{exp.role}</h3>
                      <span style={{ fontSize: '13px', color: '#00d4ff', fontWeight: 600 }}>{exp.company}</span>
                    </div>
                    <span style={{
                      padding: '4px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 600,
                      background: 'rgba(0,212,255,0.1)', color: '#00d4ff',
                      border: '1px solid rgba(0,212,255,0.2)',
                    }}>
                      {exp.year}
                    </span>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: '13.5px', lineHeight: 1.7 }}>{exp.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
