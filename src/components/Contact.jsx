import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaSpinner, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { socialLinks } from '../data/socialsData';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/sikalundumwinga@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `🌌 Sikkalundu Portfolio: New Message from ${name}`
        })
      });

      const data = await response.json();

      if (response.ok && data.success === 'true') {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Transmission failed. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Connection failed. Please verify your internet link.');
    }
  };

  return (
    <section id="contact" className="py-24 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto w-full"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          <span className="text-cyan font-mono text-2xl block mb-2">06. What's Next?</span>
          Get In Touch
        </h2>
        
        <p className="text-center text-text-muted mb-12 max-w-xl mx-auto text-lg">
          Although I'm currently focused on my studies, my inbox is always open. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="glass-card p-8 md:p-12 border border-surface-3 relative overflow-hidden">
          {/* Form */}
          <form className="flex flex-col gap-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-sm text-cyan">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-surface-2 border border-surface-3 rounded-lg p-3 text-text-main focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all"
                  placeholder="John Doe"
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-sm text-purple-light">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-surface-2 border border-surface-3 rounded-lg p-3 text-text-main focus:outline-none focus:border-purple-light focus:ring-1 focus:ring-purple-light transition-all"
                  placeholder="john@example.com"
                  required
                  disabled={status === 'sending'}
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-sm text-teal">Message</label>
              <textarea 
                id="message" 
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-surface-2 border border-surface-3 rounded-lg p-3 text-text-main focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all resize-none"
                placeholder="Hello Sikalundu..."
                required
                disabled={status === 'sending'}
              ></textarea>
            </div>

            {/* Status Notifications */}
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 bg-teal/10 border border-teal/30 p-4 rounded-lg text-teal"
                >
                  <FaCheckCircle className="text-xl shrink-0" />
                  <div className="text-sm">
                    <strong className="block font-mono text-base">Transmission Successful!</strong>
                    Thank you for reaching out, hope to get in touch with you soon!!
                    <span className="block text-xs mt-1 text-teal/70 font-mono">(If this is the first message, please verify the activation email sent to your inbox.)</span>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 p-4 rounded-lg text-red-400"
                >
                  <FaExclamationTriangle className="text-xl shrink-0" />
                  <div className="text-sm">
                    <strong className="block font-mono">System Error</strong>
                    {errorMessage}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              type="submit"
              disabled={status === 'sending'}
              className="mt-4 py-3 px-8 mx-auto md:mx-0 md:self-start bg-gradient-to-r from-cyan to-blue-600 text-void font-bold rounded-lg hover:shadow-neon-cyan transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <FaSpinner className="animate-spin text-lg" />
                  Transmitting...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

          {/* Social Links Panel */}
          <div className="mt-12 pt-8 border-t border-surface-3 flex flex-wrap justify-center gap-6 relative z-10">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-white transition-colors group">
              <div className="p-3 bg-surface-2 rounded-full group-hover:bg-white/10 transition-colors">
                <FaGithub size={24} />
              </div>
              <span className="font-mono text-sm">GitHub</span>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-[#0A66C2] transition-colors group">
              <div className="p-3 bg-surface-2 rounded-full group-hover:bg-[#0A66C2]/10 transition-colors">
                <FaLinkedin size={24} />
              </div>
              <span className="font-mono text-sm">LinkedIn</span>
            </a>
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-[#25D366] transition-colors group">
              <div className="p-3 bg-surface-2 rounded-full group-hover:bg-[#25D366]/10 transition-colors">
                <FaWhatsapp size={24} />
              </div>
              <span className="font-mono text-sm">WhatsApp</span>
            </a>
            <a href={socialLinks.email} className="flex items-center gap-2 text-text-muted hover:text-cyan transition-colors group">
              <div className="p-3 bg-surface-2 rounded-full group-hover:bg-cyan/10 transition-colors">
                <FaEnvelope size={24} />
              </div>
              <span className="font-mono text-sm">Email</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default Contact;
