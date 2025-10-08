import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'BUTTON' ||
                           target.tagName === 'A' ||
                           target.closest('button') !== null ||
                           target.closest('a') !== null;
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-all duration-200 hidden lg:block ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${isHovering ? 'scale-150' : 'scale-100'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className={`rounded-full blur-xl transition-all duration-300 ${
        isHovering
          ? 'w-12 h-12 bg-[#FFB32C]/40 dark:bg-[#FFB32C]/50'
          : 'w-8 h-8 bg-[#FFB32C]/20 dark:bg-[#FFB32C]/30'
      }`}></div>
      <div className={`absolute inset-0 m-auto rounded-full transition-all duration-300 ${
        isHovering
          ? 'w-3 h-3 bg-[#FFB32C] dark:bg-[#FFB32C]'
          : 'w-2 h-2 bg-[#FFB32C]/70 dark:bg-[#FFB32C]/80'
      }`}></div>
    </div>
  );
}
