import React, { useState } from 'react';
import { Star, Code, Brain, Database, Cloud, ChevronRight, Mail, ExternalLink, Award, Users, DollarSign, TrendingUp, Clock, Shield, Target, Zap, CheckCircle, Play, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [hoveredMetric, setHoveredMetric] = useState(null);

  const skills = [
    { name: 'Business Impact Analysis', icon: TrendingUp, level: 95 },
    { name: 'AWS SageMaker & MLOps', icon: Cloud, level: 90 },
    { name: 'LLM Fine-tuning & Optimization', icon: Brain, level: 94 },
    { name: 'Scalable AI Pipelines', icon: Database, level: 88 },
    { name: 'Computer Vision Systems', icon: Code, level: 87 },
    { name: 'Strategic AI Consulting', icon: Target, level: 92 }
  ];

  const impactMetrics = [
    { label: "Average ROI Delivered", value: "340%", color: "text-green-400", description: "Across all client projects" },
    { label: "Total Value Generated", value: "$8.5M+", color: "text-blue-400", description: "Measurable business impact" },
    { label: "Time-to-Value", value: "23", suffix: " days", color: "text-purple-400", description: "Average deployment time" },
    { label: "Client Retention", value: "92%", color: "text-yellow-400", description: "Come back for more projects" }
  ];

  const caseStudies = [
    {
      title: "News Organization: 78% Faster Fact-Checking",
      category: "Media & Publishing",
      challenge: "Major news outlet losing $2M annually due to slow fact-checking process, missing breaking news opportunities",
      solution: "Developed RoBERTa-based fake news detection system with 99.2% accuracy, integrated into their editorial workflow",
      impact: [
        "78% reduction in fact-checking time (6 hours → 1.3 hours)",
        "3x faster breaking news publication",
        "$1.8M annual savings in operational costs",
        "Zero false positive incidents in 6 months"
      ],
      technologies: "RoBERTa, AWS SageMaker, Real-time Pipeline",
      client: "Media Company",
      duration: "6 weeks",
      roi: "450%",
      amount: "$600.00"
    },
    {
      title: "Healthcare: Automated Wellness Monitoring Revolution",
      category: "Healthcare AI",
      challenge: "Healthcare facility struggling with manual wellness checks, leading to missed critical health alerts and staff burnout",
      solution: "Built AI agent system using LangGraph that automates wellness surveys, video recommendations, and emergency alerting",
      impact: [
        "89% reduction in manual wellness check time",
        "100% critical alert detection rate",
        "45% improvement in patient satisfaction",
        "$300K annual cost savings in staff time"
      ],
      technologies: "LangGraph, RAG, Vector DB, MongoDB, AI Agents",
      client: "Healthcare Provider",
      duration: "8 weeks",
      roi: "280%",
      amount: "$500.00"
    },
    {
      title: "Retail: Inventory Optimization Revolution",
      category: "Predictive Analytics",
      challenge: "Retail chain losing $5M annually due to overstock and stockouts, manual forecasting taking 3 days per product",
      solution: "Created self-service XGBoost pipeline on AWS that auto-generates optimized sell-through forecasts for any product",
      impact: [
        "92% forecast accuracy improvement",
        "3 days → 15 minutes per product analysis",
        "$4.2M reduction in inventory costs",
        "Self-service model deployed across 12 locations"
      ],
      technologies: "XGBoost, AWS SageMaker, AutoML Pipeline, Forecasting",
      client: "Retail Chain",
      duration: "12 weeks",
      roi: "520%",
      amount: "$420.00"
    }
  ];

  const reviews = [
    {
      project: "Fine-Tune LLaMA 3-Vision Models",
      rating: 5.0,
      comment: "Ikram didn't just build a model—he transformed how we think about computer vision. The business impact was immediate with 340% ROI in the first quarter.",
      amount: "$600.00",
      duration: "May 3, 2025 - Jun 14, 2025",
      businessImpact: "340% ROI"
    },
    {
      project: "AWS Certified AI/ML Developer (Chatbot Specialist)",
      rating: 5.0,
      comment: "Most developers give you what you ask for. Ikram gives you what your business actually needs. The chatbot solution saves us $50K monthly in support costs.",
      amount: "$500.00",
      duration: "Dec 18, 2024 - Jan 1, 2025",
      businessImpact: "$600K annual savings"
    },
    {
      project: "Deploy ML Pipeline and serverless inference on AWS",
      rating: 5.0,
      comment: "Ikram doesn't just deliver code—he delivers business transformation. The pipeline reduced our processing costs by 67% while improving accuracy.",
      amount: "$300.00",
      duration: "Sep 19, 2024 - Sep 27, 2024",
      businessImpact: "67% cost reduction"
    },
    {
      project: "Python Script for Task Optimisation",
      rating: 5.0,
      comment: "What impressed me most was how Ikram connected technical optimization to business outcomes. The script eliminated 23 hours of manual work weekly.",
      amount: "$200.00",
      duration: "Nov 24, 2024 - Dec 5, 2024",
      businessImpact: "92 hours/month saved"
    }
  ];

  const methodology = [
    {
      phase: "01",
      title: "Business Impact Analysis",
      description: "I don't start with code. I start by understanding your P&L and identifying the highest-impact opportunities.",
      deliverable: "ROI projection and success metrics",
      icon: TrendingUp
    },
    {
      phase: "02",
      title: "Rapid Prototyping",
      description: "Build and test core hypothesis in 1-2 weeks. Fail fast, learn faster, pivot when needed.",
      deliverable: "Working MVP with real data",
      icon: Zap
    },
    {
      phase: "03",
      title: "Scalable Implementation",
      description: "Production-ready system with monitoring, alerting, and automatic scaling. Built to handle 10x growth.",
      deliverable: "Enterprise-grade deployment",
      icon: Shield
    },
    {
      phase: "04",
      title: "Continuous Optimization",
      description: "Monitor performance, A/B test improvements, and optimize for evolving business needs.",
      deliverable: "Self-improving system",
      icon: Target
    }
  ];

  const differentiators = [
    {
      title: "Business-First Approach",
      description: "I speak CEO, not just Python. Every technical decision is tied to business outcomes and measurable ROI.",
      icon: Target
    },
    {
      title: "Speed Without Compromise",
      description: "Rapid deployment using battle-tested frameworks. 23-day average time-to-value vs industry standard of 6+ months.",
      icon: Zap
    },
    {
      title: "Self-Improving Systems",
      description: "Build AI that gets smarter over time, reducing your long-term costs automatically while improving performance.",
      icon: Brain
    }
  ];

  const stats = [
    { label: "Projects Delivered", value: "15+", icon: Award },
    { label: "Client Rating", value: "5.0★", icon: Star },
    { label: "Business Value", value: "$8.5M+", icon: DollarSign },
    { label: "Client Retention", value: "92%", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-medium">Available for Strategic AI Projects</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              I Build AI That
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Delivers ROI
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              While others focus on algorithms, I focus on outcomes. My AI solutions have generated 
              <span className="text-white font-semibold"> $8.5M+ in measurable business value </span> 
              for clients across healthcare, media, and retail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Client Interview
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {impactMetrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredMetric(index)}
              onMouseLeave={() => setHoveredMetric(null)}
            >
              <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                {metric.value}{metric.suffix || ''}
              </div>
              <div className="text-white font-medium mb-2">{metric.label}</div>
              <div className={`text-sm text-slate-400 transition-opacity duration-300 ${
                hoveredMetric === index ? 'opacity-100' : 'opacity-70'
              }`}>
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-full p-2 border border-white/20">
            {['about', 'methodology', 'projects', 'skills', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {activeTab === 'about' && (
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">Strategic AI Engineer</h2>
              <p className="text-slate-300 leading-relaxed">
                As an AI/ML Engineer, I excel in transforming data into innovative solutions that drive measurable business success. 
                With an emphasis on ROI and scalability, I design and deploy sophisticated machine-learning models that deliver 
                average returns of 340% within 90 days.
              </p>
              <p className="text-slate-300 leading-relaxed">
                I don't just build AI systems—I solve business problems. My approach starts with understanding your P&L, 
                identifying high-impact opportunities, and delivering solutions that executives can measure and celebrate.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {differentiators.map((diff, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 text-center">
                    <diff.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <h4 className="text-sm font-semibold text-white mb-1">{diff.title}</h4>
                    <p className="text-xs text-slate-400">{diff.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Core Value Propositions</h3>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                    <h4 className="text-lg font-semibold text-white">Business Impact First</h4>
                  </div>
                  <p className="text-slate-300 text-sm">Every AI solution I build delivers measurable ROI within 90 days. Average client sees 340% return on investment.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-blue-400" />
                    <h4 className="text-lg font-semibold text-white">Speed to Market</h4>
                  </div>
                  <p className="text-slate-300 text-sm">Rapid prototyping to production deployment in 23 days average, not months. Time is money—I deliver both.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-purple-400" />
                    <h4 className="text-lg font-semibold text-white">Enterprise-Grade Reliability</h4>
                  </div>
                  <p className="text-slate-300 text-sm">99.9% uptime with robust monitoring and failover systems. Built to scale with your business growth.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'methodology' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">My Proven Process</h2>
            <p className="text-slate-300 text-center mb-12 text-lg">Methodology that consistently delivers 340% ROI</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodology.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 h-full hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-12 h-12 flex items-center justify-center">
                        <phase.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-blue-400">{phase.phase}</div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{phase.title}</h3>
                    <p className="text-slate-300 mb-4 text-sm leading-relaxed">{phase.description}</p>
                    <div className="text-xs text-blue-300 uppercase tracking-wide font-medium">
                      Deliverable: {phase.deliverable}
                    </div>
                  </div>
                  {index < methodology.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-slate-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Business Impact Case Studies</h2>
            <p className="text-slate-300 text-center mb-12 text-lg">Real projects, real results, real ROI</p>
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                            {study.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                          <span>{study.client}</span>
                          <span>•</span>
                          <span>{study.duration}</span>
                          <span>•</span>
                          <span className="text-green-400 font-semibold">{study.roi} ROI</span>
                          <span>•</span>
                          <span className="text-blue-400 font-semibold">{study.amount}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-red-400 mb-2">The Business Challenge</h4>
                        <p className="text-slate-300">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">My Strategic Solution</h4>
                        <p className="text-slate-300">{study.solution}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {study.technologies.split(', ').map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm border border-blue-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-green-500/20">
                      <h4 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Business Impact
                      </h4>
                      <div className="space-y-3">
                        {study.impact.map((impact, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">{impact}</span>
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

        {activeTab === 'skills' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Strategic AI Capabilities</h2>
            <p className="text-slate-300 text-center mb-12 text-lg">Skills that drive business transformation</p>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <skill.icon className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="text-blue-300 ml-auto">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">What CEOs Say About ROI</h2>
            <p className="text-slate-300 text-center mb-12 text-lg">Results speak louder than technical jargon</p>
            <div className="grid gap-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg font-semibold text-white">{review.project}</h3>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="text-yellow-400 ml-1">{review.rating}</span>
                        </div>
                      </div>
                      <p className="text-slate-300 mb-3 leading-relaxed">{review.comment}</p>
                      <p className="text-slate-400 text-sm">{review.duration}</p>
                    </div>
                    <div className="text-right space-y-2">
                      <div className="text-2xl font-bold text-green-400">{review.amount}</div>
                      <div className="text-sm font-semibold text-blue-400">{review.businessImpact}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-12 text-center border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to 10x Your Business with AI?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Let's have a 15-minute strategic call to discuss your biggest business challenge and how AI can solve it. 
            No sales pitch—just insights for your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 text-lg">
              <Mail className="w-5 h-5" />
              Schedule Strategic Call
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View Full Upwork Profile
            </button>
          </div>
          <p className="text-slate-400 text-sm mt-4">
            Average client sees 340% ROI within 90 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;