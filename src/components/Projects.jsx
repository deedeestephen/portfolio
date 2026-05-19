import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../data/projectsData';

const categories = ['All', 'AI', 'Web Development', 'Cybersecurity', 'Blockchain'];

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projectsData.filter(project => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
          <span className="text-cyan font-mono text-2xl">03.</span> Featured Projects
          <div className="h-[1px] bg-surface-3 flex-grow ml-4"></div>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-cyan text-void shadow-neon-cyan'
                  : 'bg-surface-2 text-text-muted hover:text-cyan hover:bg-surface-3 border border-transparent hover:border-cyan/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card group flex flex-col overflow-hidden border border-surface-3 hover:border-cyan/50 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-void/60 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow relative z-20 bg-surface-1/80 backdrop-blur-md -mt-4 rounded-t-xl">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-purple-light uppercase tracking-wider">{project.category}</span>
                    <div className="flex gap-3">
                      <a href={project.github} className="text-text-muted hover:text-cyan transition-colors" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={18} />
                      </a>
                      <a href={project.live} className="text-text-muted hover:text-cyan transition-colors" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt size={16} />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-text-main group-hover:text-cyan transition-colors">{project.title}</h3>
                  <p className="text-sm text-text-muted mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono bg-surface-3 text-text-main px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Projects;
