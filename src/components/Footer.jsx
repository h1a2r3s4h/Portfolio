// components/Footer.js
import React from "react";
import {
  HeartIcon,
  CodeBracketIcon,
  ArrowUpIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/h1a2r3s4h",
      icon: <FaGithub />,
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/harshit-gangwar-101ba5241",
      icon: <FaLinkedin />,
      color: "hover:text-blue-400",
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/harshitgangwar1601/",
      icon: <SiLeetcode />,
      color: "hover:text-yellow-400",
    },
  ];

  return (
    <footer className="relative bg-black pt-16 pb-12 border-t border-gray-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #bd2323 1px, transparent 1px),
                               linear-gradient(to bottom, #bd2323 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-[#bd2323]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#0a295e]/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Floating Icons */}
      <div className="absolute top-8 left-8 opacity-10">
        <CodeBracketIcon className="h-24 w-24" />
      </div>
      <div className="absolute top-8 right-8 opacity-10">
        <RocketLaunchIcon className="h-24 w-24" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#bd2323] to-[#0a295e] flex items-center justify-center">
                <SparklesIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Harshit <span className="text-[#e6c235]">Gangwar</span>
                </h3>
                <p className="text-gray-400 text-sm">Full Stack Developer</p>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Building digital experiences with clean code, modern technologies,
              and a passion for innovation.
            </p>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-green-400 font-medium">
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">CONNECT</h4>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#bd2323] to-[#0a295e] flex items-center justify-center">
                  <span className="text-lg">📧</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:harshitgangwar1601@gmail.com"
                    className="text-white hover:text-[#e6c235] transition-colors"
                  >
                    harshitgangwar1601@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0a295e] to-[#e6c235] flex items-center justify-center">
                  <span className="text-lg">📍</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className={`w-10 h-10 rounded-lg bg-black/50 border border-gray-800 flex items-center justify-center text-gray-400 ${social.color} hover:scale-110 hover:border-gray-700 transition-all`}
                >
                  <span className="text-xl flex items-center justify-center">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to top */}
        <div className="relative my-12 flex justify-center">
          <div
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#bd2323] to-[#0a295e] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
          >
            <ArrowUpIcon className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {new Date().getFullYear()}{" "}
              <span className="text-white font-medium">Harshit Gangwar</span>. All
              rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Made with{" "}
              <HeartIcon className="h-4 w-4 inline text-[#bd2323] animate-pulse" />{" "}
              &{" "}
              <CodeBracketIcon className="h-4 w-4 inline text-[#e6c235]" />
            </p>
          </div>

          <div className="text-sm text-gray-400">
            v1.0 • Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">
            Designed and developed using Next.js, React, and Tailwind CSS
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Optimized for performance and accessibility
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
