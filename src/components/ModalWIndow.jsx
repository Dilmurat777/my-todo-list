import { useState } from 'react';
import AddTodo from './AddTodo';
import { Plus } from 'lucide-react';

export default function ModalWIndow() {
  const [active, setActive] = useState(false);
  return (
    <div>
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
  );
}
