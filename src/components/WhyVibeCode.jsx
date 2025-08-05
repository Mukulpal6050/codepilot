import { motion } from 'framer-motion';
import { Lightbulb, ShieldCheck, Code2 } from 'lucide-react';

const WhyCodePilot = () => (
  <section
    id="why"
    className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-800 dark:text-white"
  >
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
      >
        Why CodePilot?
      </motion.h2>

      <p className="mb-12 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
        CodePilot empowers developers with smart AI tools to code faster, debug smarter, and find answers instantly — all in one place.
      </p>

      <div className="grid md:grid-cols-3 gap-8 ">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl transition-all duration-300"
        >
          <Lightbulb className="text-indigo-600 mb-4 w-8 h-8 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Smart Suggestions</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Our Gemini-powered Ask Assistant gives intelligent dev answers in seconds.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl transition-all duration-300"
        >
          <Code2 className="text-indigo-600 mb-4 w-8 h-8 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Code Generation</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Instantly generate production-ready code snippets with zero guesswork.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl transition-all duration-300"
        >
          <ShieldCheck className="text-indigo-600 mb-4 w-8 h-8 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Your data and queries are secure — built for devs, backed by trust.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyCodePilot;
