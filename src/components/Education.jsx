// components/Education.js
import React from "react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  TrophyIcon,
  CalendarIcon,
  MapPinIcon,
  ChevronDoubleRightIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

const Education = () => {
  const education = [
    {
      institute: "Mahatma Jyotiba Phule Rohilkhand University",
      type: "Computer Science Education",
      actual_location: "Bareilly, Uttar Pradesh, India",
      location: "On-Campus",
      duration: "2025 - Present",
      grade: "Current CGPA: 7/10",
      roles: [
        {
          role: "Bachelor of Technology in Computer Science",
          period: " · Ongoing",
          description:
            "Comprehensive curriculum covering software engineering principles, data structures, algorithms, web technologies, and database management. Actively participating in coding competitions and tech events.",
          achievements: ["", "", "", ""],
          skills: [
            "Software Development",
            "Algorithms & DSA",
            "Web Technologies",
            "Database Systems",
            "Object-Oriented Programming",
            "System Design",
            "Team Collaboration",
          ],
        },
      ],
    },
  ];

  return (
    <section id="education" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #e6c235 1px, transparent 1px),
                                linear-gradient(to bottom, #e6c235 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-gradient-to-br from-[#bd2323]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-gradient-to-br from-[#0a295e]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {["🎓", "📚", "💻", "🧠", "🚀"].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-white/10 text-6xl md:text-8xl animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + i * 15}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${25 + i * 5}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#bd2323]/20 to-[#0a295e]/20 border border-[#e6c235]/20 mb-6">
            <AcademicCapIcon className="h-4 w-4 text-[#e6c235]" />
            <span className="text-sm font-semibold text-white tracking-wider">
              ACADEMIC JOURNEY
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#e6c235] to-[#0a295e]">
              EDUCATION
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building a strong foundation in computer science through formal
            education and continuous hands-on learning.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Main Education Card */}
          <div className="lg:w-2/3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] rounded-3xl blur-xl opacity-30 group-hover:opacity-70 transition-all -z-10"></div>

              <div className="relative bg-black/80 rounded-3xl border border-gray-800 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#0a295e] to-[#bd2323]/80 p-8">
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                        <AcademicCapIcon className="h-10 w-10 text-black" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          {education[0].institute}
                        </h3>
                        <p className="text-[#e6c235] text-lg">
                          {education[0].type}
                        </p>
                        <div className="flex gap-4 mt-2 text-sm text-gray-300">
                          <span className="flex items-center gap-2">
                            <MapPinIcon className="h-4 w-4" />
                            {education[0].actual_location}
                          </span>
                          <span className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4" />
                            {education[0].duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* CGPA Badge (kept) */}
                    <div className="px-6 py-3 bg-gradient-to-r from-[#e6c235] to-[#bd2323] rounded-xl">
                      <div className="text-2xl font-black text-black">
                        {education[0].grade.split(": ")[1]}
                      </div>
                      <div className="text-xs font-semibold text-black">
                        CURRENT CGPA
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 space-y-10">
                  {education[0].roles.map((role, i) => (
                    <div key={i} className="space-y-6">
                      <div className="flex justify-between border-b border-gray-800 pb-6">
                        <h4 className="text-2xl font-bold text-white flex gap-2">
                          <ChevronDoubleRightIcon className="h-6 w-6 text-[#e6c235]" />
                          {role.role}
                        </h4>
                        <span className="text-sm text-[#e6c235] border border-[#0a295e] px-4 py-1 rounded-full">
                          IN PROGRESS
                        </span>
                      </div>

                      <p className="text-gray-300 text-lg">
                        {role.description}
                      </p>

                      {/* Skills */}
                      <div>
                        <h5 className="text-xl font-bold text-white flex gap-2 mb-4">
                          <BookOpenIcon className="h-5 w-5 text-[#e6c235]" />
                          Core Skills Developed
                        </h5>
                        <div className="flex flex-wrap gap-3">
                          {role.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 text-sm rounded-full bg-black border border-gray-800 text-gray-300 hover:text-[#e6c235]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
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
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Education;
