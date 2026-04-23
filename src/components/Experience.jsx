// components/Experience.js
import React from "react";
import {
  BriefcaseIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  CalendarIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";

const Experience = () => {
  const experiences = [
    {
  id: 1,
  type: "Full-time",
  role: "MERN Stack Developer",
  company: "Digital Monger",
  period: "Apr 2026 - Present",
  duration: "Ongoing",
  location: "On-site",
 description:
  "Developed a scalable e-commerce frontend using Next.js by converting Figma designs into a fully responsive and interactive user interface. Focused on building reusable components, clean architecture, and seamless user experience.",

technologies: [
  "Next.js",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Context API"
],

highlights: [
  "Figma to Next.js Implementation",
  "Dynamic Routing",
  "Cart & Wishlist Functionality",
  "Reusable Component Architecture",
  "Responsive Design"
],
  icon: <CodeBracketIcon className="h-6 w-6" />
},
    {
  id: 2,
  type: "Internship",
  role: "Software Development Engineer Intern",
  company: "InvisiaX",
  period: "Jan 2026 - March 2026",
  duration: "3 months",
  location: "Remote",
  description:
    "Developed Campus Pulse MVP, a secure college ID verification system, reducing manual verification time by 60%. Built an end-to-end verification pipeline (ID upload → OCR/QR extraction → validation → status update) achieving 95%+ data extraction accuracy.",
  technologies: [
    "React Native",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "ML Kit"
  ],
  highlights: [
    "60% Faster Verification",
    "95%+ OCR Accuracy",
    "10+ ID Formats Supported",
    "35% Reduction in False Rejections"
  ],
  icon: <CodeBracketIcon className="h-6 w-6" />
},
    // {
    //   id: 3,
    //   type: "Open Source",
    //   role: "Open Source Contributor",
    //   company: "Social Winter of Code (SWOC)",
    //   period: "Nov 2025 - Present",
    //   duration: "Ongoing",
    //   location: "Remote",
    //   description:
    //     "Contributing to various open-source initiatives, implementing new features, improving code quality, and participating in community discussions to enhance project functionality and user experience.",
    //   technologies: ["Open Source", "JavaScript", "React", "Python", "APIs"],
    //   highlights: ["Community Driven", "Feature Development", "Code Quality"],
    //   icon: <CodeBracketIcon className="h-6 w-6" />
    // }
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

        {/* Main Experiences */}
        <div className="max-w-4xl mx-auto">
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
      </div>

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

export default Experience;