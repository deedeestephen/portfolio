import React from 'react';
import { motion } from 'framer-motion';

function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Top Left Cyan Orb */}
      <motion.div
        animate={{
          x: [0, 50, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-cyan/10 rounded-full blur-[100px]"
      />

      {/* Bottom Right Purple Orb */}
      <motion.div
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 50, -40, 0],
          scale: [1, 1.1, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-purple/10 rounded-full blur-[120px]"
      />

      {/* Center Teal Small Orb */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal/5 rounded-full blur-[80px]"
      />
    </div>
  );
}

export default BackgroundEffects;
