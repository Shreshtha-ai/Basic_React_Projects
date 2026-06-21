import React, { useState } from 'react'
import { useToDo } from '../context/ToDoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useToDo()

const add = (e) => {
    e.preventDefault()
    if (!todo) return
 
    addTodo({todo, completed: false})
    setTodo("")
}
    

    return (
        <form  onSubmit = {add} className="flex gap-0">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-white/10 rounded-l-xl px-4 outline-none duration-300 bg-white/10 py-2.5 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 text-white"
                value = {todo}
                onChange = {(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-xl px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shrink-0 font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 active:scale-95">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

