export default function FilterTodo() {
  return (
    <div>
      <select className="border-none rounded-lg p-2 outline-none w-full bg-primary py-3 text-white">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}
