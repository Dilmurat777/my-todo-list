import { Pencil, Trash2 } from 'lucide-react';
import { TodoContext } from '../context/createContext';
import { useContext, useState } from 'react';
import NoFind from '../assets/find.png';

export default function ListTodo() {
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');

  const { todos, deleteTodo, searchTodo, setTodos, toggleStatus, statusFilter } =
    useContext(TodoContext);
  console.log(todos);
  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.title.toLowerCase().includes(searchTodo.toLowerCase());
    const matchesStatus = statusFilter === 'all' || todo.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSave = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (!editedTitle.trim()) return todo;
      if (todo.id === id) {
        return { ...todo, title: editedTitle };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditingId(null);
  };

  return (
    <div className="w-[525px] mt-5">
      {filteredTodos.length > 0 ? (
        <ul className="flex flex-col gap-5 mt-3 w-full">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex flex-row gap-2 items-center justify-between w-full border-b-primary border-b-2 p-3">
              <div className="flex flex-row gap-2">
                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                ) : (
                  <p>{todo.title}</p>
                )}
              </div>
              <div className="flex flex-row gap-2">
                <button onClick={() => toggleStatus(todo.id)}>
                  <p>{todo.status}</p>
                </button>
                {editingId === todo.id ? (
                  <button onClick={() => handleSave(todo.id)}>Save</button>
                ) : (
                  <button
                    onClick={() => {
                      setEditingId(todo.id);
                      setEditedTitle(todo.title);
                    }}>
                    <Pencil className="cursor-pointer text-light-gray" />
                  </button>
                )}
                <button onClick={() => deleteTodo(todo.id)}>
                  <Trash2 className="cursor-pointer text-light-gray" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img src={NoFind} alt="NoFind" />
          <p className="text-light-gray">Empty...</p>
        </div>
      )}
    </div>
  );
}
