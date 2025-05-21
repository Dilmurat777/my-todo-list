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
  const [statusFilter, setStatusFilter] = useState('all');

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
      status: 'new',
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

  {
    /* Поиск задачи */
  }
  const handleSearch = (e) => {
    setSearchTodo(e.target.value);
  };

const toggleStatus = (id) => {
  const newTodos = todos.map((todo) => {
    if (todo.id === id) {
      let newStatus;
      if (todo.status === 'new') newStatus = 'completed';
      else if (todo.status === 'completed') newStatus = 'uncompleted';
      else newStatus = 'new';
      return { ...todo, status: newStatus };
    }
    return todo;
  });
  setTodos(newTodos);
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
        toggleStatus,
        statusFilter,
        setStatusFilter,
      }}>
      {props.children}
    </TodoContext.Provider>
  );
};
