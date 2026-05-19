import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaGithub, FaHtml5, FaCss3Alt, FaAws, FaBrain, FaShieldAlt, FaLink, FaCode } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiFlutter, SiGooglecloud, SiFirebase, SiMysql } from 'react-icons/si';

const skillsData = [
  { name: 'Java', icon: <FaJava className="text-red-500" />, category: 'Backend' },
  { name: 'Python', icon: <FaPython className="text-yellow-400" />, category: 'Backend/AI' },
  { name: 'JavaScript', icon: <IoLogoJavascript className="text-yellow-300" />, category: 'Frontend' },
  { name: 'React', icon: <FaReact className="text-cyan" />, category: 'Frontend' },
  { name: 'HTML/CSS', icon: <FaHtml5 className="text-orange-500" />, category: 'Frontend' },
  { name: 'GitHub', icon: <FaGithub className="text-white" />, category: 'Tools' },
  { name: 'Cloud Computing', icon: <FaAws className="text-orange-400" />, category: 'Cloud' },
  { name: 'AI & Machine Learning', icon: <FaBrain className="text-purple-light" />, category: 'AI' },
  { name: 'Cybersecurity', icon: <FaShieldAlt className="text-teal" />, category: 'Security' },
  { name: 'Blockchain', icon: <FaLink className="text-blue-400" />, category: 'Web3' },
  { name: 'Flutter', icon: <SiFlutter className="text-blue-400" />, category: 'Mobile' },
  { name: 'Google Cloud', icon: <SiGooglecloud className="text-blue-500" />, category: 'Cloud' },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, category: 'Backend/Cloud' },
  { name: 'MySQL', icon: <SiMysql className="text-blue-300" />, category: 'Database' },
  { name: 'Fullstack Dev', icon: <FaCode className="text-purple-400" />, category: 'Fullstack' },
];

function Skills() {
  return (
    <section id="skills" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
          <span className="text-purple-light font-mono text-2xl">02.</span> Technical Arsenal
          <div className="h-[1px] bg-surface-3 flex-grow ml-4"></div>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2 // staggering the floating effect
                }}
                className="w-full h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-card flex flex-col items-center justify-center p-6 gap-4 cursor-pointer group hover:bg-surface-2 transition-all duration-300 relative overflow-hidden h-full"
                >
                  {/* Animated glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan/0 via-purple/0 to-cyan/0 group-hover:from-cyan/10 group-hover:to-purple/10 transition-colors duration-500"></div>
                  
                  <div className="text-4xl z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_12px_rgba(0,219,233,0.8)] transition-all duration-300">
                    {skill.icon}
                  </div>
                  <span className="font-mono text-sm text-center z-10 text-text-muted group-hover:text-text-main transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
