import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import './index.css';
import ToolMarquee from './components/ToolMarquee';
import CodeGenerator from './components/codeGenerator';
import SmartFaqHelper from './components/SmartFaqHelper';
import GeminiChat from './components/GeminiChat';
import WhyVibeCode from './components/WhyVibeCode';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-white">
      <Header />
      <Hero />
      <ToolMarquee />
      <GeminiChat />
      <CodeGenerator />
      <Features />
      <WhyVibeCode />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <FAQ />
      <SmartFaqHelper />
      <Footer />
    </div>
  );
}

export default App;
