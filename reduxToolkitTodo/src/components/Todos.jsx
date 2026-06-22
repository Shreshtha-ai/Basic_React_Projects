import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { removeTodo } from '../features/todoSlice'

function Todos () {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    return (
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-slate-300 mb-3">
            📝 Your Todos
          </h2>
          <ul className="flex flex-col gap-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300"
              >
                <span>{todo.text}</span>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="ml-4 w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 border border-white/10 hover:bg-red-500/20 hover:border-red-500/30 text-sm transition-all duration-200"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>
    )
}

export default Todos
