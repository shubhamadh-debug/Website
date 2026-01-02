
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <h1 className="text-6xl md:text-9xl font-serif tracking-tighter mb-12">Shubham <span className="italic text-neutral-400">Adhikari</span></h1>
            <div className="space-y-8 text-lg text-neutral-600 leading-relaxed">
              <p>
                Currently an architectural candidate at the Global University of Design. My work explores the intersection of community-centric design, social equity, and architectural innovation.
              </p>
              <p>
                I am driven by the belief that design should serve as a catalyst for positive social change. My process involves deep contextual research and a commitment to creating sustainable spaces that empower the people who inhabit them.
              </p>
            </div>

            <div className="mt-20 space-y-12">
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 text-neutral-300">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-neutral-900 font-medium">B.Arch (Honors)</p>
                    <p className="text-sm text-neutral-500 italic">Global University of Design, 2020 — 2024</p>
                  </div>
                  <div>
                    <p className="text-neutral-900 font-medium">Summer Lab: Urban Inclusivity</p>
                    <p className="text-sm text-neutral-500 italic">Design for All Workshop, 2022</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 text-neutral-300">Technical Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 text-sm text-neutral-600">
                  <p>Rhino + Grasshopper</p>
                  <p>Revit</p>
                  <p>V-Ray / Enscape</p>
                  <p>Adobe Creative Cloud</p>
                  <p>ArcGIS</p>
                  <p>Community Mapping</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="sticky top-32">
              <img src="https://images.unsplash.com/photo-1519085185758-299837359ecd?auto=format&fit=crop&q=80&w=800&h=1200" alt="Profile" className="w-full grayscale brightness-90 hover:brightness-100 transition-all duration-700" />
              <div className="mt-8 p-6 bg-neutral-100 border-l-4 border-neutral-900">
                <p className="text-xs uppercase tracking-widest font-bold mb-2">Open for Opportunities</p>
                <p className="text-xs text-neutral-500 leading-relaxed italic">
                  Passionate about community development and innovative housing solutions. Seeking roles where design makes a tangible difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
