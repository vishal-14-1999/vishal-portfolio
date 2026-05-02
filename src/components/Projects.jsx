import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';
import { SectionLabel } from './About';

const categories = ['All', ...new Set(projects.map(p => p.category))];

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" style={{ padding: '7rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '3rem' }}
      >
        <SectionLabel color="#f59e0b">Projects</SectionLabel>
        <h2 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900,
          letterSpacing: '-2px', lineHeight: 1.1, marginBottom: '1rem',
        }}>
          Things I've{' '}
          <span style={{
            background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Built
          </span>
        </h2>
        <p style={{ color: '#4b5563', fontSize: '15px', maxWidth: 500 }}>
          Production apps shipped across multiple industries — from food delivery to EV tech.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem',
          padding: '6px', borderRadius: '14px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.05)',
          width: 'fit-content',
        }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            whileTap={{ scale: 0.96 }}
            style={{
              padding: '7px 18px', borderRadius: '9px', fontSize: '12px', fontWeight: 700,
              border: 'none',
              background: active === cat
                ? 'linear-gradient(135deg, #f59e0b, #ef4444)'
                : 'transparent',
              color: active === cat ? '#fff' : '#6b7280',
              transition: 'all 0.25s',
              letterSpacing: '0.3px',
            }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div layout style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '1.5rem',
      }}>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        borderRadius: '22px',
        background: hovered
          ? `linear-gradient(135deg, ${project.color}10, rgba(255,255,255,0.03))`
          : 'rgba(255,255,255,0.025)',
        border: `1px solid ${hovered ? project.color + '35' : 'rgba(255,255,255,0.06)'}`,
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? `0 24px 60px ${project.color}18, 0 0 0 1px ${project.color}15` : 'none',
        cursor: 'default',
        position: 'relative',
      }}
    >
      {/* Top gradient bar */}
      <div style={{
        height: 3,
        background: `linear-gradient(90deg, ${project.color}, ${project.color}40)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s',
      }} />

      {/* Header */}
      <div style={{
        padding: '1.75rem 1.75rem 1.25rem',
        background: hovered ? `radial-gradient(ellipse at top left, ${project.color}12, transparent 60%)` : 'transparent',
        transition: 'background 0.35s',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <motion.div
              animate={{ rotate: hovered ? [0, -5, 5, 0] : 0 }}
              transition={{ duration: 0.4 }}
              style={{
                width: 52, height: 52, borderRadius: '16px',
                background: `linear-gradient(135deg, ${project.color}25, ${project.color}10)`,
                border: `1px solid ${project.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px', flexShrink: 0,
                boxShadow: hovered ? `0 0 20px ${project.color}30` : 'none',
                transition: 'box-shadow 0.3s',
              }}
            >
              {project.icon}
            </motion.div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#f0f0f8', marginBottom: '3px', letterSpacing: '-0.3px' }}>
                {project.name}
              </h3>
              <span style={{ fontSize: '12px', color: project.color, fontWeight: 600 }}>
                {project.tagline}
              </span>
            </div>
          </div>
          <span style={{
            padding: '4px 11px', borderRadius: '100px', fontSize: '10px', fontWeight: 700,
            background: `${project.color}12`, color: project.color,
            border: `1px solid ${project.color}22`,
            whiteSpace: 'nowrap', letterSpacing: '0.5px',
          }}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '0 1.75rem 1.75rem' }}>
        <p style={{ color: '#4b5563', fontSize: '13.5px', lineHeight: 1.75, marginBottom: '1.25rem' }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              padding: '4px 11px', borderRadius: '8px', fontSize: '11px', fontWeight: 600,
              background: 'rgba(255,255,255,0.04)', color: '#6b7280',
              border: '1px solid rgba(255,255,255,0.07)',
              transition: 'all 0.2s',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
