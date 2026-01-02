
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="group block overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-1000 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
      </div>
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-serif">{project.title}</h3>
          <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] mt-2">
            {project.label}
          </p>
        </div>
        <span className="text-sm font-medium text-neutral-300 group-hover:text-neutral-900 transition-colors">
          {project.year}
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
