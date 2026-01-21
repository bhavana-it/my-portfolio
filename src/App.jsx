import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProfileSidebar from './components/ProfileSidebar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TopControls from './components/TopControls';
import RightRailNav from './components/RightRailNav';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    // Set theme class on body
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }

    // Scroll reveal animation
    const nodes = Array.from(document.querySelectorAll('.reveal'));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="app-container">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="top-bar" aria-label="Top bar">
        <a className="top-logo" href="#about" aria-label="Go to About">
          <span className="top-logo-text">BS</span>
          <span className="top-logo-dot" aria-hidden="true" />
        </a>
        <TopControls isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
      
      {/* Mobile Navbar */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <div className="app-layout">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <ProfileSidebar />
        </aside>
        
        {/* Main Content */}
        <main id="main" className="main-content">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <RightRailNav />
      </div>
    </div>
  );
}

export default App;
