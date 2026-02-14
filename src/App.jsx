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

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
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
