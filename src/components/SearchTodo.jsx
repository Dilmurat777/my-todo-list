import { Search, Sun } from 'lucide-react';
import FilterTodo from './FilterTodo';

export default function SearchTodo() {
  return (
    <div className="flex flex-row gap-4 mt-3 w-full items-center">
      <div className="w-[500px] border rounded-lg flex items-center px-2 border-primary">
        <input type="text" className="p-2 outline-none w-full" placeholder="Search" />
        <Search className='cursor-pointer text-primary'/>
      </div>
      <FilterTodo />
      <Sun className="cursor-pointer bg-primary p-2  w-11 h-11 rounded-lg text-white" />
    </div>
  );
}
