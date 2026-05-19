import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function BackgroundEffects() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 180 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];
    const connectionDistance = 120;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 35 : 85;
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 1.5 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouse = mouseRef.current;
      
      // Update and Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Base movement
        p.x += p.vx;
        p.y += p.vy;
        
        // Bounce off walls
        if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
        if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;
        
        // Mouse influence
        if (mouse.x !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouse.radius) {
            // Gentle attraction
            const force = (mouse.radius - dist) / mouse.radius;
            p.x += (dx / dist) * force * 0.4;
            p.y += (dy / dist) * force * 0.4;
          }
        }
        
        // Draw Particle Node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 219, 233, 0.6)'; // cyan
        ctx.fill();
        
        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 219, 233, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
        
        // Draw connection to mouse
        if (mouse.x !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            // Gradient connection or dual-color: cyan to teal
            ctx.strokeStyle = `rgba(0, 246, 187, ${alpha})`; // teal glow
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // set initial size and particles
    
    // Mouse listener on window so it works anywhere
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Canvas Particle Network */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Top Left Cyan Orb (for deep glowing ambience) */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-40 -left-40 w-[35rem] h-[35rem] bg-cyan/5 rounded-full blur-[120px]"
      />

      {/* Bottom Right Purple Orb */}
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.05, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute -bottom-48 -right-48 w-[40rem] h-[40rem] bg-purple/5 rounded-full blur-[140px]"
      />
    </div>
  );
}

export default BackgroundEffects;
