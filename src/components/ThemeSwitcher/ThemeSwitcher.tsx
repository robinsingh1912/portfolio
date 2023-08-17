'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BsMoonStars, BsSun } from 'react-icons/bs';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className='inline-flex justify-center items-center aspect-square h-10 p-2 border border-gray-400 hover:border-gray-800 dark:hover:border-white shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-0 transition-all'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <BsSun /> : <BsMoonStars />}
    </button>
  );
};
