import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  return (
    <section id="education" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
          <span className="text-teal font-mono text-2xl">04.</span> Education
          <div className="h-[1px] bg-surface-3 flex-grow ml-4"></div>
        </h2>

        <div className="glass-card p-8 md:p-12 border-l-4 border-l-teal relative overflow-hidden group">
          {/* Decorative background glow */}
          <div className="absolute top-[-50%] right-[-10%] w-64 h-64 bg-teal/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-teal/10 transition-colors duration-500"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-text-main mb-2">Bachelor of Computer Science</h3>
              <h4 className="text-xl text-text-muted mb-4">ZCAS University</h4>
              
              <div className="font-mono text-cyan mb-6 bg-cyan/10 inline-block px-3 py-1 rounded">
                4th Year | Expected Graduation: Dec 2026
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 text-sm">
                <div>
                  <h5 className="font-bold text-text-main mb-3 uppercase tracking-wider text-xs">Relevant Coursework</h5>
                  <ul className="space-y-2 text-text-muted list-disc list-inside">
                    <li>Data Structures & Algorithms</li>
                    <li>Artificial Intelligence</li>
                    <li>Database Management Systems</li>
                    <li>Software Engineering</li>
                    <li>Information Security</li>
                    <li>Cloud Computing Architecture</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold text-text-main mb-3 uppercase tracking-wider text-xs">Technical Focus Areas</h5>
                  <ul className="space-y-2 text-text-muted list-disc list-inside">
                    <li>Deep Learning & Neural Networks</li>
                    <li>Distributed Systems & Microservices</li>
                    <li>Penetration Testing & Defense</li>
                    <li>Smart Contract Development</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* A futuristic decorative element */}
            <div className="hidden md:flex flex-col items-end gap-2 text-surface-3 select-none">
              <div className="text-6xl font-bold">&lt;/&gt;</div>
              <div className="font-mono text-xs text-right">
                <p>STATUS: IN_PROGRESS</p>
                <p>MODULE: CORE_CS</p>
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}

export default Education;
