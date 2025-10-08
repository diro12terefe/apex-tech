import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200/20 dark:bg-gray-800/20 z-50">
      <div
        className="h-full bg-gradient-to-r from-[#FFB32C] to-[#E69500] transition-all duration-150"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
