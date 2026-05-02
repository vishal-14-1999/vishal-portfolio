import { motion } from 'framer-motion';
import { skills, techStack } from '../data/portfolio';
import { SectionLabel } from './About';

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '7rem 2rem',
      background: 'linear-gradient(180deg, transparent, rgba(124,58,237,0.05) 50%, transparent)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative circle */}
      <div style={{
        position: 'absolute', top: '50%', right: '-200px',
        width: 500, height: 500, borderRadius: '50%',
        border: '1px solid rgba(124,58,237,0.08)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', right: '-150px',
        width: 350, height: 350, borderRadius: '50%',
        border: '1px solid rgba(124,58,237,0.06)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3.5rem' }}
        >
          <SectionLabel color="#7c3aed">Skills</SectionLabel>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900,
            letterSpacing: '-2px', lineHeight: 1.1,
          }}>
            My{' '}
            <span style={{
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Tech Arsenal
            </span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.12, duration: 0.6 }}
              className="glow-card"
              style={{
                padding: '2rem',
                borderColor: `${group.color}18`,
                boxShadow: `0 0 40px ${group.color}06`,
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.75rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '12px',
                  background: `linear-gradient(135deg, ${group.color}25, ${group.color}10)`,
                  border: `1px solid ${group.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: group.color, boxShadow: `0 0 12px ${group.color}`,
                  }} />
                </div>
                <h3 style={{
                  fontSize: '13px', fontWeight: 800, color: group.color,
                  letterSpacing: '2px', textTransform: 'uppercase',
                }}>
                  {group.category}
                </h3>
              </div>

              {/* Skills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {group.items.map((skill, si) => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 500, color: '#d1d5db' }}>{skill.name}</span>
                      <span style={{ fontSize: '11px', color: group.color, fontWeight: 700 }}>{skill.level}%</span>
                    </div>
                    <div style={{
                      height: 5, borderRadius: '100px',
                      background: 'rgba(255,255,255,0.05)',
                      overflow: 'hidden', position: 'relative',
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: gi * 0.1 + si * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          height: '100%', borderRadius: '100px',
                          background: `linear-gradient(90deg, ${group.color}, ${group.color}60)`,
                          boxShadow: `0 0 10px ${group.color}80`,
                          position: 'relative',
                        }}
                      >
                        {/* Shimmer */}
                        <div style={{
                          position: 'absolute', inset: 0,
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                          backgroundSize: '200% 100%',
                          animation: 'shimmer 2s infinite',
                        }} />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech icons grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ marginTop: '3rem' }}
        >
          <p style={{ color: '#374151', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            All Technologies
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {techStack.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, type: 'spring', stiffness: 300 }}
                whileHover={{ scale: 1.12, y: -4, boxShadow: `0 8px 25px ${t.color}30` }}
                style={{
                  padding: '8px 16px', borderRadius: '100px',
                  border: `1px solid ${t.color}25`,
                  background: `${t.color}08`,
                  color: t.color, fontSize: '12px', fontWeight: 600,
                  display: 'flex', alignItems: 'center', gap: '6px',
                  cursor: 'default', transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: '14px' }}>{t.icon}</span> {t.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
