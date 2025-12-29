import React, { useState } from "react";
import {
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mailto link (email not shown publicly)
    const mailtoLink = `mailto:harshitgangwar1601@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio Inquiry"
    )}&body=${encodeURIComponent(
      message ||
        `Hello Harshit,\n\nI came across your portfolio and would like to connect.\n\nBest regards,\n[Your Name]`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #e6c235 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#bd2323]/20 to-[#0a295e]/20 border border-[#e6c235]/20 mb-6">
            <ChatBubbleLeftRightIcon className="h-4 w-4 text-[#e6c235]" />
            <span className="text-sm font-semibold text-white tracking-wider">
              LET&apos;S CONNECT
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#e6c235] to-[#bd2323]">
              CONTACT
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Send a message and let&apos;s build something
            great together.
          </p>
        </div>

        {/* Centered Contact Form */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="relative bg-black/80 rounded-3xl border border-gray-800 p-8">
              {/* Form Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#bd2323] to-[#0a295e] flex items-center justify-center">
                  <PaperAirplaneIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    SEND A MESSAGE
                  </h3>
                  <p className="text-gray-400">
                    Direct email communication
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSendEmail} className="space-y-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email *"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-xl text-white focus:ring-2 focus:ring-[#e6c235] outline-none"
                />

                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-xl text-white focus:ring-2 focus:ring-[#e6c235] outline-none"
                />

                <textarea
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message *"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-xl text-white focus:ring-2 focus:ring-[#e6c235] outline-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#bd2323] to-[#0a295e] text-white font-bold flex justify-center items-center gap-2 hover:shadow-lg transition-all"
                >
                  {isSubmitting ? "Opening Email Client..." : "Send Message"}
                  <ArrowRightIcon className="h-5 w-5" />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  This will open your default email client
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
