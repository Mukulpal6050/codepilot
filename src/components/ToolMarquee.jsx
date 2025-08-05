import React from 'react';

const tools = [
  { name: 'ChatGPT', logo: '/tools/chatgpt.png' },
  { name: 'GitHub Copilot', logo: '/tools/github-copilot.png' },
  { name: 'Cursor IDE', logo: '/tools/cursor.jpeg' },
  { name: 'Replit Ghostwriter', logo: '/tools/replit.png' },
  { name: 'VS Code', logo: '/tools/vscode.jpeg' },
  { name: 'Gemini AI', logo: '/tools/gemini.jpeg' },
  { name: 'OpenAI Playground', logo: '/tools/openai.png' },
  { name: 'Codeium', logo: '/tools/codeium.png' },
  { name: 'Notion AI', logo: '/tools/notion.png' },
  { name: 'Figma AI', logo: '/tools/figma.png' },
  { name: 'Midjourney', logo: '/tools/midjourney.png' },
  { name: 'Canva', logo: '/tools/canva.jpeg' },
  { name: 'Claude AI', logo: '/tools/claude.png' },
  { name: 'Bing Copilot', logo: '/tools/bing.jpeg' },
  { name: 'StackBlitz', logo: '/tools/stackblitz.png' },
  { name: 'Codesandbox', logo: '/tools/codesandbox.jpeg' },
  { name: 'Adobe Firefly', logo: '/tools/firefly.png' },
  { name: 'Kite', logo: '/tools/kite.png' },
];

const ToolMarquee = () => {
  return (
    <section className="bg-white dark:bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500 mb-4">
          Your AI Toolkit, All in One Place
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          Explore a powerful set of tools used by modern developers to code, design,
          debug, and create with the help of AI. From code generation to UI design —
          your productivity is about to get a serious upgrade.
        </p>
      </div>

      {/* Marquee Section */}
      <div className="overflow-hidden py-6 bg-gray-100 dark:bg-slate-800 border-y border-slate-200 dark:border-slate-700">
        <div className="whitespace-nowrap animate-marquee flex items-center gap-6 sm:gap-10">
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[100px] sm:min-w-[120px] px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 shadow-sm bg-gradient-to-br from-white/80 to-slate-100/70 dark:from-slate-800/80 dark:to-slate-700/70 backdrop-blur-sm transition-transform hover:scale-105"
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
              <span className="text-xs mt-2 text-slate-600 dark:text-slate-300 text-center">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolMarquee;
