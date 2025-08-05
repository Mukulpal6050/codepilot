'use client';
import { useState } from 'react';
import { Bot, Loader2, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const SmartFaqHelper = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: question }] }],
          }),
        }
      );

      const data = await res.json();
      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        data?.error?.message ||
        'No response';
      setAnswer(text);
    } catch (err) {
      console.error(err);
      setAnswer('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="smartfaqs" className="py-20 px-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-3 text-indigo-600 dark:text-indigo-400">
          Smart FAQ Helper
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          Ask anything about our services, pricing, features or technical issues.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., What is your refund policy?"
            className="flex-1 px-4 py-3 rounded-full text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleAsk}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Thinking...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Ask
              </>
            )}
          </button>
        </div>

        {answer && (
          <div className="mt-6 text-left bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-transparent">
            <div className="flex items-start gap-2">
              <Bot className="mt-1 w-5 h-5 text-indigo-500 shrink-0" />
              <p className="text-sm whitespace-pre-wrap">{answer}</p>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default SmartFaqHelper;
