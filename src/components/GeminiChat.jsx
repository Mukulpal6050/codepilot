'use client';
import { useState } from 'react';
import { Sparkles } from 'lucide-react';

const GeminiChat = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse('');
    setErrorMessage('');

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
          }),
        }
      );

      const data = await res.json();

      if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        setResponse(data.candidates[0].content.parts[0].text);
      } else if (data?.error?.message) {
        setErrorMessage(data.error.message);
      } else {
        setResponse('No response from Gemini.');
      }
    } catch (err) {
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hidden Trigger for Scroll + Auto Open */}
      <button id="ask-gemini-trigger" onClick={() => setOpen(true)} className="hidden" />

      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-30 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-full shadow-lg animate-bounce"
      >
        Ask Gemini
      </button>

      {/* Chat Modal */}
      {open && (
        <div
          id="ask-gemini"
          className="fixed inset-0 z-50 bg-black/40 flex justify-center items-end md:items-center p-4"
        >
          <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white w-full max-w-md rounded-xl shadow-xl p-6 relative animate-fade-in max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-slate-200 dark:scrollbar-track-slate-700">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-slate-500 hover:text-red-500 text-lg"
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold mb-4">Ask anything about development</h3>

            <textarea
              rows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. How do I create a React component?"
              className="w-full p-3 mb-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm resize-none"
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-semibold disabled:opacity-60 transition mb-4"
            >
              {loading ? 'Thinking...' : 'Ask Gemini'}
            </button>

            {errorMessage && (
              <div className="p-3 text-red-500 text-sm bg-red-100 dark:bg-red-800 rounded-md">
                {errorMessage}
              </div>
            )}

            {!loading && response && (
              <div className="p-4 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm whitespace-pre-wrap mt-2">
                {response}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiChat;
