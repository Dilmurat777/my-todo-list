import { Search } from 'lucide-react';
import { useContext } from 'react';
import { TodoContext } from '../context/createContext';

export default function SearchTodo() {
  const { theme } = useContext(TodoContext);
  const { searchTodo, handleSearch } = useContext(TodoContext);
  return (
    <div
      className={`w-[500px] border rounded-lg flex items-center px-2 ${
        theme === 'dark' ? 'border-white' : 'border-primary'
      }`}>
      <input
        type="text"
        className={`p-2 outline-none w-full ${
          theme === 'dark' ? 'text-white bg-dark' : 'text-black'
        }`}
        placeholder="Search note..."
        value={searchTodo}
        onChange={handleSearch}
      />
      <Search className={theme === 'light' ? 'text-primary' : 'text-white'} />
    </div>
  );
}
