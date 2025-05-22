import { useContext} from 'react';
import { TodoContext } from '../context/createContext';

export default function FilterTodo() {
  const { statusFilter, setStatusFilter } = useContext(TodoContext);

  return (
    <div>
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="border-none rounded-lg p-2 outline-none w-full bg-primary py-3 text-white hover:bg-darkPrimary">
        <option value="all">All</option>
        <option value="new">New</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}
