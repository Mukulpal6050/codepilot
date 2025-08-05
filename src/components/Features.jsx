'use client';
import { motion } from 'framer-motion';
import { Zap, BarChart, Shield, Code, Users, Settings } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-10 h-10 mx-auto text-gradient" />,
    title: 'AI-Assisted Coding',
    description: 'Write complex functions and boilerplate code instantly with powerful AI suggestions and completions.',
  },
  {
    icon: <BarChart className="w-10 h-10 mx-auto text-gradient" />,
    title: 'Real-time Analytics',
    description: 'Gain deep insights into your projects and team performance with beautiful, real-time dashboards.',
  },
  {
    icon: <Shield className="w-10 h-10 mx-auto text-gradient" />,
    title: 'Secure & Reliable',
    description: 'Your data and code are safe with enterprise-grade security and reliable cloud infrastructure.',
  },
  {
    icon: <Code className="w-10 h-10 mx-auto text-gradient" />,
    title: 'Clean Developer API',
    description: 'Integrate easily with REST/GraphQL APIs and SDKs built with simplicity, scalability, and speed in mind.',
  },
  {
    icon: <Users className="w-10 h-10 mx-auto text-gradient" />,
    title: 'Team Collaboration',
    description: 'Collaborate with your team in real-time using shared workspaces, roles, and commenting features.',
  },
  {
    icon: <Settings className="w-10 h-10 mx-auto text-gradient" />,
    title: 'Customizable Workflows',
    description: 'Define flexible workflows and automations to adapt to your exact development or business process.',
  },
];

const Features = () => (
  <section
    id="features"
    className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
  >
    <div className="max-w-7xl mx-auto px-4 text-center z-10 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-slate-900 dark:text-white"
      >
        Features that matter
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-400"
      >
        Our platform is designed to boost your productivity with intelligent features and a beautiful user interface.
      </motion.p>

      <div className="mt-16 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg dark:shadow-slate-900/40 hover:shadow-2xl hover:dark:shadow-slate-800 transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="icon-wrapper">{feature.icon}</div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
