'use client';
import { useState } from 'react';
import { Sparkles, Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // ✅ WORKING THEME

const CodeGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult('');
    setCopied(false);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
          }),
        }
      );
      const data = await res.json();
      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        data?.error?.message ||
        'No response';
      setResult(text);
    } catch (err) {
      console.error(err);
      setResult('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="codegen" className="py-20 px-4 bg-gradient-to-br from-slate-100 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500 mb-4">
          AI Code Generator
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          Ask me to generate any code snippet. Powered by Gemini.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Create a responsive navbar in Tailwind"
            className="flex-1 px-4 py-3 rounded-full text-sm border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-800 dark:text-white"
          />
          <button
            onClick={handleGenerate}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition disabled:opacity-50"
            disabled={loading}
          >
            <Sparkles className="w-5 h-5" />
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </div>

        {result && (
          <div className="mt-8 relative">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 z-10 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white p-2 rounded-md shadow hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            >
              {copied ? '✅ Copied' : <Copy className="w-4 h-4" />}
            </button>

            {/* Highlighter Box */}
            <div className="max-h-[400px] overflow-y-auto rounded-xl border border-slate-300 dark:border-slate-700 shadow-inner text-left scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-transparent p-4">
              <SyntaxHighlighter
                language="javascript"
                style={oneDark}
                customStyle={{
                  backgroundColor: 'transparent',
                  padding: '0',
                  fontSize: '14px',
                }}
              >
                {result}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default CodeGenerator;
