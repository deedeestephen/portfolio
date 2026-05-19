import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-24">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
          <span className="text-cyan font-mono text-2xl">01.</span> About Me
          <div className="h-[1px] bg-surface-3 flex-grow ml-4"></div>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          <div className="lg:w-1/2 flex flex-col gap-6 text-lg text-text-muted leading-relaxed">
            <p>
              Hello! My name is Sikalundu Mwiinga. I am currently in my 4th year pursuing a Bachelor of Computer Science at ZCAS University, anticipating graduation in December 2026.
            </p>
            <p>
              My passion lies at the intersection of <span className="text-cyan">Software Engineering</span>, <span className="text-purple-light">Artificial Intelligence</span>, and <span className="text-teal">Data Science</span>. I am driven by the desire to build intelligent, secure systems that solve real-world technology challenges, particularly focusing on the African tech landscape.
            </p>
            <p>
              Whether it's architecting a cloud-native backend, training machine learning models for healthcare, or ensuring the robustness of a decentralized application, I thrive on complex technical problems that demand both creativity and rigor.
            </p>
          </div>

          <div className="lg:w-1/2">
            <div className="glass-card rounded-xl overflow-hidden border border-surface-3 bg-surface-1/50 shadow-2xl h-full">
              {/* Terminal Header */}
              <div className="bg-surface-3 px-4 py-2 flex items-center gap-2 border-b border-surface-3/50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 font-mono text-xs text-text-muted">smwiinga@zcas:~/profile</span>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm leading-loose">
                <p><span className="text-cyan">smwiinga@zcas</span>:<span className="text-purple-light">~/profile</span>$ cat info.json</p>
                <div className="text-teal mt-2">
                  <span className="text-white">{`{`}</span><br/>
                  &nbsp;&nbsp;<span className="text-cyan">"name"</span>: <span className="text-yellow-300">"Sikalundu Mwiinga"</span>,<br/>
                  &nbsp;&nbsp;<span className="text-cyan">"university"</span>: <span className="text-yellow-300">"ZCAS University"</span>,<br/>
                  &nbsp;&nbsp;<span className="text-cyan">"major"</span>: <span className="text-yellow-300">"Computer Science"</span>,<br/>
                  &nbsp;&nbsp;<span className="text-cyan">"expected_graduation"</span>: <span className="text-yellow-300">"Dec 2026"</span>,<br/>
                  &nbsp;&nbsp;<span className="text-cyan">"interests"</span>: [<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"Software Engineering"</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"AI Engineering"</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"Data Science"</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"Fullstack Development"</span><br/>
                  &nbsp;&nbsp;]<br/>
                  <span className="text-white">{`}`}</span>
                </div>
                <p className="mt-4 flex items-center">
                  <span className="text-cyan">smwiinga@zcas</span>:<span className="text-purple-light">~/profile</span>$&nbsp;<span className="w-2 h-4 bg-cyan animate-pulse inline-block"></span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default About;
