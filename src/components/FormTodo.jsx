import { useContext } from 'react';
import { TodoContext } from '../context/createContext';

export default function FormTodo() {
  const { handleSubmit, inputValue, setInputValue } = useContext(TodoContext);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row gap-2 mt-3 w-full items-center justify-between">
        <input
          className="border-2 border-primary rounded-lg p-2 outline-none w-full placeholder:text-placeholder"
          type="text"
          placeholder="Input your note..."
          value={inputValue}
          onChange={handleInput}
        />
      </form>
    </div>
  );
}
