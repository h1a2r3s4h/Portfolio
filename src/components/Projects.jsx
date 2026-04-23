// components/Projects.js
import React from "react";
import {
  EyeIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  SparklesIcon,
  ArrowTopRightOnSquareIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import SkillForge from "./Projects/project1.png";
import Blog from "./Projects/project2.png";
import LMS from "./Projects/project3.png";
import Voice from "./Projects/project4.png";
import Chat from "./Projects/project5.png";
import CLI from "./Projects/project6.gif";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SkillForge",
      description:
        "SkillForge is a next-generation AI-powered career preparation platform designed for students and professionals.",
      image: SkillForge,
      tags: [
        "ReactJs",
        "NextJs",
        "Javascript",
        "AI Integration",
        "Tailwind CSS",
      ],
      liveUrl: "https://skill-forge-eight.vercel.app",
      codeUrl: "https://github.com/h1a2r3s4h/SkillForge",
      featured: true,
      accentColor: "#e6c235",
    },
    {
      id: 2,
      title: "VOX HIRE – AI Recruiter Voice Agent",
      description:
        "🎓 VOX HIRE is an AI-powered recruiter voice agent that can automatically create and conduct job interviews using voice technology.",
      image: Voice,
      tags: ["Next.js", "React", "Supabase", "Vapi AI", "Tailwind CSS"],
      liveUrl: "https://vox-hire-voice-agent.vercel.app",
      codeUrl: "https://github.com/h1a2r3s4h/VoxHire---Voice-agent",
      featured: true,
      accentColor: "#0a295e",
    },
    {
      id: 3,
      title: "GitPal — AI Developer Teammate CLI",
      description:
        "🤖 An open source AI-powered CLI tool with 16 commands that automates your entire Git workflow — from writing commit messages to deploying code. Supports 4 AI providers (Groq, OpenAI, Gemini, Anthropic). Published on npm.",
      image: CLI,
      tags: ["Node.js", "CLI", "AI", "LLM", "npm", "Open Source"],
      liveUrl: "https://www.npmjs.com/package/gitpal-cli",
      codeUrl: "https://github.com/h1a2r3s4h/gitpal",
      featured: true,
      accentColor: "#0a295e",
    },

    {
      id: 4,
      title: "DevPilot AI",
      description:
        "🎓 It's a fully autonomous developer assistant powered by a pipeline of specialized agents — each with its own role, tools, and memory — working together to understand, write, execute, and review code across your entire codebase.",
      image: Chat,
      tags: [
        "Python",
        "FastAPI backend",
        "Gemini LLM",
        "sentence-transformers embeddings",
        "FAISS vector DB",
        "CrewAI agents",
        "SSE streaming",
        "React/Streamlit UI",
      ],
      liveUrl: "https://github.com/h1a2r3s4h/DevPilot-Ai",
      codeUrl: "https://github.com/h1a2r3s4h/DevPilot-Ai",
      featured: true,
      accentColor: "#0a295e",
    },
    {
      id: 5,
      title: "AI-Powered Full Stack Blog Website",
      description:
        "A modern, full stack blog platform powered by AI for content assistance. This project allows users to create, edit, and read blog posts with rich text editing, authentication, and AI-based features to improve writing quality.",
      image: Blog,
      tags: ["Reactjs", "Node.js", "Express", "MongoDB", "GeminiAPI"],
      liveUrl: "https://quick-blog-livid.vercel.app",
      codeUrl: "https://github.com/h1a2r3s4h/Quick_blog",
      featured: true,
      accentColor: "#bd2323",
    },
    {
      id: 6,
      title: "AI-Powered LMS (Next-Gen Learning Platform)",
      description:
        "🎓 A Full-Stack AI-Powered Learning Management System built with the MERN Stack.This project includes AI Smart Search, Google Authentication, Razorpay Payments, and dedicated Student & Instructor Dashboards.",
      image: LMS,
      tags: ["ReactJs"],
      liveUrl: "https://lms-1-rscv.onrender.com",
      codeUrl: "https://github.com/h1a2r3s4h/LMS?tab=readme-ov-file",
      featured: true,
      accentColor: "#0a295e",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Diagonal Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, #0a295e 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-gradient-to-br from-[#bd2323]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-br from-[#0a295e]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {["</>", "{}", "()", "[]", "=>"].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-white/5 font-mono text-6xl md:text-8xl font-bold animate-float"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + i * 3}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#bd2323]/20 to-[#0a295e]/20 backdrop-blur-sm border border-[#e6c235]/20 mb-6">
            <SparklesIcon className="h-4 w-4 text-[#e6c235]" />
            <span className="text-sm font-semibold text-white tracking-wider">
              PORTFOLIO SHOWCASE
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#e6c235] to-[#bd2323]">
              PROJECTS
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] mx-auto rounded-full mb-8"></div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building digital experiences that solve real problems and push
            technological boundaries. Each project represents a unique challenge
            and creative solution.
          </p>
        </div>

        {/* Projects Grid - Modern Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={project.id} className="relative group">
              {/* Glow Effect */}
              <div
                className="absolute -inset-4 rounded-3xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-70 -z-10"
                style={{ backgroundColor: project.accentColor }}
              ></div>

              <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 group-hover:border-gray-700 transition-all duration-300 h-full">
                {/* Project Image with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(to bottom, transparent 30%, ${project.accentColor}20 70%)`,
                    }}
                  ></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#e6c235] to-[#bd2323] text-black text-xs font-bold rounded-full flex items-center gap-1 z-20">
                      <SparklesIcon className="h-3 w-3" />
                      FEATURED
                    </div>
                  )}

                  {/* Live Preview Overlay */}
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-r from-[#bd2323] to-[#0a295e] text-white rounded-full hover:scale-110 transition-all duration-300 group/link"
                    >
                      <EyeIcon className="h-6 w-6" />
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs bg-black px-2 py-1 rounded opacity-0 group-hover/link:opacity-100 transition-opacity">
                        Live Demo
                      </span>
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-r from-[#0a295e] to-[#bd2323] text-white rounded-full hover:scale-110 transition-all duration-300 group/link"
                    >
                      <CodeBracketIcon className="h-6 w-6" />
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs bg-black px-2 py-1 rounded opacity-0 group-hover/link:opacity-100 transition-opacity">
                        View Code
                      </span>
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#e6c235] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-2">
                        {project.subtitle}
                      </p>
                    </div>
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-500 group-hover:text-[#e6c235] transition-colors duration-300" />
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full border border-gray-800 text-gray-400 hover:border-[#e6c235] hover:text-[#e6c235] transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: project.accentColor }}
                      ></div>
                      <span className="text-xs text-gray-500">
                        Active Project
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        className="text-xs px-3 py-1 bg-gradient-to-r from-[#bd2323] to-[#0a295e] text-white rounded-lg hover:shadow-lg transition-all duration-300"
                      >
                        Visit Site
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Number */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-black border-2 border-[#e6c235] rounded-full flex items-center justify-center z-20">
                <span className="text-xl font-bold text-[#e6c235]">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
