import { useContext } from 'react';
import { TodoContext } from '../context/createContext';
import FormTodo from './FormTodo';

export default function AddTodo({ active, setActive }) {
  const { handleSubmit, theme } = useContext(TodoContext);

  if (!active) {
    return null;
  }

  return (
    <div
      className={`relative top-0 right-0 rounded-xl px-8 ${
        theme === 'light' ? 'bg-white' : 'bg-dark'
      }`}>
      <div className="sm:w-[440px] h-[289px] mt-2" onClick={(e) => e.stopPropagation()}>
        <h2
          className={`font-bold text-center uppercase ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}>
          New Note
        </h2>
        <div className="flex flex-col items-center justify-between h-[92%]	">
          <FormTodo />
          <div className="flex flex-row gap-2 w-full items-center justify-between mb-4">
            <button
              className="border-2 border-primary p-2 px-5 rounded-md text-primary hover:bg-primary hover:text-white hover:transform hover:scale-105 duration-100"
              onClick={() => setActive(false)}>
              Cancel
            </button>

            <button
              className="bg-primary p-2 px-5 rounded-md text-white hover:bg-darkPrimary hover:transform hover:scale-105 duration-100"
              onClick={(e) => {
                handleSubmit(e);
                setActive(false);
              }}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
