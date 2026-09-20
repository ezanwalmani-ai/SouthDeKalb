import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      id="scroll-progress-bar"
      className="fixed top-0 left-0 right-0 h-[2px] z-[90] bg-transparent pointer-events-none"
    >
      <div 
        className="h-full bg-[#FF5500] transition-[width] duration-75 ease-out shadow-[0_0_8px_rgba(255,85,0,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
