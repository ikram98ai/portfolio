import React, { useState } from 'react';
import { ClipboardList, X, Maximize2, Minimize2 } from 'lucide-react';

const ClientForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Replace this URL with your actual Google Form embed URL
  const GOOGLE_FORM_URL = "https://forms.gle/5QvPmBbR4ABGwuyi8";

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center bg-apple-dark text-white border border-gray-700 hover:bg-black group ${
          isOpen ? 'hidden' : 'flex'
        }`}
        title="Start a Project"
      >
        <ClipboardList size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap font-medium">
          Get a Quote
        </span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          
          {/* Modal Container */}
          <div 
            className={`bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
              isExpanded ? 'w-full h-full max-w-none rounded-none' : 'w-full max-w-lg h-[80vh] md:max-w-2xl'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center gap-2">
                 <div className="p-2 bg-blue-100 text-apple-blue rounded-lg">
                   <ClipboardList size={18} />
                 </div>
                 <h3 className="font-bold text-apple-text">Project Requirements</h3>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-2 text-gray-500 hover:text-apple-dark hover:bg-gray-200 rounded-lg transition-colors hidden md:block"
                  title={isExpanded ? "Collapse" : "Expand"}
                >
                  {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content (Iframe) */}
            <div className="flex-1 bg-white relative">
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 -z-10">
                 Loading form...
               </div>
               <iframe 
                 src={GOOGLE_FORM_URL}
                 width="100%" 
                 height="100%" 
                 frameBorder="0" 
                 marginHeight={0} 
                 marginWidth={0}
                 title="Client Requirements Form"
                 className="w-full h-full"
               >
                  Loading…
               </iframe>
               
             
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientForm;