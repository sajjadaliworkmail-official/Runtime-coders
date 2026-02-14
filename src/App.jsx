import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import DashboardPreview from './components/DashboardPreview';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Impact from './components/Impact';
import Stats from './components/Stats';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <ProblemStatement />
      <DashboardPreview />
      <HowItWorks />
      <Features />
      <Impact />
      <Stats />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
