// Hero.jsx
import { motion } from 'framer-motion';

const Hero = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    id='home'
    className="bg-gradient-to-br h-[100vh] from-indigo-50 via-white to-purple-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-14 relative overflow-hidden"
  >
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-full">
      {/* Text Section */}
      <div className="text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight"
        >
          Your AI-powered <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
            Dev Assistant
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300 mx-auto md:mx-0"
        >
          Ask Gemini or Generate Code instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex justify-center md:justify-start space-x-4"
        >
          <a
            href="#ask-gemini"
            onClick={() => {
              setTimeout(() => {
                const trigger = document.getElementById('ask-gemini-trigger');
                trigger?.click(); // Simulate click
              }, 300); // Delay to let scroll finish
            }}
            className="inline-flex items-center justify-center bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-full text-lg font-semibold shadow transition hover:scale-105 hover:text-white"
          >
            Try Ask Gemini
          </a>
          <a
            href="#why"
            className="bg-white dark:bg-slate-800 text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold border border-indigo-200 hover:bg-indigo-50 dark:hover:bg-slate-700 transition-colors shadow-lg transform hover:scale-105"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="bg-slate-900 p-4 md:p-6 rounded-xl shadow-lg dark:border dark:border-slate-700">
          <img
            src="/images/robot-coding.png"
            alt="AI Coding Robot"
            className="w-72 md:w-96 h-auto shadow-md hover:shadow-2xl transition-all duration-300"
          />
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default Hero;
