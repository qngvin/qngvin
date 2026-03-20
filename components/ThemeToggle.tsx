'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  // Get initial theme from localStorage or system preference (only on client)
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      {/* Light option */}
      <div
        className="flex flex-col gap-1 items-center cursor-pointer select-none"
        onClick={() => setTheme('light')}
      >
        <div
          className={`w-3 h-3 border transition-colors
            ${theme === 'light' ? 'bg-black' : 'border-gray-400 bg-transparent'}`}
        />
        <span
          className="whitespace-nowrap text-[15px] mt-1 tracking-[3px] font-light rotate-180"
          style={{ writingMode: 'vertical-rl' }}
        >
          LIGHT
        </span>
      </div>

      {/* Dark option */}
      <div
        className="flex flex-col gap-1 items-center cursor-pointer select-none"
        onClick={() => setTheme('dark')}
      >
        <div
          className={`w-3 h-3 border transition-colors
            ${theme === 'dark' ? 'bg-white' : 'border-gray-400 bg-transparent'}`}
        />
        <span
          className="whitespace-nowrap text-[15px] mt-1 tracking-[3px] font-light rotate-180"
          style={{ writingMode: 'vertical-rl' }}
        >
          DARK
        </span>
      </div>
    </>
  );
}
