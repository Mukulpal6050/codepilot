'use client';
import { motion } from 'framer-motion';
import { Code, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-14 scroll-smooth"
  >
    {/* Rotated curve top */}
    <svg
      className="absolute top-0 left-0 w-full h-28 z-10 animate-wave rotate-180"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        className="text-slate-900"
        d="M0,96 C180,160 300,0 450,30 C600,60 750,160 900,130 C1050,100 1260,0 1440,80 L1440,0 L0,0 Z"
      />
    </svg>

    {/* Main Content */}
    <div className="relative z-20 max-w-7xl mx-auto px-4">
      <div className="grid gap-12 md:grid-cols-5 text-center md:text-left">
        {/* Company Info */}
        <div className="md:col-span-1">
          <a
            href="#"
            className="flex justify-center md:justify-start items-center space-x-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500"
          >
            <Code className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
            <span>CodePilot</span>
          </a>
          <p className="mt-4 text-slate-400 text-sm">
            Building the future of software development with AI-powered tools.
          </p>
          <p className="mt-1 text-slate-500 text-xs">
            Made with ❤️ in India 🇮🇳
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><a href="#features" className="hover:text-indigo-400 transition">Features</a></li>
            <li><a href="#pricing" className="hover:text-indigo-400 transition">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-indigo-400 transition">Testimonials</a></li>
            <li><a href="#faqs" className="hover:text-indigo-400 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Documentation</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-indigo-400 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Status</a></li>
            <li><a href="mailto:support@CodePilot.dev" className="hover:text-indigo-400 transition">Email Support</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
          <p className="text-slate-400 text-sm mb-3">Get product updates & coding tips.</p>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 w-full sm:w-auto px-3 py-2 rounded-l-md text-sm text-black"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 sm:ml-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-transparent bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 h-px mb-6" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <div className="mb-2 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} CodePilot. All rights reserved.
        </div>
        <div className="space-x-4 text-center">
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms" className="hover:text-white">Terms of Service</a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-6 mb-[40px] flex justify-center md:justify-end space-x-4">
        <a
          href="https://github.com/Mukulpal6050"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition hover:scale-110"
        >
          <Github className="w-6 h-6 drop-shadow" />
        </a>

        <a
          href="https://x.com/m_vines1" // Replace with real one
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-sky-400 transition hover:scale-110"
        >
          <Twitter className="w-6 h-6 drop-shadow" />
        </a>

        <a
          href="https://www.linkedin.com/in/mukul-pal-4a1b8b253/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-blue-500 transition hover:scale-110"
        >
          <Linkedin className="w-6 h-6 drop-shadow" />
        </a>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
