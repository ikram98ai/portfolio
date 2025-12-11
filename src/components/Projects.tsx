import React, { useState } from 'react';
import { projects } from '../data';
import { ExternalLink, ChevronDown, ChevronUp, Layers, Cpu, Globe, Maximize2, X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  // Lightbox State
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    projectId: string | null;
    imageIndex: number;
  }>({
    isOpen: false,
    projectId: null,
    imageIndex: 0
  });

  // Extract unique categories
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openLightbox = (e: React.MouseEvent, projectId: string, index: number = 0) => {
    e.stopPropagation();
    setLightbox({ isOpen: true, projectId, imageIndex: index });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (!lightbox.projectId) return;
    const project = projects.find(p => p.id === lightbox.projectId);
    if (!project) return;

    const count = project.imageUrls.length;
    let newIndex = direction === 'next' ? lightbox.imageIndex + 1 : lightbox.imageIndex - 1;

    // Cycle
    if (newIndex >= count) newIndex = 0;
    if (newIndex < 0) newIndex = count - 1;

    setLightbox({ ...lightbox, imageIndex: newIndex });
  };

  const currentProjectForLightbox = projects.find(p => p.id === lightbox.projectId);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
           <h2 className="text-4xl md:text-5xl font-bold text-apple-text tracking-tight mb-4">
            Selected Work.
          </h2>
          <p className="text-xl text-apple-text-secondary mb-8">
             Production-ready applications solving real-world problems.
          </p>

          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-apple-text text-white shadow-lg scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-start transition-all duration-500 ease-in-out`}
            >
              {/* Image Side */}
              <div 
                className="w-full md:w-3/5 group cursor-pointer rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 bg-gray-50 overflow-hidden relative" 
                onClick={(e) => openLightbox(e, project.id, 0)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.imageUrls[0]} 
                    alt={project.title} 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Gallery Indicator / Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  
                  <button 
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full text-apple-dark opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-white"
                    title="View Fullscreen"
                  >
                    <Maximize2 size={20} />
                  </button>

                  {project.imageUrls.length > 1 && (
                     <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-sm">
                        <ImageIcon size={12} />
                        {project.imageUrls.length} photos
                     </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="bg-white/90 backdrop-blur-md text-apple-dark px-6 py-2 rounded-full text-sm font-bold shadow-xl">
                      View Gallery
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-2/5 space-y-6 pt-4">
                <div className="flex items-center gap-3">
                   <span className="inline-block px-3 py-1 bg-blue-50 text-apple-blue rounded-full text-xs font-bold uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-gray-400 text-sm font-medium">• {project.role}</span>
                </div>
               
                <h3 className="text-3xl font-bold text-apple-text leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-lg text-gray-500 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-50 text-gray-500 rounded-md text-xs font-medium border border-gray-100">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="pt-2 flex gap-4">
                  <button 
                    onClick={() => toggleExpand(project.id)}
                    className="flex items-center gap-2 text-apple-text font-semibold hover:text-apple-blue transition-colors group"
                  >
                    {expandedId === project.id ? 'Hide Details' : 'Read More'}
                    {expandedId === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-apple-text transition-colors">
                      <ExternalLink size={16} /> view code
                    </a>
                  )}
                </div>

                {/* Expanded Details */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedId === project.id ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4 text-sm text-gray-600 shadow-inner">
                    {project.details && (
                      <>
                        <div>
                          <h4 className="flex items-center gap-2 font-bold text-apple-text mb-1">
                            <Layers size={14} className="text-orange-500" /> The Challenge
                          </h4>
                          <p>{project.details.challenge}</p>
                        </div>
                        <div>
                          <h4 className="flex items-center gap-2 font-bold text-apple-text mb-1">
                            <Cpu size={14} className="text-blue-500" /> The Solution
                          </h4>
                          <p>{project.details.solution}</p>
                        </div>
                        <div>
                          <h4 className="flex items-center gap-2 font-bold text-apple-text mb-1">
                            <Globe size={14} className="text-green-500" /> The Outcome
                          </h4>
                          <p>{project.details.outcome}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox.isOpen && currentProjectForLightbox && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center animate-fade-in">
          
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
          >
            <X size={24} />
          </button>

          {/* Navigation - Prev */}
          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all backdrop-blur-md"
          >
             <ChevronLeft size={24} />
          </button>

          {/* Image Container */}
          <div className="max-w-[90vw] max-h-[85vh] relative flex flex-col items-center">
             <img 
               src={currentProjectForLightbox.imageUrls[lightbox.imageIndex]} 
               alt={`${currentProjectForLightbox.title} - view ${lightbox.imageIndex + 1}`}
               className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
             />
             
             {/* Caption / Counter */}
             <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-bold">{currentProjectForLightbox.title}</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Image {lightbox.imageIndex + 1} of {currentProjectForLightbox.imageUrls.length}
                </p>
             </div>
             
             {/* Thumbnail Strip (Optional) */}
             <div className="mt-6 flex gap-2 overflow-x-auto max-w-[80vw] px-4 pb-2 scrollbar-hide">
               {currentProjectForLightbox.imageUrls.map((url, idx) => (
                 <button 
                   key={idx}
                   onClick={(e) => { e.stopPropagation(); setLightbox({...lightbox, imageIndex: idx}) }}
                   className={`w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                     idx === lightbox.imageIndex ? 'border-apple-blue opacity-100 scale-110' : 'border-transparent opacity-50 hover:opacity-100'
                   }`}
                 >
                   <img src={url} alt="thumb" className="w-full h-full object-cover" />
                 </button>
               ))}
             </div>
          </div>

          {/* Navigation - Next */}
          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all backdrop-blur-md"
          >
             <ChevronRight size={24} />
          </button>

        </div>
      )}
    </section>
  );
};

export default Projects;