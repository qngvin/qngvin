'use client';
import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

export default function TopBorderHorse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<{ pause: () => void; play: () => void } | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [showHorse, setShowHorse] = useState(false);
  const [showPain, setShowPain] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const pausedRef = useRef(false);
  const painTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Detect dark mode
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Show horse after 10-15 seconds (randomize between 10-15)
    const delay = Math.random() * 5000 + 10000; // 10-15 seconds
    const timer = setTimeout(() => {
      setShowHorse(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const handleHorseClick = () => {
    console.log('Horse clicked!');
    pausedRef.current = true;
    setIsPaused(true);
    if (animationRef.current) {
      animationRef.current.pause();
    }
    setShowPain(true);
    if (painTimeoutRef.current) clearTimeout(painTimeoutRef.current);
    painTimeoutRef.current = setTimeout(() => {
      console.log('Hiding pain message');
      setShowPain(false);
      setIsPaused(false);
      pausedRef.current = false;
      if (animationRef.current) {
        animationRef.current.play();
      }
    }, 2000);
  };

  useEffect(() => {
    if (!containerRef.current || !showHorse) return;

    console.log('Loading horse animation...');
    // Load and play animation
    const loadAnimation = async () => {
      try {
        const response = await fetch('/Horse-Run.json');
        const animationData = await response.json();
        console.log('Animation data loaded:', animationData);

        const animation = lottie.loadAnimation({
          container: containerRef.current!,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animationData,
        });

        animationRef.current = animation;
        console.log('Animation started');

        return () => {
          animation.destroy();
        };
      } catch (error) {
        console.error('Failed to load animation:', error);
      }
    };

    const cleanup = loadAnimation();
    return () => {
      cleanup.then((fn) => fn?.());
    };
  }, [showHorse]);

  return (
    <div className="absolute -top-12 left-0 right-0 h-16 pointer-events-none overflow-hidden">
      {showHorse && (
        <div
          className="w-full h-full flex items-center relative"
          style={{
            animation: 'horseRunX 6s linear infinite',
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          <div
            ref={containerRef}
            className="w-20 h-20 shrink-0 relative"
            style={{
              filter: isDark ? 'invert(1)' : 'invert(0)',
              transform: 'scaleX(-1)',
            }}
          />
          <div
            className="absolute w-20 h-20 cursor-pointer"
            style={{
              pointerEvents: 'auto',
              left: 0,
            }}
            onClick={handleHorseClick}
          />
          {showPain && (
            <div
              className="absolute -top-8 left-0 whitespace-nowrap text-sm font-bold pointer-events-none"
              style={{
                color: isDark ? '#fff' : '#000',
                animation: 'fadeOutUp 2s ease-out forwards',
              }}
            >
              đau quá 😢
            </div>
          )}
        </div>
      )}
      <style>{`
        @keyframes horseRunX {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(100vw);
          }
        }
        
        @keyframes fadeOutUp {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-30px);
          }
        }
      `}</style>
    </div>
  );
}
