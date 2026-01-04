
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-serif">Project not found</h2>
          <Link to="/" className="mt-4 inline-block text-sm uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-xs uppercase tracking-widest text-neutral-400 hover:text-neutral-900 mb-12 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Work
        </Link>

        <header className="mb-16 grid md:grid-cols-2 gap-12 items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-4 block">
              {project.label}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter">{project.title}</h1>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-[10px] uppercase tracking-[0.2em] border-t border-neutral-200 pt-8">
            <div>
              <p className="text-neutral-400 mb-1">Institution</p>
              <p className="text-neutral-900 font-semibold">{project.specifications.institution}</p>
            </div>
            <div>
              <p className="text-neutral-400 mb-1">Course</p>
              <p className="text-neutral-900 font-semibold">{project.specifications.course}</p>
            </div>
            <div>
              <p className="text-neutral-400 mb-1">Instructor</p>
              <p className="text-neutral-900 font-semibold">{project.specifications.instructor || 'N/A'}</p>
            </div>
            <div>
              <p className="text-neutral-400 mb-1">Year</p>
              <p className="text-neutral-900 font-semibold">{project.year}</p>
            </div>
          </div>
        </header>

        <section className="mb-24">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full aspect-video object-cover bg-neutral-100 shadow-2xl grayscale"
          />
        </section>

        <section className={`mb-24 ${project.awards ? 'grid md:grid-cols-12 gap-12' : 'max-w-4xl'}`}>
          <div className={project.awards ? 'md:col-span-8' : ''}>
            <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-neutral-400">Project Brief & Concept</h3>
            <p className="text-lg md:text-xl font-light leading-relaxed text-neutral-800 whitespace-pre-line">
              {project.description}
            </p>
          </div>
          {project.awards && (
            <div className="md:col-span-4 pt-12 md:pt-0">
              <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-neutral-400">Awards & Recognition</h3>
              <ul className="space-y-6">
                {project.awards.map((award, idx) => (
                  <li key={idx} className="text-sm font-medium text-neutral-900 border-l-2 border-neutral-200 pl-4 py-1 italic leading-snug">
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {project.images.map((img, idx) => (
            <div key={idx} className="overflow-hidden group">
              <img src={img} alt={`${project.title} view ${idx + 1}`} className="w-full object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
