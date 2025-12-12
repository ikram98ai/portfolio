import type {
  Project,
  Job,
  Education,
  Certification,
  Skill,
  Service,
  Testimonial,
} from "./types";

// Import project images
import khanedu_arch from "./assets/khanedu_arch.png";
import khanedu_main from "./assets/khanedu_main.png";
import khanedu_lesson from "./assets/khanedu_lesson.png";
import khanedu_quiz from "./assets/khanedu_quiz.png";
import khanedu_subject from "./assets/khanedu_subject.png";

import docgram_profile from "./assets/docgram-profile.png";
import docgarm_chat from "./assets/docgarm-chat.png";
import docgram_feed from "./assets/docgram-feed.png";
import docgram_arch from "./assets/docgram-arch.png";

import mediscribe from "./assets/mediscribe.png";

import health_web from "./assets/health_web.png";
import health_arc from "./assets/health_arch.png";

import passport from "./assets/passport.png";

import news from "./assets/news_arch.png";

import retail_arc from "./assets/retail_arch.png";

export const personalInfo = {
  name: "Ikram Khan",
  title: "Full-Stack AI Engineer",
  tagline: "Build, Deploy & Scale AI-Powered Applications.",
  summary:
  "I specialize in building, deploying, and scaling full-stack AI applications and intelligent agents powered by LLMs and Retrieval-Augmented Generation (RAG) — all production-ready on AWS.",
  location: "Remote / Global",
  stats:{
    rate: 30,
    projects: 16,
    success_rate: 100,
    rating: 5.0,

  },
  contact: {
    email: "ikram98ai@gmail.com",
    upwork: "https://www.upwork.com/freelancers/ikram98ai",
    linkedin: "https://www.linkedin.com/in/ikram98ai/",
    github: "https://github.com/ikram98ai",
  },
};

