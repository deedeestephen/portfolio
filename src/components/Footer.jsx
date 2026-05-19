import React from 'react';

function Footer() {
  return (
    <footer className="w-full py-8 border-t border-surface-3/50 mt-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4">
        <p className="font-mono text-sm text-text-muted text-center">
          Designed & Built by <span className="text-cyan font-bold">Sikalundu Mwiinga</span>
        </p>
        <p className="text-xs text-surface-3/80 font-mono">
          &copy; {new Date().getFullYear()} All rights reserved. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
