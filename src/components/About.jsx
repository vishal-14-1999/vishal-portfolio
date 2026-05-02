import { motion } from 'framer-motion';
import { personal } from '../data/portfolio';
import { Code2, Smartphone, Server, Database, Zap } from 'lucide-react';

const stats = [
  { value: '9+', label: 'Projects Shipped', icon: '🚀', color: '#00d4ff' },
  { value: '4+', label: 'Years Experience', icon: '⚡', color: '#7c3aed' },
  { value: '6+', label: 'Tech Stacks', icon: '🛠️', color: '#f59e0b' },
  { value: '100%', label: 'Client Satisfaction', icon: '⭐', color: '#10b981' },
];

const highlights = [
  { icon: <Smartphone size={18} />, label: 'Flutter Expert', color: '#00d4ff' },
  { icon: <Server size={18} />, label: 'Backend Dev', color: '#7c3aed' },
  { icon: <Database size={18} />, label: 'DB Architect', color: '#f59e0b' },
  { icon: <Code2 size={18} />, label: 'Full Stack', color: '#10b981' },
];

export function SectionLabel({ children, color = '#00d4ff' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        padding: '5px 14px', borderRadius: '100px',
        border: `1px solid ${color}25`,
        background: `${color}08`,
        color, fontSize: '11px', fontWeight: 700,
        letterSpacing: '2px', textTransform: 'uppercase',
        marginBottom: '1rem',
      }}
    >
      <Zap size={11} />
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <SectionLabel>About Me</SectionLabel>
        <h2 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900,
          letterSpacing: '-2px', lineHeight: 1.1,
        }}>
          Turning ideas into{' '}
          <span style={{
            background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            production apps
          </span>
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
        {/* Left: Bio + highlights */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p style={{ color: '#6b7280', lineHeight: 2, fontSize: '15px', marginBottom: '2rem' }}>
            {personal.bio}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="glow-card"
                style={{
                  padding: '1rem 1.25rem',
                  display: 'flex', alignItems: 'center', gap: '10px',
                  borderColor: `${h.color}20`,
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: '10px',
                  background: `${h.color}15`, border: `1px solid ${h.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: h.color, flexShrink: 0,
                }}>
                  {h.icon}
                </div>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#e8e8f0' }}>{h.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Stats + code */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -3 }}
                style={{
                  padding: '1.75rem 1.25rem', borderRadius: '20px',
                  background: `linear-gradient(135deg, ${s.color}10, transparent)`,
                  border: `1px solid ${s.color}20`,
                  textAlign: 'center', cursor: 'default',
                  boxShadow: `0 0 30px ${s.color}08`,
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '6px' }}>{s.icon}</div>
                <div style={{
                  fontSize: '2.2rem', fontWeight: 900,
                  background: `linear-gradient(135deg, ${s.color}, ${s.color}88)`,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  lineHeight: 1, marginBottom: '6px',
                }}>
                  {s.value}
                </div>
                <div style={{ color: '#4b5563', fontSize: '12px', fontWeight: 500 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Code block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              padding: '1.5rem', borderRadius: '16px',
              background: '#030308',
              border: '1px solid rgba(255,255,255,0.06)',
              fontFamily: 'Fira Code, monospace', fontSize: '12.5px', lineHeight: 2,
              position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Top bar */}
            <div style={{
              display: 'flex', gap: '6px', marginBottom: '1rem',
              paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}>
              {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
              ))}
              <span style={{ color: '#374151', fontSize: '11px', marginLeft: '8px' }}>vishal.config.js</span>
            </div>
            <div><span style={{ color: '#7c3aed' }}>const</span> <span style={{ color: '#00d4ff' }}>vishal</span> <span style={{ color: '#9ca3af' }}>=</span> {'{'}</div>
            <div style={{ paddingLeft: '1.25rem' }}><span style={{ color: '#f59e0b' }}>mobile</span><span style={{ color: '#9ca3af' }}>:</span> <span style={{ color: '#10b981' }}>'Flutter'</span><span style={{ color: '#9ca3af' }}>,</span></div>
            <div style={{ paddingLeft: '1.25rem' }}><span style={{ color: '#f59e0b' }}>backend</span><span style={{ color: '#9ca3af' }}>:</span> [<span style={{ color: '#10b981' }}>'Node.js'</span>, <span style={{ color: '#10b981' }}>'Python'</span>]<span style={{ color: '#9ca3af' }}>,</span></div>
            <div style={{ paddingLeft: '1.25rem' }}><span style={{ color: '#f59e0b' }}>database</span><span style={{ color: '#9ca3af' }}>:</span> [<span style={{ color: '#10b981' }}>'PostgreSQL'</span>, <span style={{ color: '#10b981' }}>'MongoDB'</span>]<span style={{ color: '#9ca3af' }}>,</span></div>
            <div style={{ paddingLeft: '1.25rem' }}><span style={{ color: '#f59e0b' }}>available</span><span style={{ color: '#9ca3af' }}>:</span> <span style={{ color: '#00d4ff' }}>true</span><span style={{ color: '#9ca3af' }}>,</span></div>
            <div style={{ paddingLeft: '1.25rem' }}><span style={{ color: '#f59e0b' }}>hire</span><span style={{ color: '#9ca3af' }}>:</span> <span style={{ color: '#10b981' }}>'konda.vishal14@gmail.com'</span></div>
            <div>{'}'}</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
