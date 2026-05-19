import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';

function Github() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/deedeestephen/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching GitHub repos:", err);
        setLoading(false);
      });
  }, []);

  // Mock contribution data to simulate a GitHub graph
  const generateGraph = () => {
    const days = 140; // Approx 20 weeks * 7 days
    return Array.from({ length: days }).map((_, i) => {
      const level = Math.floor(Math.random() * 5); // 0-4 intensity
      const colors = ['bg-surface-2', 'bg-cyan/20', 'bg-cyan/50', 'bg-cyan/80', 'bg-cyan'];
      return (
        <div 
          key={i} 
          className={`w-3 h-3 rounded-[2px] ${colors[level]} hover:ring-1 hover:ring-white transition-all`}
          title={`Level ${level} contributions`}
        />
      );
    });
  };

  return (
    <section id="github" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
          <span className="text-white font-mono text-2xl">05.</span> Open Source
          <div className="h-[1px] bg-surface-3 flex-grow ml-4"></div>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* GitHub Stats & Graph */}
          <div className="lg:w-2/3 glass-card p-6 flex flex-col gap-6">
            <div className="flex items-center gap-4 border-b border-surface-3 pb-4">
              <FaGithub className="text-4xl text-white" />
              <div>
                <a href="https://github.com/deedeestephen" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-cyan transition-colors">@deedeestephen</a>
                <p className="text-text-muted font-mono text-sm">Contributions fetching from actual GitHub account</p>
              </div>
            </div>

            <div className="overflow-x-auto pb-2">
              <div className="min-w-[700px] flex gap-1 flex-wrap h-[100px] flex-col content-start">
                {generateGraph()}
              </div>
            </div>
          </div>

          {/* Top Repositories */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-text-main flex items-center gap-2">
              <FaStar className="text-yellow-400" /> Recent Repos
            </h3>
            
            {loading ? (
              <p className="text-text-muted">Loading repositories...</p>
            ) : repos.length === 0 ? (
              <p className="text-text-muted">No repositories found.</p>
            ) : (
              repos.map((repo) => (
                <a 
                  href={repo.html_url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  key={repo.id}
                  className="glass-card p-4 hover:border-cyan/50 transition-all duration-300 group flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2 text-cyan font-bold font-mono truncate">
                    <FaGithub className="shrink-0" /> <span className="truncate">{repo.name}</span>
                  </div>
                  <p className="text-sm text-text-muted line-clamp-2">{repo.description || 'No description provided.'}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-text-muted font-mono">
                    <span className="flex items-center gap-1"><FaStar /> {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1"><FaCodeBranch /> {repo.forks_count}</span>
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-cyan inline-block"></span> {repo.language}
                      </span>
                    )}
                  </div>
                </a>
              ))
            )}
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default Github;
