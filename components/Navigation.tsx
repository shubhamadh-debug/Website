
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-serif font-bold tracking-tighter uppercase">
          SHUBHAM <span className="text-neutral-400 italic">ADHIKARI</span>
        </Link>
        <div className="hidden md:flex space-x-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-widest font-medium transition-all hover:opacity-50 ${
                location.pathname === link.path ? 'text-neutral-900 border-b border-neutral-900' : 'text-neutral-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button className="md:hidden text-neutral-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
