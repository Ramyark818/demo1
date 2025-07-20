import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="py-8 text-center" style={{ backgroundColor: 'var(--surface-color)' }}>
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p style={{ color: 'var(--text-secondary)' }}>
                © 2024 Ramya RK. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/ramyark418" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  LinkedIn
                </a>
                <span style={{ color: 'var(--border-color)' }}>•</span>
                <a 
                  href="https://github.com/Ramyark418" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  GitHub
                </a>
                <span style={{ color: 'var(--border-color)' }}>•</span>
                <a 
                  href="mailto:ramyark418@gmail.com"
                  className="transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  Email
                </a>
              </div>
            </div>
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Built with React, Framer Motion, and lots of ☕
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
