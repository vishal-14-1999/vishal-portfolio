import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let glowX = 0, glowY = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.9;
      dotY += (mouseY - dotY) * 0.9;
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowX - 200}px, ${glowY - 200}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Cursor dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 10000,
          width: 8, height: 8, borderRadius: '50%',
          background: '#00d4ff',
          pointerEvents: 'none',
          mixBlendMode: 'screen',
          boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff',
        }}
      />
      {/* Glow blob */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 0,
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(20px)',
        }}
      />
    </>
  );
}
