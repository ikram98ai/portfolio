import React, { useState } from "react";
import {
  Bot,
  Database,
  Brain,
  Layout,
  Server,
  Zap,
  Terminal,
  Code2,
  Cpu,
  Cloud,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { skills, services } from "../data";

const getIconForCategory = (category: string) => {
  if (category.toLowerCase().includes("programming"))
    return <Code2 size={20} className="text-blue-400 mb-3" />;
  else if (category.toLowerCase().includes("web"))
    return <Globe size={20} className="text-blue-400 mb-3" />;
  else if (category.toLowerCase().includes("ai"))
    return <Bot size={20} className="text-green-400 mb-3" />;
  else if (category.toLowerCase().includes("Deep Learning"))
    return <Cpu size={20} className="text-purple-400 mb-3" />;
  else if (category.toLowerCase().includes("cloud"))
    return <Cloud size={20} className="text-orange-400 mb-3" />;
};

const getIconForService = (title: string) => {
  if (title.toLowerCase().includes("agent"))
    return <Bot size={32} className="text-blue-500" />;
  else if (title.toLowerCase().includes("rag"))
    return <Database size={32} className="text-purple-500" />;
  else if (title.toLowerCase().includes("llm"))
    return <Brain size={32} className="text-pink-500" />;
  else if (title.toLowerCase().includes("app"))
    return <Layout size={32} className="text-yellow-500" />;
  else if (title.toLowerCase().includes("devop"))
    return <Server size={32} className="text-green-500" />;
  else if (title.toLowerCase().includes("model"))
    return <Zap size={32} className="text-orange-500" />;
};
const Expertise: React.FC = () => {
  return (
    <section
      id="expertise"
      className="py-32 bg-apple-dark text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            What I Can Build.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            End-to-end intelligence. From architectural blueprints to
            production-ready deployment.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={getIconForService(service.title)}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </div>

        {/* The Toolkit Section */}
        <div className="bg-[#1c1c1e] border border-gray-800 rounded-[40px] p-6 md:p-12">
          <div className="flex items-center gap-3 mb-6 md:mb-10">
            <Terminal className="text-gray-400" size={24} />
            <h3 className="text-2xl font-bold text-white">The Toolkit</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-10">
            {skills.map((skillCategory) => (
              <ToolkitColumn
                key={skillCategory.category}
                icon={getIconForCategory(skillCategory.category)}
                title={skillCategory.category}
                items={skillCategory.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
}> = ({ icon, title, desc }) => (
  <div className="group p-8 rounded-3xl bg-[#151516] border border-gray-800 hover:border-gray-600 transition-colors duration-300">
    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 ease-out">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm md:text-base">{desc}</p>
  </div>
);

const ToolkitColumn: React.FC<{
  icon: React.ReactNode;
  title: string;
  items: string[];
}> = ({ icon, title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 md:border-none last:border-0 pb-4 md:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between md:block md:text-left focus:outline-none group"
      >
        <div className="flex flex-col items-start pointer-events-none md:pointer-events-auto">
          <div className="mb-2 md:mb-3">{icon}</div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 md:mb-4 group-hover:text-gray-300 transition-colors">
            {title}
          </h4>
        </div>
        <div className="md:hidden text-gray-500 bg-gray-800/50 p-1 rounded-full">
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      <ul
        className={`space-y-3 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-64 opacity-100 mt-2"
            : "max-h-0 opacity-0 md:max-h-full md:opacity-100 md:mt-0"
        }`}
      >
        {items.map((item) => (
          <li
            key={item}
            className="text-gray-300 text-sm font-medium hover:text-white transition-colors cursor-default pl-1 md:pl-0"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expertise;
