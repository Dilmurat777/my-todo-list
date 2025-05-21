import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    if (localStorage.theme) {
      return localStorage.theme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className='flex items-center'>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? (
          <Moon className="cursor-pointer bg-primary p-2  w-11 h-11 rounded-lg text-white" />
        ) : (
          <Sun className="cursor-pointer bg-primary p-2  w-11 h-11 rounded-lg text-white" />
        )}
      </button>
    </div>
  );
}