export const services: Service[] = [
  {
    title: "AI Agents & Chatbots",
    desc: "Autonomous agents using LangChain/LangGraph. Chatbots that truly understand intent and context.",
  },
  {
    title: "RAG Systems",
    desc: "Retrieval-Augmented Generation for complex document analysis and secure enterprise knowledge bases.",
  },
  {
    title: "LLM Fine-Tuning",
    desc: "Customizing LLaMA 3 & Vision models. Optimization with Unsloth for specific domain accuracy.",
  },
  {
    title: "Full-Stack AI Apps",
    desc: "Seamless integration of powerful AI backends (FastAPI) with modern, responsive frontends (React/Next.js).",
  },
  {
    title: "DevOps & Deployment",
    desc: "Scalable infrastructure on AWS SageMaker, Bedrock, and Hugging Face Endpoints. Dockerized & Orchestrated.",
  },
  {
    title: "Model Optimization",
    desc: "High-throughput serving using vLLM. Reducing latency and cost without sacrificing quality.",
  },
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Javascipt", "Typescript", "Mojo"],
  },
  {
    category: "Web Development",
    skills: ["FastAPI", "Django", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Generative AI",
    skills: [
      "LangChain",
      "LangGraph",
      "Google AI SDK",
      "OpenAI Agents",
      "RAG Systems",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS SageMaker",
      "AWS Bedrock",
      "vLLM",
      "Hugging Face",
      "Docker",
      "Terraform",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "khan-edu",
    title: "Khan Education",
    role: "Founding Engineer",
    description:
      "A feature-rich, open-source e-learning platform built with a modern tech stack. Designed for interactive learning with powerful admin tools.",
    category: "Full Stack",
    techStack: [
      "React",
      "Terraform",
      "Amazon S3",
      "TypeScript",
      "AWS CloudFront",
    ],
    imageUrls: [ khanedu_main, khanedu_arch, khanedu_lesson, khanedu_quiz, khanedu_subject],
    link: "https://github.com/ikram98ai/khaneducation-web",
    featured: true,
    details: {
      challenge:
        "Building a scalable, low-latency educational platform that handles dynamic content delivery and complex user administration globally.",
      solution:
        "Implemented a serverless architecture using AWS CloudFront for edge caching and S3 for static assets, managed via Terraform for reproducible infrastructure.",
      outcome:
        "Achieved sub-100ms load times for global users and reduced infrastructure costs by 40% compared to traditional EC2 hosting.",
    },
  },
  {
    id: "docgram",
    title: "Docgram",
    role: "Founding Engineer",
    description:
      "AI-powered social platform where users share PDFs in an Instagram-like feed. Documents come alive with integrated AI chat powered by Gemini and Pinecone.",
    category: "AI/RAG",
    techStack: ["FastAPI", "Serverless", "OpenAI API", "RAG", "React"],
    imageUrls: [docgram_feed, docgram_arch, docgram_profile, docgarm_chat],
    link: "https://github.com/ikram98ai/docgram-web",
    featured: true,
    details: {
      challenge:
        "Enabling meaningful social interaction around static PDF documents while providing instant, context-aware answers to user queries.",
      solution:
        "Developed a RAG pipeline using Pinecone for vector storage and Gemini for generation, integrated into a familiar social feed UI.",
      outcome:
        "Created a unique 'Chat with PDF' social experience, processing thousands of document pages with high retrieval accuracy.",
    },
  },
  {
    id: "mediscribe",
    title: "Mediscribe",
    role: "AI Engineer",
    description:
      "Proof of Concept for healthcare integrating AI and audio processing. Transcribes and summarizes patient consultations using Gemini.",
    category: "AI/RAG",
    techStack: ["FastAPI", "React", "Gemini", "AWS S3", "PynamoDB"],
    imageUrls: [mediscribe],
    link: "https://github.com/ikram98ai/mediscribe",
    featured: false,
    details: {
      challenge:
        "Accurately transcribing and summarizing complex medical terminology in real-time while ensuring data security.",
      solution:
        "Leveraged Gemini's multimodal capabilities for high-fidelity transcription and PynamoDB for secure metadata handling on AWS.",
      outcome:
        "Delivered a POC demonstrating 95% accuracy in medical term recognition and automated summarization for EMR entry.",
    },
  },
  {
    id: "health-agent",
    title: "Health AI Agent System",
    role: "Lead AI Developer",
    description:
      "AI-driven agent system utilizing LangGraph to automate wellness checks, video recommendations, and document queries.",
    category: "AI Agents",
    techStack: ["TypeScript", "LangChain", "LangGraph", "RAG", "MongoDB"],
    imageUrls: [health_web, health_arc],
    link: "https://github.com/ikram98ai/health_agent",
    featured: true,
    details: {
      challenge:
        "Orchestrating multiple specialized AI agents (Wellness, Video, Classes) to provide a cohesive user experience without hallucinations.",
      solution:
        "Built a stateful multi-agent system using LangGraph to route requests intelligently between vector DBs and external APIs.",
      outcome:
        "Streamlined patient engagement workflows, reducing manual wellness check calls by automating initial triage.",
    },
  },
  {
    id: "passport",
    title: "Secure Passport Extractor",
    role: "Lead Developer",
    description:
      "Fast, secure web app that extracts and verifies passport data via MRZ parsing and face-matching against selfies.",
    category: "Computer Vision",
    techStack: ["FastAPI", "DevOps", "Python", "AWS", "Computer Vision"],
    imageUrls: [passport],
    link: "https://github.com/ikram98ai/passport_verification",
    featured: false,
    details: {
      challenge:
        "Automating identity verification with high reliability to prevent fraud in a high-stakes environment.",
      solution:
        "Integrated MRZ parsing libraries with custom face-matching algorithms and deployed on a secure AWS environment.",
      outcome:
        "Reduced identity verification time from minutes to seconds with a high confidence score for fraud detection.",
    },
  },
  {
    id: "retail-inventory-optimization",
    role: "Data Scientist",
    title: "Retail Inventory Optimization",
    category: "Predictive Analytics",
    description:
      "Developed an automated forecasting pipeline using XGBoost on AWS to optimize inventory management for a retail chain, significantly reducing costs and improving forecast accuracy.",
    details: {
      challenge:
        "Retail chain losing $5M annually due to overstock and stockouts, manual forecasting taking 3 days per product",
      solution:
        "Created self-service XGBoost pipeline on AWS that auto-generates optimized sell-through forecasts for any product",
      outcome:
        "92% forecast accuracy improvement, reduced inventory costs by 15%, cut forecasting time from 6 hours to under 15 minutes",
    },
    techStack: ["XGBoost", "AWS SageMaker", "AutoML Pipeline", "Forecasting"],
    imageUrls: [retail_arc],
    link: "https://github.com/ikram98ai/fakenews_detection_bert_aws_pipeline",
    featured: false,
  },
  {
    id: "fake-news",
    title: "RoBERTa Fake-news Pipeline",
    role: "ML Engineer",
    description:
      "Advanced AWS SageMaker pipeline for fake news detection consisting of preprocessing, training, evaluation, and deployment.",
    category: "ML Ops",
    techStack: ["Python", "AWS SageMaker", "PyTorch", "MLOps"],
    imageUrls: [news],
    link: "https://github.com/ikram98ai/fakenews_detection_bert_aws_pipeline",
    featured: false,
    details: {
      challenge:
        "Creating a reproducible, end-to-end ML pipeline that automatically retrains and deploys models as new data arrives.",
      solution:
        "Architected a SageMaker pipeline covering preprocessing to deployment, using RoBERTa for state-of-the-art NLP performance.",
      outcome:
        "Established a robust MLOps workflow, ensuring the fake news detection model remains current with evolving misinformation trends.",
    },
  },
];

export const experience: Job[] = [
  {
    id: "upwork",
    role: "AI Engineer",
    company: "Upwork",
    period: "Apr 2024 - Present",
    description:
      "Completed 16+ jobs with a focus on RAG, Fine-tuning LLaMA models, and building chatbots. Consistently rated 5.0/5.0.",
  },
  {
    id: "fiverr",
    role: "Data Analyst",
    company: "Fiverr",
    period: "Jan 2022 - Mar 2024",
    description:
      "Used Python to clean/analyze large datasets and built predictive models for customer satisfaction.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Working with Ikram was 10/10 great once again. Looking forward to continuing to work together!",
    author: "John Meyer @ Freshprint",
    role: "RAG Compliance System",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Ikram was absolutely incredible to work with. Not only is he a FANTASTIC developer who really knows what he is doing... he went above and beyond.",
    author: "John Meyer @ Freshprint",
    role: "LLaMA 3-Vision Fine-Tuning",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "I worked with Ikram Khan on developing a chatbot, and the results exceeded expectations. His expertise as an AI Engineer was evident... skillfully designed, implemented the chatbot to deliver accurate interactions.",
    author: "Alona Belykh @ Eirvox",
    role: "Chatbot Development",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "Great job creating the python script I required. Great speed, communication and knowledge.",
    author: "Michael Ratcliffe @ Upwork",
    role: "Python Automation",
    rating: 5,
  },
  {
    id: "t5",
    quote:
      "Ikram is really on time and does great work to both explain the methodology he is using and deliver timely.",
    author: "Simon Edstrom @ Serculate AB",
    role: "ML Pipeline Deployment",
    rating: 5,
  },
];

export const education: Education[] = [
  {
    institution: "Balochistan University of IT and Management Sciences",
    degree: "Bachelor of Science in Software Engineering",
    year: "2019 - 2022",
  },
];

export const certifications: Certification[] = [
  {
    name: "Retrieval Augmented Generation (RAG)",
    provider: "DeepLearning.ai",
    issued: "Aug 2025",
    link: "https://coursera.org/verify/YQRX3DBETZ73",
  },
  {
    name: "Data Engineering Specialization",
    provider: "DeepLearning.ai",
    issued: "Apr 2025",
    link: "https://coursera.org/verify/professional-cert/8K0W2LFDARKW",
  },
  {
    name: "Meta Full-Stack Engineer",
    provider: "Meta",
    issued: "May 2024",
    link: "https://www.credly.com/go/j4CUW2zY",
  },
  {
    name: "Machine Learning Specialization",
    provider: "Deeplearning.ai",
    issued: "Sep 2023",
    link: "https://coursera.org/verify/specialization/DJ3DNR43P5ZG",
  },
];
