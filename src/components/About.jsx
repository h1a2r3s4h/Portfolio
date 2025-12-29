// components/About.js
import React from "react";
import {
  CodeBracketIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  // Tech Stack Data
  const techStack = [
    { name: "C++" },
    { name: "DSA" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "Tailwind CSS" },
    { name: "JavaScript" },
    { name: "ReactJs" },
    { name: "TypeScript" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "MongoDB" },
    { name: "PostgreSQL" },
    { name: "Next.js" },
    { name: "Redux" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "Docker" },
    { name: "Python" },
    
  ];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, #0a295e 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#bd2323]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#0a295e]/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Floating Symbols */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {["{ }", "</>", "=>", "()", "[]", "==="].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-white/5 font-mono text-6xl md:text-8xl font-bold animate-float"
            style={{
              left: `${5 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${20 + i * 5}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#bd2323]/20 to-[#0a295e]/20 border border-[#e6c235]/20 mb-6">
            <SparklesIcon className="h-4 w-4 text-[#e6c235]" />
            <span className="text-sm font-semibold text-white tracking-wider">
              TECHNICAL EXPERTISE
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#e6c235] to-[#bd2323]">
              ABOUT • SKILLS
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-Stack Developer focused on building scalable, modern web
            applications with clean design and strong architecture.
          </p>
        </div>

        {/* Centered Developer Section */}
        <div className="flex justify-center">
          <div className="lg:w-2/3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] rounded-2xl blur opacity-30 group-hover:opacity-70 transition-all -z-10" />

              <div className="relative bg-black/80 rounded-2xl p-8 border border-gray-800">
                {/* Title */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#bd2323] to-[#0a295e] rounded-xl flex items-center justify-center">
                    <CodeBracketIcon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">THE DEVELOPER</h3>
                    <p className="text-gray-400">
                      Full Stack Developer & CS Student
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-6 mb-10">
                  <p className="text-gray-300 text-lg">
                    Third-year Computer Science student passionate about creating
                    impactful digital experiences using modern web technologies.
                  </p>
                  <p className="text-gray-300">
                    Focused on full-stack development, cloud architecture, and
                    scalable systems with clean, maintainable code.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <span className="text-xs px-3 py-1 bg-[#bd2323]/30 text-white rounded-full border border-[#bd2323]">
                    TECH STACK
                  </span>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {techStack.map((item) => (
                      <span
                        key={item.name}
                        className="px-3 py-1 text-xs rounded-full bg-gray-900/60 text-gray-400"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "100%", label: "Dedication", color: "#e6c235" },
                    { value: "∞", label: "Passion", color: "#ffffff" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-black/50 rounded-xl p-4 border border-gray-800"
                    >
                      <div
                        className="text-2xl font-bold"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 uppercase">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 25s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
