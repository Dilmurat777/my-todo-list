import { Pencil, Trash2 } from 'lucide-react';
import { TodoContext } from '../context/createContext';
import { useContext } from 'react';
import NoFind from "../assets/find.png"

export default function ListTodo() {
  const { todos, deleteTodo, searchTodo } = useContext(TodoContext);
  console.log(todos);
  const filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(searchTodo.toLowerCase()));

  return (
    <div className="w-[525px] mt-5">
      {
        todos.length > 0 ? ( <ul className="flex flex-col gap-5 mt-3 w-full">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="flex flex-row gap-2 items-center justify-between w-full border-b-primary border-b-2 p-3">
            <div className="flex flex-row gap-2">
              <input type="checkbox" />
              <p>{todo.title}</p>
            </div>
            <div className="flex flex-row gap-2">
              <Pencil className="cursor-pointer text-light-gray" />
              <button onClick={() => deleteTodo(todo.id)}><Trash2 className="cursor-pointer text-light-gray" /></button>
            </div>
          </li>
        ))}
      </ul>) : (
        <div className="flex flex-col items-center justify-center">
          <img src={NoFind} alt="NoFind" />
          <p className="text-light-gray">Empty...</p>
        </div>
      )
     }
    </div>
  );
}
