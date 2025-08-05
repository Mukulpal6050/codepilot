'use client';
import { Disclosure } from '@headlessui/react';
import { ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What is CodePilot?',
    answer: 'CodePilot is an AI-powered development platform that helps developers write code faster and smarter.'
  },
  {
    question: 'Is it free to use?',
    answer: 'We offer a free plan with core features and premium plans for advanced capabilities.'
  },
  {
    question: 'Can I integrate it with GitHub Copilot?',
    answer: 'Yes! CodePilot works great alongside tools like GitHub Copilot, ChatGPT, and Gemini.'
  },
  {
    question: 'Do you offer team collaboration tools?',
    answer: 'Our Pro and Enterprise plans include features for team collaboration, analytics, and permissions.'
  },
  {
    question: 'How secure is my code and data?',
    answer: 'We use enterprise-grade encryption and secure cloud infrastructure to protect your code and data.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time from your account settings.'
  },
  {
    question: 'Do you provide customer support?',
    answer: 'Yes, our support team is available 24/7 for Pro and Enterprise customers.'
  },
  {
    question: 'Is it suitable for beginners?',
    answer: 'Absolutely! CodePilot is beginner-friendly with intelligent guidance and learning resources built-in.'
  },
  {
    question: 'Does it support mobile development?',
    answer: 'Yes, you can use it for React Native and other mobile frameworks with AI suggestions.'
  },
  {
    question: 'What languages are supported?',
    answer: 'We currently support JavaScript, TypeScript, Python, Java, and more are coming soon.'
  }
];

const FAQ = () => (
  <section
    id="faqs"
    className="relative py-24 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors"
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 mb-10">
        Frequently Asked Questions
      </h2>

      {/* Scrollable Container */}
      <div className="max-h-[500px] overflow-y-auto space-y-4 pr-2 custom-scrollbar">

        {faqs.map((faq, i) => (
          <Disclosure key={i}>
            {({ open }) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Disclosure.Button className="flex w-full justify-between items-center bg-white dark:bg-slate-800 px-4 py-3 text-left text-slate-800 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-700 rounded-t-xl">
                  <span>{faq.question}</span>
                  <ChevronUp
                    className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-4 pt-2 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 rounded-b-xl">
                  {faq.answer}
                </Disclosure.Panel>
              </motion.div>
            )}
          </Disclosure>
        ))}
      </div>
    </motion.div>
  </section>
);

export default FAQ;
