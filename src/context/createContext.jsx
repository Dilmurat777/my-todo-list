import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  {
    /* Локальное хранилище */
  }
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [searchTodo, setSearchTodo] = useState('');

  {
    /* Сохранение в localStorage */
  }
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  {
    /* Добавление задачи */
  }
  const handleSubmit = (e) => {
    const isDuplicate = todos.find((todo) => todo.title === inputValue);
    e.preventDefault();

    if (!inputValue || inputValue.trim() === '') {
      toast.error('The task cannot be empty');
      return false;
    }
    if (isDuplicate) return toast.error('This todo already exists');
    toast.success('Задача добавлена!');
    const newTodos = {
      id: new Date().getTime(),
      title: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodos]);

    setInputValue('');
    return true;
  };

  {
    /* Удаление задачи */
  }
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleSearch = (e) => {
    setSearchTodo(e.target.value);
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        handleSubmit,
        inputValue,
        setInputValue,
        deleteTodo,
        searchTodo,
        handleSearch,
      }}>
      {props.children}
    </TodoContext.Provider>
  );
};
