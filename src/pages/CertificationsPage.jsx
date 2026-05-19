import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

function CertificationsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 min-h-screen pb-24"
    >
      <div className="w-full mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
          <span className="text-cyan font-mono text-2xl">07.</span> Certifications
          <div className="h-[1px] bg-surface-3 flex-grow ml-4"></div>
        </h2>
        
        <div className="glass-card p-12 text-center border-dashed border-2 border-surface-3 flex flex-col items-center justify-center gap-4">
          <p className="text-text-muted text-lg">
            This space is reserved for my future online certifications. I will be uploading my verified credentials here as I complete them!
          </p>
        </div>
      </div>
      <Contact />
    </motion.div>
  );
}

export default CertificationsPage;
