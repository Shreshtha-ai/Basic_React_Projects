import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))    // dispatcher use reducer to update state in store
        setInput("") // empty input field after adding the todo
    }

  return (
    <form onSubmit={addTodoHandler} className="flex gap-0">
      <input
        type="text"
        className="w-full border border-white/10 rounded-l-xl px-4 py-2.5 outline-none bg-white/10 placeholder-slate-400 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-300"
        placeholder="✍️ Write a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-xl px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shrink-0 font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 active:scale-95"
      >
        ➕ Add
      </button>
    </form>
  )
}
export default AddTodo