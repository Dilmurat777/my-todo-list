import SearchTodo from './SearchTodo';
import FilterTodo from './FilterTodo';
import { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { TodoContext } from '../context/createContext';

export default function Header() {
  const { theme, toggleTheme } = useContext(TodoContext);
  return (
    <div className="flex flex-row gap-4 mt-3 w-full items-center mt-5">
      <SearchTodo />
      <FilterTodo />
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
