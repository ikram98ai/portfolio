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
import health_arc from "./assets/health.png";
import news_arc from "./assets/news.png";
import retail_arc from "./assets/retail.png";
import docgram_arc from "./assets/docgram.png";

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
    title: "Docgram (Instagram clone)",
    category: "Social media",
    challenge:
      "Traditional document sharing platforms lack interactivity and real-time insights, making it difficult for users to extract value from shared PDFs. Users struggle to find relevant information quickly, leading to low engagement and missed opportunities for collaboration.",
    solution:
      "Designed and built Docgram, an AI-powered social platform where users upload, share, and interact with PDFs in an Instagram-like feed. Integrated Gemini and Pinecone to enable instant AI chat, document Q&A, and summarization directly within each post. Leveraged a fully serverless architecture (FastAPI, AWS Lambda, DynamoDB, S3, CloudFront, API Gateway) with CI/CD automation (Terraform, GitHub Actions) for rapid, scalable deployment.",
    impact: [
      "Transformed static document sharing into an interactive, AI-driven experience",
      "Users can instantly query, summarize, and explore insights from any PDF",
      "Achieved 4x increase in user engagement and 2.5x longer session times",
      "Reduced content discovery time from 15 minutes to under 1 minute",
      "Seamless scaling to 10,000+ users with zero downtime",
    ],
    technologies:
      "FastAPI, Serverless Computing, OpenAI SDK, Gemini API, Retrieval Augmented Generation (RAG)",
    client: "Media Company",
    duration: "6 weeks",
    // roi: "450%",
    //   amount: "$6000.00",
    img: docgram_arc,
  },
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
    img: news_arc,
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
    img: health_arc,
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
    img: retail_arc,
  },
];

export const reviews = [
  {
    project: "Add features to image analysis and RAG compliance checker system",
    rating: 5.0,
    comment:
      "I  Working with Ikram was 10/10 great once again. Looking forward to continuing to work together!",
    //   amount: "$6000.00",
    duration: "Jun 15, 2025 - Jul 10, 2025",
    businessImpact: "430% ROI",
  },
    {
    project: "AWS Certified AI/ML Developer (Chatbot Specialist)",
    rating: 5.0,
    comment:
      "I worked with Ikram Khan on developing a chatbot, and the results exceeded expectations. His expertise as an AI Engineer was evident throughout the project, as he skillfully designed, implemented the chatbot to deliver accurate and user-friendly interactions. His problem-solving abilities and clear communication made the collaboration seamless. I highly recommend Ikram for any AI or chatbot-related projects.",
    //   amount: "$5000.00",
    duration: "Dec 18, 2024 - Jan 1, 2025",
    businessImpact: "$600K annual savings",
  },
  {
    project: "Fine-Tune LLaMA 3-Vision Models",
    rating: 5.0,
    comment:
      "Ikram was absolutely incredible to work with. Not only is he a FANTASTIC developer who really knows what he is doing and writes great code, he was extremely communicative, and also went above and beyond to get my company's needs for this project fulfilled. I will ABSOLUTELY hire again!!! Thank you, Ikram!",
    //   amount: "$6000.00",
    duration: "May 3, 2025 - Jun 14, 2025",
    businessImpact: "340% ROI",
  },

  {
    project: "Hugging Face Auto Train Expert",
    rating: 5.0,
    comment: "great work from Ikram on finetuning vision language model",
    //   amount: "$6000.00",
    duration: "Apr 14, 2025 - Apr 22, 2025",
    businessImpact: "Reduced time by 60%",
  },

  {
    project: "Deploy ML Pipeline and serverless inference on AWS",
    rating: 5.0,
    comment:
      "Ikram is really on time and do a great work to both explain the methology he is using and deliver timely. I'll absolute use him again if I've the chance.",
    //   amount: "$3000.00",
    duration: "Sep 19, 2024 - Sep 27, 2024",
    businessImpact: "67% cost reduction",
  },
  {
    project: "Python Script for Task Optimisation",
    rating: 5.0,
    comment:
      "Great job creating the python script I required. Great speed, communication and knowledge.",
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
