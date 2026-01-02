
import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <header className="max-w-7xl mx-auto px-6 mb-20">
        <h1 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter max-w-4xl">
          Passionate for resilient architecture of <span className="italic text-neutral-400 font-light underline decoration-neutral-200 underline-offset-8">people, community and environment.</span>
        </h1>
        <div className="mt-12 flex flex-col md:flex-row md:items-center gap-8 justify-between">
          <p className="max-w-md text-neutral-500 leading-relaxed text-sm">
            Selected academic and professional works of Shubham Adhikari. A collection of architectural design research, technical investigations, and theoretical explorations from 2014- 2025.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
