import React, { useState, useRef, useEffect } from "react";
import {
  DocumentTextIcon,
  ArrowDownTrayIcon,
  SparklesIcon,
  EyeIcon
} from "@heroicons/react/24/outline";

import DSA from "./certificates/DSA.jpeg";
import ReactJS from "./certificates/Reactjs.pdf";
import Backend from "./certificates/Backend.pdf";
import Python from "./certificates/Python.pdf";
import GenAI from "./certificates/GenAI.pdf";

const Certificates = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    setCertificates([
      {
        id: 1,
        title: "DSA with C++",
        issuer: "Physics Wallah",
        skills: ["Data Structures", "C++"],
        image: DSA,
        category: "Data Structures"
      },
      {
        id: 2,
        title: "React JS ",
        issuer: "Udemy",
        skills: ["Bootstrap", "CSS"],
        image: ReactJS,
        category: "Frontend"
      },
      {
        id: 3,
        title: "Backend",
        issuer: "Udemy",
        skills: ["Nodejs", "Expressjs", "MongoDB"],
        image: Backend,
        category: "Backend"
      },
      {
        id: 4,
        title: "Generative AI & Agentic AI",
        issuer: "Udemy",
        skills: ["LangChain", "Langraph"],
        image: GenAI,
        category: "Generative AI"
      },
      {
        id: 5,
        title: "Python",
        issuer: "Udemy",
        skills: ["Python"],
        image: Python,
        category: "Programming"
      }
    ]);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const openImageInNewTab = (imageSrc, title) => {
    const newTab = window.open("", "_blank");
    newTab.document.write(`
      <html>
        <head>
          <title>${title}</title>
          <style>
            body {
              margin: 0;
              padding: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              background-color: #111;
            }
            img {
              max-width: 100%;
              max-height: 90vh;
              border-radius: 12px;
            }
          </style>
        </head>
        <body>
          <img src="${imageSrc}" alt="${title}" />
        </body>
      </html>
    `);
    newTab.document.close();
  };

  return (
    <section id="certificates" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-20">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#bd2323]/20 to-[#0a295e]/20 border border-[#e6c235]/20 mb-6">
            <DocumentTextIcon className="h-4 w-4 text-[#e6c235]" />
            <span className="text-sm font-semibold text-white tracking-wider">
              ACHIEVEMENTS & CERTIFICATIONS
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#e6c235] to-[#bd2323]">
              CERTIFICATES
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements validating expertise.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {certificates.map((certificate) => (
            <div key={certificate.id} className="flex-none w-[300px] md:w-[350px]">
              <div className="group relative">
                <div className="relative bg-black/80 rounded-2xl border border-gray-800 overflow-hidden">
                  <div
                    className="h-48 cursor-pointer"
                    onClick={() =>
                      openImageInNewTab(certificate.image, certificate.title)
                    }
                  >
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {certificate.title}
                    </h3>
                    <p className="text-[#e6c235]">{certificate.issuer}</p>
                    <span className="text-sm text-gray-400">
                      {certificate.date}
                    </span>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {certificate.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-black/50 text-gray-400 rounded-full border border-gray-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        openImageInNewTab(
                          certificate.image,
                          certificate.title
                        )
                      }
                      className="mt-4 flex items-center gap-2 text-sm text-[#e6c235]"
                    >
                      <EyeIcon className="h-4 w-4" />
                      View Full Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0a295e]/20 to-[#bd2323]/20 rounded-full border border-gray-800">
            <SparklesIcon className="h-5 w-5 text-[#e6c235]" />
            <span className="text-gray-300">
              All certificates are verifiable and available for detailed view
            </span>
          </div>
        </div>

      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Certificates;
