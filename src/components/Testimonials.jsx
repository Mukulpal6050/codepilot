'use client';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Sana Malik',
    feedback: 'VibeCode transformed the way I code. AI suggestions are always on point!',
    role: 'Full Stack Developer'
  },
  {
    name: 'Rohit Sharma',
    feedback: 'The UI is beautiful and intuitive. Loved how fast I could build things!',
    role: 'Frontend Engineer'
  },
  {
    name: 'Ayesha Khan',
    feedback: 'I used Copilot + VibeCode and shipped 3x faster. Game-changer!',
    role: 'Startup CTO'
  },
  {
    name: 'Nikhil Verma',
    feedback: 'Great DX and performance. The animations and UX are delightful.',
    role: 'Product Engineer'
  },
  {
    name: 'Meera Das',
    feedback: 'Integrated easily with our dev setup. Helped new hires ramp up quickly.',
    role: 'Engineering Manager'
  },
  {
    name: 'Ishaan Patel',
    feedback: 'Absolutely love the dark mode and speed. It’s now my daily driver.',
    role: 'UI/UX Developer'
  }
];

const Testimonials = () => (
  <section
    id="testimonials"
    className="py-24 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors"
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto text-center"
    >
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
        What developers are saying
      </h2>
      <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mt-4 mb-12">
        Feedback from early users of our AI-powered development platform.
      </p>

      {/* Testimonials Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group p-6 rounded-2xl backdrop-blur-md bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl transition-all duration-300"
          >
            {/* Avatar */}
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                t.name
              )}&background=6366f1&color=fff&size=128`}
              alt={t.name}
              className="w-16 h-16 rounded-full mx-auto -mt-12 border-4 border-white dark:border-slate-800 shadow-md"
            />

            {/* Rotating Icon */}


            {/* Feedback */}
            <p className="mt-6 text-slate-700 dark:text-slate-300 italic">"{t.feedback}"</p>
            <div className="mt-4 font-semibold text-slate-900 dark:text-white">{t.name}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">{t.role}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Testimonials;
