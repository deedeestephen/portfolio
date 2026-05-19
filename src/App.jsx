import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundEffects from './components/BackgroundEffects';

import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';

function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen text-text-main overflow-x-hidden cursor-none">
        <CustomCursor />
        <BackgroundEffects />

        <Navbar />
        
        <main className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-[1280px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
