// components/Experience.js
import React from "react";
import {
  BriefcaseIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  CalendarIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: "Internship",
      role: "Front-End Engineer Intern",
      company: "Stealth Startup",
      period: "Aug 2025 - Sep 2025",
      duration: "2 months",
      location: "Remote",
      description:
        "Worked on real-world projects at a stealth startup (NDA protected), implementing modern UI/UX designs with React + Tailwind CSS, optimizing performance, and developing scalable frontend architecture.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "UI/UX", "Git"],
      highlights: ["NDA Project", "Real-world Implementation", "Performance Optimization"],
      icon: <RocketLaunchIcon className="h-6 w-6" />
    },
    {
      id: 2,
      type: "Open Source",
      role: "Open Source Contributor",
      company: "Code Social",
      period: "Dec 2025 - Present",
      duration: "Ongoing",
      location: "Remote",
      description:
        "Active contributor to multiple open-source JavaScript and React projects on GitHub, focusing on feature enhancements, bug fixes, and documentation improvements while collaborating with global developers.",
      technologies: ["JavaScript", "React", "GitHub", "Documentation", "Collaboration"],
      highlights: ["Global Collaboration", "Multiple Projects", "Code Review"],
      icon: <GlobeAltIcon className="h-6 w-6" />
    },
    {
      id: 3,
      type: "Open Source",
      role: "Open Source Contributor",
      company: "Social Winter of Code (SWOC)",
      period: "Nov 2025 - Present",
      duration: "Ongoing",
      location: "Remote",
      description:
        "Contributing to various open-source initiatives, implementing new features, improving code quality, and participating in community discussions to enhance project functionality and user experience.",
      technologies: ["Open Source", "JavaScript", "React", "Python", "APIs"],
      highlights: ["Community Driven", "Feature Development", "Code Quality"],
      icon: <CodeBracketIcon className="h-6 w-6" />
    }
  ];

  const internships = [
    {
      company: "CodSoft",
      role: "Web Development Intern",
      duration: "2 weeks",
      tech: ["React", "JavaScript", "Frontend", "Rest APIs", "GitHub"]
    },
    {
      company: "CodeAlpha",
      role: "Full Stack Development Intern",
      duration: "15 days",
      tech: ["MERN Stack", "APIs", "Git"]
    },
    {
      company: "CodeClause",
      role: "Web Development Intern",
      duration: "1 month",
      tech: ["Next.js", "Tailwind CSS", "Responsive Design"]
    },
    {
      company: "Oasis Infobyte",
      role: "Web Development & Designing Intern",
      duration: "15 days",
      tech: ["React", "Figma", "UI/UX", "Frontend", "Rest APIs"]
    },
    {
      company: "Cognifyz",
      role: "Full Stack Development Intern",
      duration: "3 weeks",
      tech: ["MERN Stack", "APIs", "Database"]
    },
    {
      company: "CodVeda Technologies",
      role: "Full Stack Development Intern",
      duration: "1 month",
      tech: ["Angular", "Node.js", "Express", "MongoDB", "REST APIs", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #bd2323 1px, transparent 1px)`,
            backgroundSize: '70px 70px'
          }}></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-gradient-to-br from-[#bd2323]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-br from-[#0a295e]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {["💼", "🚀", "🌐", "⚡", "🔧", "🎯"].map((icon, i) => (
          <div
            key={i}
            className="absolute text-white/10 text-5xl md:text-7xl animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i * 12)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${20 + i * 4}s`
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#bd2323]/20 to-[#0a295e]/20 backdrop-blur-sm border border-[#e6c235]/20 mb-6">
            <BriefcaseIcon className="h-4 w-4 text-[#e6c235]" />
            <span className="text-sm font-semibold text-white tracking-wider">PROFESSIONAL JOURNEY</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#e6c235] to-[#bd2323]">
              EXPERIENCE
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] mx-auto rounded-full mb-8"></div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hands-on experience through internships, open-source contributions,
            and real-world projects that have shaped my technical expertise.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Main Experiences */}
          <div className="lg:w-2/3">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative group">
                  {/* Connection Line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-8 top-24 bottom-0 w-1 bg-gradient-to-b from-[#bd2323] via-[#e6c235] to-[#0a295e] opacity-30 -z-10"></div>
                  )}

                  {/* Timeline Dot */}
                  <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-[#bd2323] to-[#0a295e] border-4 border-black z-10"></div>

                  {/* Experience Card */}
                  <div className="ml-12">
                    <div className="relative">
                      {/* Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-300 -z-10"></div>

                      <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-gray-700 transition-all duration-300">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#bd2323] to-[#0a295e] flex items-center justify-center">
                              <div className="text-white">
                                {exp.icon}
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#0a295e]/30 text-[#e6c235] border border-[#0a295e]">
                                  {exp.type}
                                </span>
                                <span className="text-sm text-gray-400">{exp.duration}</span>
                              </div>
                              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                              <p className="text-lg text-[#e6c235]">{exp.company}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-gray-400">
                            <CalendarIcon className="h-4 w-4" />
                            <span className="text-sm">{exp.period}</span>
                            <MapPinIcon className="h-4 w-4 ml-2" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">Highlights</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.highlights.map((highlight, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 text-sm bg-gradient-to-r from-[#0a295e]/20 to-[#bd2323]/20 text-gray-300 rounded-full border border-gray-800 hover:border-[#e6c235]/50 transition-all duration-300"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 text-sm bg-black/50 text-gray-400 rounded-lg border border-gray-800 hover:text-[#e6c235] hover:border-[#e6c235]/30 transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Internships Summary */}
          <div className="lg:w-1/3">
            {/* Internship Programs */}
            <div className="sticky top-24">
              <div className="relative group mb-8">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#e6c235] to-[#bd2323] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-300 -z-10"></div>

                <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e6c235] to-[#bd2323] flex items-center justify-center">
                      <BuildingOfficeIcon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">INTERNSHIP PROGRAMS</h3>
                      <p className="text-sm text-gray-400">Completed successfully</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {internships.map((intern, idx) => (
                      <div
                        key={idx}
                        className="group/intern relative p-4 rounded-xl border border-gray-800 hover:border-gray-700 bg-black/50 hover:bg-black/80 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-bold text-white">{intern.company}</h4>
                            <p className="text-sm text-gray-400">{intern.role}</p>
                          </div>
                          <span className="text-xs px-2 py-1 bg-[#0a295e]/30 text-[#e6c235] rounded-full">
                            {intern.duration}
                          </span>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-1">
                          {intern.tech.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="text-xs px-2 py-1 bg-black/30 text-gray-500 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e6c235]/5 to-transparent opacity-0 group-hover/intern:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Total Experience</span>
                      <span className="text-lg font-bold text-[#e6c235]">6+ months</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-400">Companies</span>
                      <span className="text-lg font-bold text-[#bd2323]">6+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Gained */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5 text-[#e6c235]" />
                  KEY SKILLS GAINED
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">Web Development</span>
                      <span className="text-sm font-bold text-[#bd2323]">95%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#bd2323] to-[#0a295e] rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">Frontend Technologies</span>
                      <span className="text-sm font-bold text-[#e6c235]">90%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#e6c235] to-[#bd2323] rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">Team Collaboration</span>
                      <span className="text-sm font-bold text-white">85%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#0a295e] to-[#e6c235] rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="mt-6 p-4 bg-gradient-to-r from-[#0a295e]/20 to-[#bd2323]/20 rounded-xl border border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e6c235] to-[#bd2323] flex items-center justify-center">
                      <TrophyIcon className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">All Internships Completed Successfully</p>
                      <p className="text-xs text-gray-400">100% completion rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Overview */}
        <div className="mt-16 relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] rounded-2xl blur opacity-20 -z-10"></div>

          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              EXPERIENCE TIMELINE OVERVIEW
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#bd2323] mb-1">2023</div>
                <div className="text-sm text-gray-400">Started BCA</div>
              </div>

              <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-[#bd2323] to-[#e6c235]"></div>

              <div className="text-center">
                <div className="text-3xl font-bold text-[#e6c235] mb-1">2024</div>
                <div className="text-sm text-gray-400">Multiple Internships</div>
              </div>

              <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-[#e6c235] to-[#0a295e]"></div>

              <div className="text-center">
                <div className="text-3xl font-bold text-[#0a295e] mb-1">2025</div>
                <div className="text-sm text-gray-400">Professional Experience</div>
              </div>

              <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-[#0a295e] to-[#ffffff]"></div>

              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">Future</div>
                <div className="text-sm text-gray-400">Software Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trophy Icon Component */}
      <style jsx>{`
        .TrophyIcon {
          width: 1.25rem;
          height: 1.25rem;
        }
      `}</style>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// Helper component for TrophyIcon
const TrophyIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

export default Experience;