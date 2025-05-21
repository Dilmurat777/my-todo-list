import { useState } from 'react';
import ListTodo from './components/ListTodo';
import SearchTodo from './components/SearchTodo';
import AddTodo from './components/AddTodo';
import { Plus } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="App">
      <div className="container max-w-3xl mx-auto px-4 flex flex-col items-center relative h-screen">
        <h1 className="text-2xl font-bold mt-5 uppercase">📋 TodoList</h1>
        <SearchTodo />
        <ListTodo />

        {/* Кнопка Add */}
        <div className="absolute bottom-8 right-8 z-10">
          <button
            onClick={() => setActive(true)}
            className="bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full">
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
      <Toaster position='top-center'/>
    </div>
  );
}
