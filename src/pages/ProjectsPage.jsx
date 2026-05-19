import React from 'react';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

function ProjectsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 min-h-screen"
    >
      <Projects />
      <Contact />
    </motion.div>
  );
}

export default ProjectsPage;
