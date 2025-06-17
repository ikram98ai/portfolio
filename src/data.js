import {
    Star,
    Code,
    Brain,
    Database,
    Cloud,
    Award,
    Users,
    DollarSign,
    TrendingUp,
    Shield,
    Target,
    Zap,
  } from "lucide-react";
import health_arc from './assets/health.png';
import news_arc from './assets/news.png';
import retail_arc from './assets/retail.png';

export const skills = [
    { name: "Business Impact Analysis", icon: TrendingUp, level: 95 },
    { name: "AWS SageMaker & MLOps", icon: Cloud, level: 90 },
    { name: "LLM Fine-tuning & Optimization", icon: Brain, level: 94 },
    { name: "Scalable AI Pipelines", icon: Database, level: 88 },
    { name: "Computer Vision Systems", icon: Code, level: 87 },
    { name: "Strategic AI Consulting", icon: Target, level: 92 },
  ];

export const contact = {
    email: "ikram98ai@gmail.com",
    upwork: "https://www.upwork.com/freelancers/ikram98ai",
    linkedin: "https://www.linkedin.com/in/ikram98ai/",
    github: "https://github.com/ikram98ai",
  };

export const impactMetrics = [
    {
      label: "Average ROI Delivered",
      value: "340%",
      color: "text-green-400",
      description: "Across all client projects",
    },
    {
      label: "Total Value Generated",
      value: "$8.5M+",
      color: "text-blue-400",
      description: "Measurable business impact",
    },
    {
      label: "Time-to-Value",
      value: "23",
      suffix: " days",
      color: "text-purple-400",
      description: "Average deployment time",
    },
    {
      label: "Client Retention",
      value: "92%",
      color: "text-yellow-400",
      description: "Come back for more projects",
    },
  ];

export const caseStudies = [
    {
      title: "News Organization: 78% Faster Fact-Checking",
      category: "Media & Publishing",
      challenge:
        "Major news outlet losing $2M annually due to slow fact-checking process, missing breaking news opportunities",
      solution:
        "Developed RoBERTa-based fake news detection system with 99.2% accuracy, integrated into their editorial workflow",
      impact: [
        "78% reduction in fact-checking time (6 hours → 1.3 hours)",
        "3x faster breaking news publication",
        "$1.8M annual savings in operational costs",
        "Zero false positive incidents in 6 months",
      ],
      technologies: "RoBERTa, AWS SageMaker, Real-time Pipeline",
      client: "Media Company",
      duration: "6 weeks",
      roi: "450%",
    //   amount: "$6000.00",
      img:news_arc,
    },
    {
      title: "Healthcare: Automated Wellness Monitoring Revolution",
      category: "Healthcare AI",
      challenge:
        "Healthcare facility struggling with manual wellness checks, leading to missed critical health alerts and staff burnout",
      solution:
        "Built AI agent system using LangGraph that automates wellness surveys, video recommendations, and emergency alerting",
      impact: [
        "89% reduction in manual wellness check time",
        "100% critical alert detection rate",
        "45% improvement in patient satisfaction",
        "$300K annual cost savings in staff time",
      ],
      technologies: "LangGraph, RAG, Vector DB, MongoDB, AI Agents",
      client: "Healthcare Provider",
      duration: "8 weeks",
      roi: "280%",
    //   amount: "$5000.00",
      img:health_arc,
    },
    {
      title: "Retail: Inventory Optimization Revolution",
      category: "Predictive Analytics",
      challenge:
        "Retail chain losing $5M annually due to overstock and stockouts, manual forecasting taking 3 days per product",
      solution:
        "Created self-service XGBoost pipeline on AWS that auto-generates optimized sell-through forecasts for any product",
      impact: [
        "92% forecast accuracy improvement",
        "3 days → 15 minutes per product analysis",
        "$4.2M reduction in inventory costs",
        "Self-service model deployed across 12 locations",
      ],
      technologies: "XGBoost, AWS SageMaker, AutoML Pipeline, Forecasting",
      client: "Retail Chain",
      duration: "12 weeks",
      roi: "520%",
    //   amount: "$4020.00",
      img:retail_arc
    },
  ];

export const reviews = [
    {
      project: "Fine-Tune LLaMA 3-Vision Models",
      rating: 5.0,
      comment:
        "Ikram didn't just build a model—he transformed how we think about computer vision. The business impact was immediate with 340% ROI in the first quarter.",
    //   amount: "$6000.00",
      duration: "May 3, 2025 - Jun 14, 2025",
      businessImpact: "340% ROI",
    },
    {
      project: "AWS Certified AI/ML Developer (Chatbot Specialist)",
      rating: 5.0,
      comment:
        "Most developers give you what you ask for. Ikram gives you what your business actually needs. The chatbot solution saves us $50K monthly in support costs.",
    //   amount: "$5000.00",
      duration: "Dec 18, 2024 - Jan 1, 2025",
      businessImpact: "$600K annual savings",
    },
    {
      project: "Deploy ML Pipeline and serverless inference on AWS",
      rating: 5.0,
      comment:
        "Ikram doesn't just deliver code—he delivers business transformation. The pipeline reduced our processing costs by 67% while improving accuracy.",
    //   amount: "$3000.00",
      duration: "Sep 19, 2024 - Sep 27, 2024",
      businessImpact: "67% cost reduction",
    },
    {
      project: "Python Script for Task Optimisation",
      rating: 5.0,
      comment:
        "What impressed me most was how Ikram connected technical optimization to business outcomes. The script eliminated 23 hours of manual work weekly.",
    //   amount: "$2000.00",
      duration: "Nov 24, 2024 - Dec 5, 2024",
      businessImpact: "92 hours/month saved",
    },
  ];

export const methodology = [
    {
      phase: "01",
      title: "Business Impact Analysis",
      description:
        "I don't start with code. I start by understanding your P&L and identifying the highest-impact opportunities.",
      deliverable: "ROI projection and success metrics",
      icon: TrendingUp,
    },
    {
      phase: "02",
      title: "Rapid Prototyping",
      description:
        "Build and test core hypothesis in 1-2 weeks. Fail fast, learn faster, pivot when needed.",
      deliverable: "Working MVP with real data",
      icon: Zap,
    },
    {
      phase: "03",
      title: "Scalable Implementation",
      description:
        "Production-ready system with monitoring, alerting, and automatic scaling. Built to handle 10x growth.",
      deliverable: "Enterprise-grade deployment",
      icon: Shield,
    },
    {
      phase: "04",
      title: "Continuous Optimization",
      description:
        "Monitor performance, A/B test improvements, and optimize for evolving business needs.",
      deliverable: "Self-improving system",
      icon: Target,
    },
  ];

export const differentiators = [
    {
      title: "Business-First Approach",
      description:
        "I speak CEO, not just Python. Every technical decision is tied to business outcomes and measurable ROI.",
      icon: Target,
    },
    {
      title: "Speed Without Compromise",
      description:
        "Rapid deployment using battle-tested frameworks. 23-day average time-to-value vs industry standard of 6+ months.",
      icon: Zap,
    },
    {
      title: "Self-Improving Systems",
      description:
        "Build AI that gets smarter over time, reducing your long-term costs automatically while improving performance.",
      icon: Brain,
    },
  ];

export const stats = [
    { label: "Projects Delivered", value: "15+", icon: Award },
    { label: "Client Rating", value: "5.0★", icon: Star },
    { label: "Business Value", value: "$8.5M+", icon: DollarSign },
    { label: "Client Retention", value: "92%", icon: Users },
  ];

