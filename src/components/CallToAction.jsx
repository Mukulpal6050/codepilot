'use client';
import { motion } from 'framer-motion';

const CTA = () => (
  <motion.section
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="relative overflow-hidden z-0 h-[470px]"
  >
    {/* BACKGROUND — Hero-style (light mode), dark same as before */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-700" />

    {/* Content */}
    <div style={{ paddingBottom: '100px' }} className="relative z-10 py-28 px-6 text-center text-white">
      {/* Pricing-style Gradient Heading */}
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
        Ready to supercharge your workflow?
      </h2>
      <p className="mt-4 max-w-xl mx-auto text-lg text-white/90 dark:text-slate-300">
        Join 10,000+ developers building smarter with our AI-enhanced dev tools.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold transform hover:scale-105 hover:bg-slate-100 transition-all duration-300"
        >
          Join Waitlist
        </a>
        <a
          href="#"
          className="bg-indigo-800 px-6 py-3 rounded-full font-semibold text-white transform hover:scale-105 hover:bg-indigo-900 transition-all duration-300"
        >
          Book a Demo
        </a>
      </div>
    </div>

    {/* CURVE */}
    <svg
      className="absolute bottom-0 left-0 w-full h-60 z-0 animate-wave"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        className="text-purple-500 dark:text-slate-900"
        d="M0,224L60,208C120,192,240,160,360,144C480,128,600,128,720,160C840,192,960,256,1080,266.7C1200,277,1320,235,1380,213.3L1440,192V320H0Z"
      ></path>
    </svg>
  </motion.section>
);

export default CTA;
