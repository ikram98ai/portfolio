import React, { useState, useEffect } from 'react';
import { experience, education, certifications, testimonials } from '../data';
import { Briefcase, GraduationCap, Award, Star, Quote, ChevronLeft, ChevronRight, Calendar, Building2, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="experience" className="py-32 bg-apple-gray overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-24">
           <h2 className="text-4xl md:text-5xl font-bold text-apple-text tracking-tight mb-4">Trajectory.</h2>
           <p className="text-xl text-gray-500 max-w-2xl mx-auto">
             A timeline of consistent delivery, continuous learning, and professional excellence.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32">
          
          {/* Employment Column */}
          <div>
            <div className="flex items-center gap-3 mb-10 pb-4 border-b border-gray-200">
              <div className="p-2 bg-blue-100 rounded-lg text-apple-blue">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-apple-text">Employment</h3>
            </div>
            
            <div className="space-y-12 ml-3">
              {experience.map((job) => (
                <div key={job.id} className="relative pl-8 border-l-2 border-dashed border-gray-300 last:border-0 pb-8 last:pb-0">
                  {/* Distinct Visual Marker */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-apple-blue ring-4 ring-white shadow-sm"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-bold text-apple-text">{job.role}</h4>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-md border border-gray-100 shadow-sm mt-1 sm:mt-0">
                      <Calendar size={12} /> {job.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 size={14} className="text-apple-blue" />
                    <span className="text-apple-blue font-medium">{job.company}</span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm p-4 rounded-xl  hover:shadow-sm">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs Column */}
          <div>
             <div className="flex items-center gap-3 mb-10 pb-4 border-b border-gray-200">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-apple-text">Education & Certs</h3>
            </div>

            <div className="space-y-12 ml-3">
              
              {/* Education Items */}
              {education.map((edu, idx) => (
                <div key={`edu-${idx}`} className="relative pl-8 border-l-2 border-dashed border-gray-300 pb-8">
                   <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-white shadow-sm"></div>
                   
                   <h4 className="text-lg font-bold text-apple-text mb-1">{edu.degree}</h4>
                   <p className="text-gray-700 font-medium mb-1 flex items-center gap-2">
                     <GraduationCap size={16} className="text-gray-400" /> {edu.institution}
                   </p>
                   <span className="text-xs font-medium text-gray-400 uppercase tracking-wide bg-gray-100 px-2 py-0.5 rounded-full inline-block mt-1">
                     {edu.year}
                   </span>
                </div>
              ))}

              {/* Certification Items */}
              {certifications.map((cert, idx) => (
                 <div key={`cert-${idx}`} className="relative pl-8 border-l-2 border-dashed border-gray-300 last:border-0 pb-8 last:pb-0">
                   <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-green-500 shadow-sm"></div>
                   
                   <h4 className="text-base font-bold text-apple-text mb-1">{cert.name}</h4>
                   <div className="flex items-center justify-between mt-2  p-3 rounded-xl transition-all hover:shadow-md">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Provider</span>
                        <span className="text-sm font-medium text-gray-800">{cert.provider}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded">{cert.issued}</span>
                        {cert.link && (
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-apple-blue transition-colors"
                            title="Verify Credential"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mt-20">
           {/* Decorative Elements */}
           <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-2xl"></div>
           <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>

           <div className="relative bg-white rounded-[40px] p-8 md:p-16 shadow-xl border border-gray-100 text-center">
             <div className="mb-8 flex justify-center text-apple-blue">
               <Quote size={40} fill="currentColor" className="opacity-20" />
             </div>

             <div className="min-h-[180px] flex flex-col justify-center items-center transition-all duration-500">
                <div className="flex gap-1 mb-6 text-yellow-400">
                   {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                     <Star key={i} size={20} fill="currentColor" />
                   ))}
                </div>
                
                <p className="text-2xl md:text-3xl font-medium text-apple-text italic leading-relaxed mb-8 max-w-4xl">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                
                <div>
                  <p className="font-bold text-lg text-apple-text">{testimonials[currentTestimonial].author}</p>
                  <p className="text-sm font-medium text-apple-blue">{testimonials[currentTestimonial].role}</p>
                </div>
             </div>

             {/* Carousel Controls */}
             <div className="flex items-center justify-center gap-8 mt-12">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-apple-text hover:border-gray-400 transition-all active:scale-95"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex gap-2.5">
                  {testimonials.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentTestimonial ? 'w-8 bg-apple-blue' : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-apple-text hover:border-gray-400 transition-all active:scale-95"
                >
                  <ChevronRight size={20} />
                </button>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
