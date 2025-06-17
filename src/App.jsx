import React, { useState } from "react";
import dp from './assets/dp.png';

import {Star,  Code,  Mail,  TrendingUp,  Clock,  Shield,  CheckCircle,  ArrowRight} from "lucide-react";

import { reviews, skills, impactMetrics, caseStudies, methodology, differentiators, stats, contact } from "./data";

export const services = [
  {
    title: "LLM Fine-Tuning & Optimization",
    section:"llm",
    description:
      "SFT, LoRA, QLoRA, PPO, DPO, GRPO, vLLM for efficient training and high-performance inference.",
    keywords: ["Hugging Face", "Transfomer", "TRL", "Unsloth", "vLLM", "Kubeflow"],
    icon: (
      <svg
        className="w-8 h-8 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "AWS ML Solutions",
    section:"aws",

    description:
      "Design and deploy scalable ML pipelines using SageMaker, Glue, Bedrock, and other AWS services.",
    keywords: [
      "AWS Sagemaker", "AWS Bedrock", "Sagemaker pipeline", 'Auto ML'
    ],
    icon: (
      <svg
        className="w-8 h-8 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      </svg>
    ),
  },
  {
    title: "Data Engineering",
    section:"de",
    description:
      "Ensure data integrity and extract insights using Pandas, PySpark, SQL, and modern data tools.",
    keywords: [
      "Apache Airflow", "AWS Glue", "ETL Pipeline", "PySpark", "SQL", "Pandas",
    ],
    icon: (
      <svg
        className="w-8 h-8 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
  },
  {
    title: "AI Agent Development",
    section:"ai",
    description:
      "Create intelligent agent systems for automation, recommendations, and document processing.",
    keywords: ["AWS Bedrock", "Openai SDK", "Langchain", "RAG pipeline"],
    icon: (
      <svg
        className="w-8 h-8 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Computer Vision",
    section:"cv",
    description:
      "Develop AI-driven image processing solutions for industrial and business applications.",
    keywords: [
      "PyTorch", "Fastai", "Scikit-learn", "OpenCV", "YOLO"
    ],
    icon: (
      <svg
        className="w-8 h-8 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Infrastructure as Code",
    section:"iac",
    description:
      "Build reliable, scalable infrastructure using Terraform and AWS for ML deployments.",
    keywords: [
      "Terraform", "AWS CLI", "Boto3", "Github Action",
    ],
    icon: (
      <svg
        className="w-8 h-8 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

const App = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [hoveredMetric, setHoveredMetric] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-300 font-medium">
                  Available for Strategic AI Projects
                </span>
                <a
                  href={contact.upwork}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  Hire Me on Upwork
                </a>
              </div>
              <h1 className="text-white text-5xl font-bold">Ikram Khan</h1>
              <h1 className="text-3xl font-bold text-gray-100 my-6 leading-tight">
                AI/ML Engineer
                <span className="block text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  MLOps • DataOps • AI Agents • Terraform • AWS
                </span>
              </h1>
              <div className="text-white pb-4 ">
                  <div className="flex items-center">
                    <div className="bg-yellow-400 p-1 rounded-full">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="ml-2 font-bold">
                      5.0 Rating
                    </span>
                  </div>
                  <p className="mt-2 text-sm ">
                    Top Rated AI Engineer on Upwork
                  </p>
                </div>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Transforming data into innovative solutions that drive business
                success. I design and deploy sophisticated machine-learning
                models and pipelines using cutting-edge tools.
              </p>

              <div className="flex flex-wrap gap-4">
                
                <button
                  onClick={() => setActiveTab("projects")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center gap-2"
                >
                  <a href="#projects">
                    View Case Studies
                  </a>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href={contact.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700/50 transition-all duration-300"
                >
                  Upwork Profile
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
              
                <div className="relative bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8">
                  <img src={dp} className="mx-auto w-86 h-86 object-cover text-center rounded-full" alt="ikram98ai display image" />
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-4 border border-gray-700/30"
                      >
                        <div className="flex items-center gap-2">
                          <stat.icon className="w-5 h-5 text-blue-400" />
                          <span className="text-white font-semibold">
                            {stat.value}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {impactMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 text-center border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredMetric(index)}
              onMouseLeave={() => setHoveredMetric(null)}
            >
              <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                {metric.value}
                {metric.suffix || ""}
              </div>
              <div className="text-white font-medium mb-2">{metric.label}</div>
              <div
                className={`text-sm text-gray-400 transition-opacity duration-300 ${
                  hoveredMetric === index ? "opacity-100" : "opacity-70"
                }`}
              >
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What I Offer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I Offer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized AI/ML engineering services to transform your data into
            actionable insights and business solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div id={service.section}  key={index}
              className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.keywords.map((keyword, ind) => (
                  <span
                    key={ind}
                    className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-16">
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-full p-2 border border-gray-700/50">
            {["about", "methodology", "projects", "skills", "reviews"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-24">
        {activeTab === "about" && (
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">
                Strategic AI Engineering
              </h2>
              <p className="text-gray-400 leading-relaxed">
                As an AI/ML Engineer, I transform data into innovative solutions
                that drive measurable business success. With an emphasis on ROI
                and scalability, I design sophisticated machine-learning systems
                that deliver average returns of 340% within 90 days.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I don't just build AI systems—I solve business problems. My
                approach starts with understanding your goals, identifying
                high-impact opportunities, and delivering solutions that
                executives can measure and celebrate.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {differentiators.map((diff, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/30 backdrop-blur-lg rounded-lg p-4 border border-gray-700/50 text-center hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-3">
                      <diff.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {diff.title}
                    </h4>
                    <p className="text-xs text-gray-400">{diff.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Value Propositions
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                    <h4 className="text-lg font-semibold text-white">
                      Business Impact First
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Every AI solution delivers measurable ROI within 90 days.
                    Average client sees 340% return on investment.
                  </p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-blue-400" />
                    <h4 className="text-lg font-semibold text-white">
                      Rapid Deployment
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Prototype to production in 23 days average, not months. Time
                    is money—I deliver both.
                  </p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-purple-400" />
                    <h4 className="text-lg font-semibold text-white">
                      Enterprise Reliability
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    99.9% uptime with robust monitoring and failover systems.
                    Built to scale with your business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "methodology" && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Proven AI Development Process
            </h2>
            <p className="text-gray-400 text-center mb-12 text-lg">
              Methodology that consistently delivers 340% ROI
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 h-full hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-12 h-12 flex items-center justify-center">
                        <phase.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-blue-400">
                        {phase.phase}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                    <div className="text-xs text-blue-300 uppercase tracking-wide font-medium">
                      Deliverable: {phase.deliverable}
                    </div>
                  </div>
                  {index < methodology.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-gray-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div id="projects">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Business Impact Case Studies
            </h2>
            <p className="text-gray-400 text-center mb-12 text-lg">
              Real projects, real results, real ROI
            </p>
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                        <img className="object-cover h-full" src={study.img} alt="" />
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-white">
                            {study.title}
                          </h3>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                            {study.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <span>{study.client}</span>
                          <span>•</span>
                          <span>{study.duration}</span>
                          <span>•</span>
                          <span className="text-green-400 font-semibold">
                            {study.roi} ROI
                          </span>
                          <span>•</span>
                          {/* <span className="text-blue-400 font-semibold">
                            {study.amount}
                          </span> */}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-red-400 mb-2">
                          The Business Challenge
                        </h4>
                        <p className="text-gray-400">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">
                          My Strategic Solution
                        </h4>
                        <p className="text-gray-400">{study.solution}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {study.technologies.split(", ").map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-green-500/20">
                      <h4 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Business Impact
                      </h4>
                      <div className="space-y-3">
                        {study.impact.map((impact, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">
                              {impact}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Strategic AI Capabilities
            </h2>
            <p className="text-gray-400 text-center mb-12 text-lg">
              Skills that drive business transformation
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <skill.icon className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-semibold">
                      {skill.name}
                    </span>
                    <span className="text-blue-300 ml-auto">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Client Success Stories
            </h2>
            <p className="text-gray-400 text-center mb-12 text-lg">
              Results speak louder than technical jargon
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg font-semibold text-white">
                          {review.project}
                        </h3>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                          <span className="text-yellow-400 ml-1">
                            {review.rating}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {review.comment}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-700/50">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">
                          {review.duration}
                        </span>
                        <div className="text-right">
                          {/* <div className="text-lg font-bold text-green-400">
                            {review.amount}
                          </div> */}
                          <div className="text-sm font-semibold text-blue-400">
                            {review.businessImpact}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-24">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-12 text-center border border-gray-700/50">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how AI can solve your biggest business challenge and
            deliver measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`mailto:${contact.email}`}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center gap-2 text-lg"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <a
              href={contact.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700/50 transition-all duration-300"
            >
              View Upwork Profile
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Average client sees 340% ROI within 90 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
