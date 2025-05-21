import { useContext, useState } from 'react';
import ListTodo from './components/ListTodo';
import AddTodo from './components/AddTodo';
import { Plus } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

import { TodoContext } from './context/createContext';
import Header from './components/Header';

export default function App() {
  const { theme } = useContext(TodoContext);
  const [active, setActive] = useState(false);

  return (
    <div className={`App ${theme === 'light' ? 'bg-white' : 'bg-dark text-white'}`}>
      <div
        className={`container max-w-3xl mx-auto px-4 flex flex-col items-center relative h-screen`}>
        <h1 className="text-2xl font-bold mt-5 uppercase">📋 Todo List</h1>

        <Header />
        <ListTodo />

        {/* Кнопка Add */}
        <div className="absolute bottom-8 right-8 z-10">
          <button
            onClick={() => setActive(true)}
            className="bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-darkPrimary">
            <Plus className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Модалка + затемнение */}
        {active && (
          <div
            className="fixed inset-0 bg-black-500 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={() => setActive(false)}>
            <AddTodo active={active} setActive={setActive} />
          </div>
        )}
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
