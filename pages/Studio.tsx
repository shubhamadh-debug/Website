
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
                I am a Graduate Architect currently pursuing a Masters in Architecture at Clemson University. With a professional foundation as a Principal and Senior Architect in Nepal, my practice bridges technical precision with empathetic, community-focused design.
              </p>
              <p>
                My work explores the intersections of architecture and resilience, ranging from large-scale hospitality projects to intricate material research. I am dedicated to creating spaces that foster social equity and ecological harmony through thoughtful, site-sensitive interventions.
              </p>
            </div>

            <div className="mt-20 space-y-16">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-neutral-300">Education</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-neutral-900 font-medium">Masters in Architecture</p>
                      <p className="text-sm text-neutral-500">Clemson University, SC</p>
                      <p className="text-xs text-neutral-400 italic">2024 — Present</p>
                    </div>
                    <div>
                      <p className="text-neutral-900 font-medium">Bachelor's in Architecture</p>
                      <p className="text-sm text-neutral-500">Kathmandu Engineering College, Nepal</p>
                      <p className="text-xs text-neutral-400 italic">2014 — 2019</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-neutral-300">Experience</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-neutral-900 font-medium font-serif italic text-lg leading-tight">Gresham Smith</p>
                      <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">2024 Summer</p>
                    </div>
                    <div>
                      <p className="text-neutral-900 font-medium font-serif italic text-lg leading-tight">Rootnine Design Pvt. Ltd</p>
                      <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">2020 — Present</p>
                    </div>
                    <div>
                      <p className="text-neutral-900 font-medium font-serif italic text-lg leading-tight">Zero Dia Design Pvt. Ltd</p>
                      <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">2020 — 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-neutral-300">Technical Expertise</h3>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-[11px] uppercase tracking-widest text-neutral-600">
                    <p>AutoCAD</p>
                    <p>Revit</p>
                    <p>Sketchup</p>
                    <p>Rhino</p>
                    <p>Lumion</p>
                    <p>V-Ray</p>
                    <p>D5 Render</p>
                    <p>Adobe CC</p>
                    <p>GIS</p>
                    <p>MS Office</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-neutral-300">Languages</h3>
                  <div className="space-y-4 text-sm text-neutral-600">
                    <p className="flex justify-between border-b border-neutral-100 pb-2"><span>Nepali</span> <span className="text-neutral-300 italic">Native</span></p>
                    <p className="flex justify-between border-b border-neutral-100 pb-2"><span>English</span> <span className="text-neutral-300 italic">Fluent</span></p>
                    <p className="flex justify-between border-b border-neutral-100 pb-2"><span>Hindi</span> <span className="text-neutral-300 italic">Conversational</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="sticky top-32">
              <div className="aspect-[3/4] bg-neutral-200 overflow-hidden grayscale brightness-90 border border-neutral-200">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" 
                  alt="Portrait" 
                  className="w-full h-full object-cover opacity-80" 
                />
              </div>
              <div className="mt-8 p-8 bg-white border border-neutral-100 shadow-sm">
                <p className="text-xs uppercase tracking-widest font-bold mb-4 text-neutral-900">Current Status</p>
                <p className="text-sm text-neutral-500 leading-relaxed italic">
                  Graduate Architect | Pursuing M.Arch at Clemson University.
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
