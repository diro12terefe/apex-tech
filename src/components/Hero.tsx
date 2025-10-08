import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Hexagon, Triangle, Circle } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Building digital experiences that define tomorrow';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#050D1A] dark:via-[#0A1A35] dark:to-[#162947]"
    >
      <div
        className="absolute inset-0 opacity-40 dark:opacity-30"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFB32C]/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0A1A35]/30 dark:bg-[#FFCC66]/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Hexagon className="absolute top-20 left-10 w-16 h-16 text-[#FFB32C]/20 animate-float" style={{ animationDelay: '0s' }} />
        <Triangle className="absolute top-40 right-20 w-12 h-12 text-[#0A1A35]/20 dark:text-[#FFB32C]/20 animate-float" style={{ animationDelay: '1s' }} />
        <Circle className="absolute bottom-32 left-1/4 w-20 h-20 text-[#FFB32C]/20 animate-float" style={{ animationDelay: '1.5s' }} />
        <Hexagon className="absolute bottom-20 right-1/3 w-14 h-14 text-[#0A1A35]/20 dark:text-[#FFCC66]/20 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass-morphism-light dark:glass-morphism rounded-full mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-[#FFB32C]" />
          <span className="text-sm font-medium">Engineering Excellence Since 2024</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          {displayedText}
          <span className="inline-block w-1 h-16 md:h-24 bg-[#FFB32C] ml-2 animate-pulse"></span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '2s' }}>
          We're <span className="font-bold text-[#FFB32C]">APEX</span> — a full-stack agency building world-class web products that scale, perform,
          and inspire.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '2.5s' }}>
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 bg-gradient-to-r from-[#FFB32C] to-[#E69500] text-[#0A1A35] rounded-full font-semibold hover:shadow-2xl hover:shadow-[#FFB32C]/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Start Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="px-8 py-4 glass-morphism-light dark:glass-morphism rounded-full font-semibold hover:scale-105 transition-all duration-300"
          >
            See Our Work
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'Projects Delivered', value: '50+' },
            { label: 'Team Members', value: '8+' },
            { label: 'Client Satisfaction', value: '100%' },
            { label: 'Years Combined Exp', value: '25+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 glass-morphism-light dark:glass-morphism rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${3 + index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0A1A35] to-[#FFB32C] dark:from-[#FFB32C] dark:to-[#FFCC66] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#FFB32C] dark:border-[#FFB32C] rounded-full p-1">
          <div className="w-1.5 h-3 bg-[#FFB32C] rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
