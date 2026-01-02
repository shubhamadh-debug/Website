
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/Studio'; // Using Studio.tsx as the About page
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50 selection:bg-neutral-900 selection:text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <footer className="bg-neutral-900 text-white py-20 mt-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end">
            <div>
              <h2 className="text-4xl font-serif mb-8 tracking-tighter uppercase">Shubham Adhikari</h2>
              <div className="grid grid-cols-1 gap-y-4 text-[10px] uppercase tracking-widest text-neutral-500">
                <p>© 2025 Architectural Portfolio</p>
                <p>Designed and Built by Shubham Adhikari</p>
              </div>
            </div>
            <div className="mt-12 md:mt-0 flex flex-col items-end">
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4 italic">Get in touch for collaborations</p>
              <a href="mailto:shubham.adhikari@university.edu" className="text-sm font-serif border-b border-neutral-700 pb-1 hover:border-white transition-all">
                shubham.adhikari@university.edu
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
