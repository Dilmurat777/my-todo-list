import SearchTodo from './SearchTodo';
import FilterTodo from './FilterTodo';
import { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { TodoContext } from '../context/createContext';

export default function Header() {
  const { theme, toggleTheme } = useContext(TodoContext);
  return (
    <div className="flex w-auto flex-row gap-4 mt-5">
      <div className='flex sm:flex-row flex-col gap-4'>
        <SearchTodo />
        <FilterTodo />
      </div>
      {theme === 'dark' ? (
        <Sun
          onClick={toggleTheme}
          className="cursor-pointer bg-primary p-2 h-[43px] w-[43px] rounded-lg hover:bg-darkPrimary"
        />
      ) : (
        <Moon
          onClick={toggleTheme}
          className="cursor-pointer bg-primary p-2 h-[43px] w-[43px] rounded-lg text-white hover:bg-darkPrimary"
        />
      )}
    </div>
  );
}
