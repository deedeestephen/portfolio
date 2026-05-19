import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Contact', href: '#contact' }, // Contact is on every page, so a local hash is fine
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-surface-0/80 backdrop-blur-[32px] border-b border-purple/20 py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.a 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="/" 
          className="text-xl font-bold tracking-tight text-text-main group"
        >
          Sikalundu<span className="text-cyan group-hover:text-purple transition-colors duration-300">.AI</span>
        </motion.a>

        {/* Desktop Nav */}
        <motion.ul 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
          }}
          className="hidden md:flex space-x-8 font-mono text-sm"
        >
          {navLinks.map((link) => (
            <motion.li 
              key={link.name}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <a 
                href={link.href} 
                className="text-text-muted hover:text-cyan transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(0,219,233,0.8)]"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Nav Toggle (simplified) */}
        <div className="md:hidden">
          <button className="text-text-main hover:text-cyan focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
