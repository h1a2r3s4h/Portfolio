// components/Navbar.js
import React, { useState, useEffect } from "react";
import {
  CodeBracketIcon,
  SparklesIcon,
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  PhoneIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  UserIcon,
  RocketLaunchIcon,

} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Determine active section
      const sections = ['home', 'about', 'projects', 'certificates', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "#home", icon: <HomeIcon className="h-5 w-5" /> },
    { name: "ABOUT", href: "#about", icon: <UserIcon className="h-5 w-5" /> },
    { name: "PROJECTS", href: "#projects", icon: <RocketLaunchIcon className="h-5 w-5" /> },
    { name: "CERTIFICATES", href: "#certificates", icon: <DocumentTextIcon className="h-5 w-5" /> },
    // { name: "EXPERIENCE", href: "#experience", icon: <BriefcaseIcon className="h-5 w-5" /> },
    { name: "CONTACT", href: "#contact", icon: <PhoneIcon className="h-5 w-5" /> },
  ];


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled
          ? "py-3 bg-black/95 backdrop-blur-xl shadow-2xl border-b border-gray-900"
          : "py-5 bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollToTop}
                className="group relative flex items-center gap-3"
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e6c235] to-[#0a295e] rounded-xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#e6c235] to-[#0a295e] flex items-center justify-center">
                    <CodeBracketIcon className="h-5 w-5 text-white font-bold" />
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-xl font-black tracking-tighter">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#e6c235]">
                      HARSHIT
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 tracking-widest">DEVELOPER</div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 group ${activeSection === item.href.substring(1)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  <span className="absolute -inset-0.5 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                  <span className="relative flex items-center gap-2">
                    <span className="w-5 h-5">{item.icon}</span>
                    {item.name}
                  </span>
                  {activeSection === item.href.substring(1) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-[#bd2323] to-[#e6c235] rounded-full"></div>
                  )}
                </a>
              ))}


            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  {isOpen ? (
                    <XMarkIcon className="h-6 w-6 text-white" />
                  ) : (
                    <Bars3Icon className="h-6 w-6 text-white" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Mobile Menu Content */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-gray-900 transform transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Mobile Menu Header */}
          <div className="p-6 border-b border-gray-900">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#bd2323] to-[#0a295e] flex items-center justify-center">
                  <CodeBracketIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-black text-white">HARSHIT</div>
                  <div className="text-xs text-gray-400">PORTFOLIO</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
              >
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div className="p-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group ${activeSection === item.href.substring(1)
                    ? "bg-gradient-to-r from-[#bd2323]/20 to-[#0a295e]/20 border border-gray-800"
                    : "hover:bg-gray-900/50"
                    }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${activeSection === item.href.substring(1)
                    ? "bg-gradient-to-r from-[#bd2323] to-[#0a295e]"
                    : "bg-gray-900"
                    }`}>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <div className={`font-bold ${activeSection === item.href.substring(1)
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                      }`}>
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      Click to navigate
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-8">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-4 bg-gradient-to-r from-[#bd2323] to-[#0a295e] text-white rounded-xl font-bold text-center hover:shadow-lg hover:shadow-[#bd2323]/20 transition-all duration-300"
              >
                GET IN TOUCH
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-900">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0a295e]/20 to-[#bd2323]/20 flex items-center justify-center">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white">harshitgangwar1601@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#bd2323]/20 to-[#e6c235]/20 flex items-center justify-center">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-white">Uttar Pradesh, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-900">
            <p className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} Harshit Gangwar
            </p>
          </div>
        </div>
      </div>

      {/* Add custom styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;