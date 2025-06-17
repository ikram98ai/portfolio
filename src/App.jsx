import React, { useState } from 'react';

// --- Data for the portfolio ---

const portfolioData = {
  name: "Ikram Khan",
  title: "AI & Machine Learning Engineer",
  tagline: "I build intelligent, scalable AI solutions that transform data into business value. Specializing in MLOps, custom AI Agents, and end-to-end AWS pipelines.",
  contact: {
    email: "ikram98ai@gmail.com",
    upwork: "https://www.upwork.com/freelancers/ikram98ai", 
    linkedin: "https://www.linkedin.com/in/ikram98ai/", 
    github: "https://github.com/ikram98ai", 
  },
  services: [
    {
      title: "AI & Machine Learning Solutions",
      description: "I design and deploy sophisticated models for predictive modeling, computer vision, and NLP. I leverage frameworks like PyTorch and Scikit-learn to solve complex challenges and drive data-driven success.",
      keywords: ["PyTorch", "Fastai", "Scikit-learn", "XGBoost", "Predictive Modeling"]
    },
    {
      title: "MLOps & Scalable Pipelines",
      description: "I build robust, automated ML workflows on AWS for seamless training, evaluation, and deployment. My expertise in DataOps and Infrastructure as Code ensures your solutions are scalable and efficient.",
      keywords: ["AWS SageMaker", "AWS Glue", "Terraform", "DataOps", "CI/CD"]
    },
    {
      title: "LLM Fine-Tuning & Optimization",
      description: "I specialize in advanced LLM techniques, including parameter-efficient fine-tuning (LoRA, QLoRA), human preference alignment (DPO), and high-performance inference to create powerful, custom AI agents.",
      keywords: ["Hugging Face", "TRL", "Unsloth", "vLLM", "LangChain"]
    },
    {
      title: "Full-Stack AI Integration",
      description: "I develop RESTful APIs and integrate AI solutions seamlessly into your existing systems. From AWS Bedrock to custom-built APIs, I deliver comprehensive, end-to-end AI applications.",
      keywords: ["RESTful APIs", "AWS Bedrock", "Full-Stack", "System Integration"]
    }
  ],
  projects: [
    {
      title: "Health AI Agent using LangGraph",
      description: "An AI-driven agent system that automates wellness checks, provides video recommendations, manages class enrollments, and answers document queries using a multi-agent architecture.",
      stack: ["LangGraph", "RAG", "Vector DB", "MongoDB"],
      imageUrl: "https://placehold.co/600x400/1a202c/718096?text=Health+AI+Agent"
    },
    {
      title: "RoBERTa Fake-News Detection Pipeline",
      description: "An advanced AWS SageMaker pipeline for detecting fake news, featuring automated preprocessing, training, model registration, and deployment for real-time predictions.",
      stack: ["AWS SageMaker", "RoBERTa", "NLP", "Scikit-learn"],
      imageUrl: "https://placehold.co/600x400/1a202c/718096?text=Fake-News+Pipeline"
    },
    {
      title: "XGBoost SageMaker Pipeline",
      description: "A fully automated, end-to-end system on AWS SageMaker that enables retail clients to generate optimized XGBoost models for product sales forecasting.",
      stack: ["AWS SageMaker", "XGBoost", "Python", "Automation"],
      imageUrl: "https://placehold.co/600x400/1a202c/718096?text=XGBoost+Pipeline"
    }
  ],
  testimonials: [
    {
      quote: "Ikram was absolutely incredible to work with. Not only is he a FANTASTIC developer who really knows what he is doing and writes great code, he was extremely communicative...",
      client: "Client from Fine-Tune LLaMA 3-Vision Models",
      rating: 5
    },
    {
      quote: "I worked with Ikram Khan on developing a chatbot, and the results exceeded expectations. His expertise as an AI Engineer was evident throughout the project...",
      client: "Client from AWS Certified AI/ML Developer",
      rating: 5
    },
    {
      quote: "Great job creating the python script I required. Great speed, communication and knowledge.",
      client: "Client from Python Script for Task Optimisation",
      rating: 5
    },
    {
      quote: "Ikram is really on time and do a great work to both explain the methology he is using and deliver timely. I'll absolute use him again if I've the chance.",
      client: "Client from Deploy ML Pipeline",
      rating: 5
    }
  ],
  workHistory: [
    { title: "Fine-Tune LLaMA 3-Vision Models", rating: 5.0, date: "Jun 14, 2025", price: "$6000.00" },
    { title: "Hugging Face Auto Train Expert", rating: 5.0, date: "Apr 22, 2025", price: "$5000.00" },
    { title: "Symbol Detection Application", rating: null, date: "Jan 28, 2025", price: "$4000.00" },
    { title: "AWS Certified AI/ML Developer", rating: 5.0, date: "Jan 1, 2025", price: "$5000.00" },
    { title: "Python Script for Task Optimisation", rating: 5.0, date: "Dec 5, 2024", price: "$2000.00" },
    { title: "Deploy ML Pipeline and serverless inference", rating: 5.0, date: "Sep 27, 2024", price: "$3000.00" },
  ]
};


// --- Icon Components ---

const StarIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const UpworkIcon = ({ className }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M17.415 15.64c-2.135 0-3.865-1.73-3.865-3.865s1.73-3.865 3.865-3.865c2.135 0 3.865 1.73 3.865 3.865s-1.73 3.865-3.865 3.865zm0-6.13c-1.25 0-2.265 1.015-2.265 2.265s1.015 2.265 2.265 2.265c1.25 0 2.265-1.015 2.265-2.265s-1.015-2.265-2.265-2.265zM12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 21.6c-5.303 0-9.6-4.298-9.6-9.6S6.697 2.4 12 2.4s9.6 4.298 9.6 9.6-4.297 9.6-9.6 9.6zm-1.08-4.44a3.143 3.143 0 0 1-2.025-.855l-.705.825c.345.3.735.555 1.155.765v1.245h1.5v-1.2c.48-.135.915-.36 1.305-.66l-.75-.825c-.27.21-.57.375-.885.48v-2.01c1.995-.495 2.895-1.89 2.895-3.525 0-1.575-1.125-2.82-3.045-2.82-1.74 0-2.895 1.11-2.895 2.655 0 .615.225 1.14.63 1.545l.84-.705c-.195-.24-.315-.51-.315-.81 0-.75.6-1.335 1.635-1.335 1.05 0 1.665.615 1.665 1.485 0 1.11-.825 1.635-2.205 1.95v2.25z"/>
    </svg>
);

const LinkedInIcon = ({ className }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
    </svg>
);

const GitHubIcon = ({ className }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
);

const MailIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

const MenuIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Services", "Projects", "Testimonials", "Contact"];

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => smoothScroll(e, 'home')} className="text-2xl font-bold text-white tracking-tighter">
            {portfolioData.name}
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => smoothScroll(e, link.toLowerCase())} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                {link}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => smoothScroll(e, link.toLowerCase())} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-all duration-300">
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            {portfolioData.title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            {portfolioData.tagline}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#projects" onClick={(e) => smoothScroll(e, 'projects')} className="w-full sm:w-auto px-8 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105">
              View My Projects
            </a>
            <a href={portfolioData.contact.upwork} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition-all duration-300">
              Hire Me on Upwork
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{title}</h2>
    <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">{subtitle}</p>
    <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded"></div>
  </div>
);

const Services = () => (
  <section id="services" className="py-20 bg-gray-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="What I Offer" subtitle="Here's how I can help you build cutting-edge AI solutions." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {portfolioData.services.map(service => (
          <div key={service.title} className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 transform hover:-translate-y-2">
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.keywords.map(keyword => (
                <span key={keyword} className="text-xs font-semibold bg-gray-700 text-cyan-300 px-2 py-1 rounded-full">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="My Portfolio" subtitle="Here are some of the projects I'm proud of." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map(project => (
          <div key={project.title} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg group">
            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1a202c/718096?text=Image+Error'; }} />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="text-xs font-semibold bg-gray-700 text-cyan-300 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gray-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="What My Clients Say" subtitle="I'm proud to have earned the trust of my clients." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-900 p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-gray-300 italic mb-4">"{testimonial.quote}"</blockquote>
            <p className="text-right font-semibold text-cyan-400">- {testimonial.client}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WorkHistory = () => (
    <section id="work-history" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="My Track Record" subtitle="A summary of my recent work on Upwork." />
            <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
                <table className="w-full text-left text-gray-300">
                    <thead className="bg-gray-700 text-xs text-gray-300 uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-3">Job Title</th>
                            <th className="px-6 py-3 text-center">Rating</th>
                            <th className="px-6 py-3">Completed</th>
                            <th className="px-6 py-3 text-right">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {portfolioData.workHistory.map((job, index) => (
                            <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors duration-200">
                                <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{job.title}</td>
                                <td className="px-6 py-4 text-center">
                                    {job.rating ? (
                                        <div className="flex items-center justify-center">
                                            <span className="text-yellow-400">{job.rating.toFixed(1)}</span>
                                            <StarIcon className="w-4 h-4 text-yellow-400 ml-1" />
                                        </div>
                                    ) : (
                                        <span className="text-gray-500">-</span>
                                    )}
                                </td>
                                <td className="px-6 py-4">{job.date}</td>
                                <td className="px-6 py-4 text-right font-mono">{job.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
);


const Footer = () => (
  <footer id="contact" className="bg-gray-900 border-t border-gray-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          I'm currently available for new freelance opportunities. If you have a project in mind, I'd love to hear from you.
        </p>
        <div className="flex justify-center items-center space-x-6">
          <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300" aria-label="Email">
            <MailIcon className="w-8 h-8"/>
          </a>
          <a href={portfolioData.contact.upwork} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300" aria-label="Upwork">
            <UpworkIcon className="w-8 h-8"/>
          </a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300" aria-label="LinkedIn">
            <LinkedInIcon className="w-8 h-8"/>
          </a>
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300" aria-label="GitHub">
            <GitHubIcon className="w-8 h-8"/>
          </a>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-12 border-t border-gray-800 pt-6">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);


export default function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <WorkHistory />
      </main>
      <Footer />
    </div>
  );
}