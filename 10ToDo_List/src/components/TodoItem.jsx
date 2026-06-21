import React, { useState } from 'react'
import { useToDo } from '../context/ToDoContext';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)

  const {updateTodo, deleteTodo, toggleTodo} = useToDo()

  const editTodo = () =>{
    updateTodo(todo.id, {...todo, todo:todoMsg})
    setIsTodoEditable(false)
  }

  const toggleComplete = () =>{
    toggleTodo(todo.id)
  }


  return (
    <div
      className={`flex border rounded-xl px-4 py-3 gap-x-3 
              duration-300 transition-all
               text-white ${todo.completed 
                ? "bg-emerald-500/15 border-emerald-500/30" 
                : "bg-white/5 border-white/10 hover:border-indigo-500/30 hover:bg-white/10"
              }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer w-5 h-5 accent-emerald-500 rounded"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-indigo-500/40 px-2" : "border-transparent"
          } ${todo.completed ? "line-through text-slate-500" : "text-slate-200"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-white/10 justify-center items-center bg-white/10 hover:bg-red-500/20 hover:border-red-500/30 shrink-0 transition-all duration-200"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
