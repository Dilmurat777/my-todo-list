import { Search, Sun } from 'lucide-react';
import FilterTodo from './FilterTodo';
import { useContext } from 'react';
import { TodoContext } from '../context/createContext';
import ThemeSwitcher from './ThemeSwitcher';

export default function SearchTodo() {
  const { searchTodo, handleSearch } = useContext(TodoContext);
  return (
    <div className="flex flex-row gap-4 mt-3 w-full items-center">
      <div className="w-[500px] border rounded-lg flex items-center px-2 border-primary">
        <input type="text" className="p-2 outline-none w-full" placeholder="Search" value={searchTodo} onChange={handleSearch}/>
        <Search className='cursor-pointer text-primary'/>
      </div>
      <FilterTodo />
      <ThemeSwitcher />
    </div>
  );
}
