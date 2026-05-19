import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useMotionValue, useTransform } from 'framer-motion';

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  const parallaxX = useTransform(mouseX, [-window.innerWidth / 2, window.innerWidth / 2], [30, -30]);
  const parallaxY = useTransform(mouseY, [-window.innerHeight / 2, window.innerHeight / 2], [30, -30]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 relative"
      onMouseMove={handleMouseMove}
    >
      <div className="w-full text-center md:text-left md:flex md:items-center md:justify-between gap-12 relative z-10">
        
        {/* Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:w-3/5 flex flex-col items-center md:items-start"
        >
          <motion.p variants={itemVariants} className="font-mono text-cyan mb-4 tracking-widest uppercase text-sm">
            Welcome to my command center
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">Sikalundu Mwiinga</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="text-xl md:text-2xl font-mono text-text-muted mb-8 h-16">
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'AI Engineer',
                2000,
                'Data Science',
                2000,
                'Fullstack Development',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-teal drop-shadow-[0_0_8px_rgba(0,246,187,0.8)]"
            />
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-text-muted mb-10 max-w-2xl mx-auto md:mx-0">
            4th Year Computer Science Student @ ZCAS University. Building the future with intelligent systems, scalable cloud architectures, and modern web applications.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full md:w-auto">
            <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan to-blue-600 text-void font-bold hover:shadow-neon-cyan transition-all duration-300 hover:scale-105">
              View Projects
            </a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-purple text-text-main hover:bg-purple/10 hover:shadow-neon-purple transition-all duration-300 hover:scale-105 text-center">
              Download CV
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-surface-3 text-text-muted hover:border-text-main transition-all duration-300 hover:scale-105 text-center">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Abstract Graphic with Parallax */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ x: parallaxX, y: parallaxY }}
          className="hidden md:block md:w-2/5 relative"
        >
          {/* A cool glowing abstract circle/orb setup */}
          <div className="relative w-72 h-72 mx-auto">
            <div className="absolute inset-0 rounded-full border border-cyan/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-purple/30 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full border border-teal/30 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-12 bg-surface-1 rounded-full flex items-center justify-center glass-card hover:scale-110 transition-transform duration-500 cursor-pointer">
              <span className="font-mono text-cyan text-4xl font-bold animate-pulse">&lt;/&gt;</span>
            </div>
            
            {/* Particles */}
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-4 h-4 bg-cyan rounded-full blur-[2px]" 
            />
            <motion.div 
              animate={{ y: [0, 20, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -right-4 w-6 h-6 bg-purple rounded-full blur-[3px]" 
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
